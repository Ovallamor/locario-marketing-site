// app/prenotazioni-online/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { TrackingSources } from '@/components/TrackingSources'
import { TrialCTA } from '@/components/TrialCTA'
import Link from 'next/link'
import { TrialLink } from '@/components/TrialLink'
import { ArrowRight, Clock, Smartphone, BarChart3 } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Prenotazioni Online per la tua Attività | Locario',
  description:
    'Con Locario trasformi Google Business, Instagram, WhatsApp e il tuo sito in canali di prenotazione misurabili. Un link, tutti i canali tracciati. Prova gratis.',
  path: '/prenotazioni-online',
  keywords: [
    'prenotazioni online attività locale',
    'link prenotazione online',
    'sistema prenotazioni web',
    'prenotazioni da Google Instagram',
  ],
})

const vantaggi = [
  {
    icon: <Clock size={22} />,
    title: 'Prenotazioni 24/7',
    desc: 'I clienti prenotano di notte, nei weekend, quando tu sei chiuso. Senza telefonate.',
    color: '#6C63FF',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Tracciamento automatico',
    desc: 'Ogni canale ha il suo identificatore. Sai sempre quante prenotazioni porta ciascuno.',
    color: '#00D4FF',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Nessuna telefonata inutile',
    desc: 'I clienti vedono la disponibilità in tempo reale e prenotano da soli.',
    color: '#22C55E',
  },
]

export default function PrenotazioniOnlinePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Prenotazioni online per la tua attività:{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              un link, tutti i canali
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Con Locario trasformi sito, Google Business Profile, Instagram, WhatsApp e campagne
            pubblicitarie in canali di prenotazione chiari e misurabili. Un solo sistema per ricevere,
            gestire e tracciare ogni richiesta.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <TrialLink
              source="hero"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                boxShadow: '0 8px 32px rgba(108, 99, 255, 0.4)',
              }}
            >
              Prova gratis 30 giorni <ArrowRight size={18} />
            </TrialLink>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA IL LINK */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Come funziona il{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                link prenotazione tracciato
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
              Non è un semplice link. Ogni canale ha il suo identificatore univoco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Generi il link dal pannello',
                desc: 'Dal tuo account Locario crei link tracciati per ogni canale: uno per Instagram, uno per Google, uno per il sito web.',
                color: '#6C63FF',
              },
              {
                step: '02',
                title: 'Lo metti dove vuoi',
                desc: 'Bio Instagram, bottone del sito, messaggio automatico WhatsApp, status, campagne Google. Ovunque.',
                color: '#00D4FF',
              },
              {
                step: '03',
                title: 'Vedi i dati in tempo reale',
                desc: 'Ogni prenotazione arriva con il suo canale già registrato. La dashboard mostra quante vengono da dove.',
                color: '#22C55E',
              },
            ].map((step) => (
              <div
                key={step.step}
                className="text-center rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl font-black"
                  style={{
                    background: `${step.color}15`,
                    color: step.color,
                  }}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VANTAGGI */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {vantaggi.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6"
                style={{
                  background: `${v.color}08`,
                  border: `1px solid ${v.color}25`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${v.color}15`, color: v.color }}
                >
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKING SOURCES */}
      <TrackingSources compact />

      {/* INTERNAL LINKS */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prenotazioni online per ogni settore
          </h2>
          <p className="text-base mb-8" style={{ color: '#A1A1AA' }}>
            Che tu gestisca un ristorante, un bar, un salone, un centro estetico o uno studio dentistico, il sistema si
            adatta al tuo flusso di lavoro.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/gestionale-prenotazioni-ristorante', label: 'Ristoranti e Pizzerie' },
              { href: '/prenotazioni-online-ristorante', label: 'Prenotazioni Online Ristorante' },
              { href: '/gestire-prenotazioni-whatsapp', label: 'WhatsApp' },
              { href: '/prenotazioni-da-google-business-profile', label: 'Google Business' },
              { href: '/gestionale-prenotazioni-parrucchieri', label: 'Parrucchieri' },
              { href: '/gestionale-prenotazioni-centro-estetico', label: 'Centri Estetici' },
              { href: '/gestionale-prenotazioni-bar', label: 'Bar' },
              { href: '/gestionale-barber-shop', label: 'Barber Shop' },
              { href: '/gestionale-prenotazioni-studio-dentistico', label: 'Studi Dentistici' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: 'rgba(108, 99, 255, 0.1)',
                  border: '1px solid rgba(108, 99, 255, 0.25)',
                  color: '#6C63FF',
                }}
              >
                {link.label} <ArrowRight size={13} className="inline ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrialCTA />
    </>
  )
}
