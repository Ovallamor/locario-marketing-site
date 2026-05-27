// app/gestione-clienti/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { TrialCTA } from '@/components/TrialCTA'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { LINKS } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Software Gestione Clienti per Attività Locali | Locario',
  description:
    'Locario costruisce uno storico clienti strutturato per la tua attività: prenotazioni passate, preferenze, note, canale acquisizione. Fidelizza e personalizza il servizio.',
  path: '/gestione-clienti',
  keywords: [
    'gestione clienti attività locale',
    'software crm attività',
    'storico clienti ristorante',
    'scheda cliente parrucchiere',
    'fidelizzazione clienti sistema prenotazioni',
  ],
})

const features = [
  {
    title: 'Scheda cliente completa',
    desc: 'Nome, contatto, note, preferenze e allergie. Tutto in un posto accessibile in 2 clic.',
    color: '#6C63FF',
  },
  {
    title: 'Storico prenotazioni',
    desc: 'Ogni appuntamento passato è salvato. Vedi quante volte è venuto, cosa ha prenotato e quando.',
    color: '#00D4FF',
  },
  {
    title: 'Canale di acquisizione',
    desc: 'Sai da dove è arrivato ogni cliente la prima volta: Google, Instagram, QR code o passaparola.',
    color: '#22C55E',
  },
  {
    title: 'Frequenza delle visite',
    desc: 'Ogni quanto torna? L\'ultima visita quando è stata? I clienti a rischio abbandono si vedono subito.',
    color: '#F59E0B',
  },
  {
    title: 'Note e preferenze',
    desc: 'Allergie, richieste speciali, stylist preferito, tavolo preferito. Tutto annotato e disponibile.',
    color: '#E1306C',
  },
  {
    title: 'Profilo sempre aggiornato',
    desc: 'Ogni nuova prenotazione aggiorna automaticamente la scheda. Niente da fare manualmente.',
    color: '#14B8A6',
  },
]

export default function GestioneClientiPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#22C55E' }}>
              Gestione Clienti
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Costruisci uno storico clienti{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #22C55E, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              che vale davvero qualcosa
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Locario non gestisce solo orari e prenotazioni. Ogni cliente diventa un profilo: con le
            sue preferenze, le sue abitudini, le sue richieste speciali e la sua storia con la tua
            attività.
          </p>

          <Link
            href={LINKS.trial}
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #22C55E, #00D4FF)',
              boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3)',
            }}
          >
            Prova gratis 14 giorni <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FEATURES GESTIONE CLIENTI */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl p-6"
                style={{
                  background: `${feature.color}06`,
                  border: `1px solid ${feature.color}20`,
                }}
              >
                <div
                  className="w-3 h-12 rounded-full mb-4"
                  style={{ background: feature.color }}
                />
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERCHE' IMPORTA */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Un cliente che si sente riconosciuto{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #22C55E, #00D4FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  torna sempre
                </span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#A1A1AA' }}>
                Ricordare le preferenze di un cliente abituale, evitare di chiedergli ogni volta le
                stesse cose, anticipare le sue necessità: è questo che fa la differenza tra
                un&apos;attività e un&apos;esperienza.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Fidelizzazione: i clienti tornano da chi li conosce',
                  'Servizio personalizzato: meno domande, più attenzione',
                  'Marketing mirato: campagne basate su comportamenti reali',
                  'Riduzione churn: identifichi chi sta smettendo di tornare',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                    >
                      <Check size={10} style={{ color: '#22C55E' }} />
                    </div>
                    <span className="text-sm" style={{ color: '#A1A1AA' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card esempio profilo cliente */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Header */}
              <div
                className="px-6 py-5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                    style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' }}
                  >
                    M
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Marco Ferretti</p>
                    <p className="text-sm" style={{ color: '#A1A1AA' }}>
                      Cliente fedele · Dal 2 gennaio 2024
                    </p>
                  </div>
                  <div
                    className="ml-auto px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' }}
                  >
                    VIP
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                {[
                  { value: '28', label: 'Prenotazioni' },
                  { value: 'mar', label: 'Ultima visita' },
                  { value: 'Google', label: 'Canale arrivo' },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className="py-4 text-center"
                    style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
                  >
                    <p className="text-lg font-bold text-white">{s.value}</p>
                    <p className="text-xs" style={{ color: '#A1A1AA' }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Ultimi appuntamenti */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#A1A1AA' }}>
                  Ultimi appuntamenti
                </p>
                <div className="space-y-3">
                  {[
                    { service: 'Taglio Classico', date: '22 mar 2026', operator: 'Luca' },
                    { service: 'Barba + Taglio', date: '5 mar 2026', operator: 'Luca' },
                    { service: 'Taglio Classico', date: '20 feb 2026', operator: 'Luca' },
                  ].map((appt) => (
                    <div
                      key={appt.date}
                      className="flex items-center justify-between text-sm"
                    >
                      <span style={{ color: '#A1A1AA' }}>{appt.service}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs" style={{ color: '#A1A1AA' }}>{appt.date}</span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(108, 99, 255, 0.15)', color: '#6C63FF' }}
                        >
                          {appt.operator}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div
                  className="mt-5 rounded-lg p-3"
                  style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
                >
                  <p className="text-xs font-semibold mb-1" style={{ color: '#F59E0B' }}>Note</p>
                  <p className="text-xs" style={{ color: '#A1A1AA' }}>
                    Preferisce sempre Luca. Capelli fini. Viene ogni 3 settimane circa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrialCTA />
    </>
  )
}
