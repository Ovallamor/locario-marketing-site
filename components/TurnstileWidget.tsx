"use client"

import { useEffect, useRef } from "react"

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""

type TurnstileApi = {
  render: (el: HTMLElement, opts: object) => string
  reset?: (widgetId?: string) => void
  remove?: (widgetId?: string) => void
}
type TurnstileWindow = typeof window & { turnstile?: TurnstileApi }

/** True se le chiavi Turnstile sono configurate: i form lo usano per decidere se chiedere il token. */
export const turnstileEnabled = SITE_KEY !== ""

/**
 * Widget anti-bot Cloudflare Turnstile.
 * - onToken(token) quando la verifica passa, onToken(null) se scade o fallisce.
 * - Cambia `resetKey` per rigenerare la verifica (es. dopo un errore del server: il token e' monouso).
 * Senza NEXT_PUBLIC_TURNSTILE_SITE_KEY non mostra nulla.
 */
export default function TurnstileWidget({
  onToken,
  resetKey = 0,
  theme = "light",
}: {
  onToken: (token: string | null) => void
  resetKey?: number
  theme?: "light" | "dark" | "auto"
}) {
  const boxRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<string | null>(null)
  const onTokenRef = useRef(onToken)

  useEffect(() => { onTokenRef.current = onToken })

  useEffect(() => {
    if (!SITE_KEY || !boxRef.current) return
    const w = window as TurnstileWindow
    let cancelled = false

    function mount() {
      if (cancelled || !w.turnstile || !boxRef.current) return
      widgetRef.current = w.turnstile.render(boxRef.current, {
        sitekey: SITE_KEY,
        theme,
        callback: (token: string) => onTokenRef.current(token),
        "expired-callback": () => onTokenRef.current(null),
        "error-callback": () => onTokenRef.current(null),
      })
    }

    if (w.turnstile) {
      mount()
    } else {
      const existing = document.querySelector<HTMLScriptElement>('script[data-turnstile-api]')
      if (existing) {
        existing.addEventListener("load", mount)
      } else {
        const script = document.createElement("script")
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
        script.async = true
        script.dataset.turnstileApi = "1"
        script.onload = mount
        document.head.appendChild(script)
      }
    }

    return () => {
      cancelled = true
      if (widgetRef.current) w.turnstile?.remove?.(widgetRef.current)
      widgetRef.current = null
    }
  }, [theme])

  useEffect(() => {
    if (resetKey === 0 || !SITE_KEY) return
    onTokenRef.current(null)
    ;(window as TurnstileWindow).turnstile?.reset?.(widgetRef.current ?? undefined)
  }, [resetKey])

  if (!SITE_KEY) return null
  return <div ref={boxRef} className="flex justify-center" />
}
