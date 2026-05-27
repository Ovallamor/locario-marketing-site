// app/funzionalita/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { FeatureCards } from '@/components/FeatureCards'
import { TrackingSources } from '@/components/TrackingSources'
import { FAQ } from '@/components/FAQ'
import { TrialCTA } from '@/components/TrialCTA'
import { FAQ_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight, Users, BarChart3, Bell } from 'lucide-react'
import { LINKS } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Funzionalità Locario | Gestionale Prenotazioni Completo',
  description:
    'Scopri tutte le funzionalità di Locario: agenda online, tracking canali, gestione clienti, promemoria automatici e dashboard statistiche per attività locali.',
  path: '/funzionalita',
  keywords: [
    'funzionalità gestionale prenotazioni',
    'agenda online attività',
    'tracking canali prenotazioni',
    'software prenotazioni completo',
  ],
})

const faqFunzionalita = FAQ_ITEMS.filter((_, i) => [2, 6, 7, 4, 1].includes(i))

export default function FunzionalitaPage() {
  return (
    <>
      {/* HERO SEZIONE */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(108, 99, 255, 0.12)',
              border: '1px solid rgba(108, 99, 255, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6C63FF' }}>
              Funzionalità
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tutto quello che serve per gestire{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              prenotazioni, clienti e canali
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Locario non è un semplice calendario online. È un sistema che collega ogni prenotazione
            alla sua fonte, ti dà controllo sulla tua agenda e ti aiuta a capire dove investire il
            tuo tempo e il tuo budget.
          </p>

          <Link
            href={LINKS.trial}
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
              boxShadow: '0 8px 32px rgba(108, 99, 255, 0.4)',
            }}
          >
            Prova gratis 14 giorni
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FEATURE CARDS - tutte e 8 */}
      <FeatureCards showHeader={false} />

      {/* SEZIONE TRACKING CANALI */}
      <TrackingSources />

      {/* SEZIONE GESTIONE CLIENTI */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                }}
              >
                <Users size={14} style={{ color: '#22C55E' }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#22C55E' }}>
                  Gestione Clienti
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Ogni cliente diventa{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #22C55E, #00D4FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  un profilo completo
                </span>
              </h2>

              <p className="text-base leading-relaxed mb-8" style={{ color: '#A1A1AA' }}>
                Locario non gestisce solo orari e prenotazioni. Ogni cliente ha una scheda con la
                sua storia, le sue preferenze e il canale da cui è arrivato per la prima volta.
              </p>

              <ul className="space-y-4">
                {[
                  'Storico completo di tutte le prenotazioni',
                  'Note e preferenze personali del cliente',
                  'Canale di acquisizione registrato automaticamente',
                  'Frequenza delle visite e ultima presenza',
                  'Richieste speciali e allergie (utile per spa e ristorazione)',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: '#A1A1AA' }}>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/gestione-clienti"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#22C55E' }}
                >
                  Scopri la gestione clienti <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card simulazione scheda cliente */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ background: 'rgba(108, 99, 255, 0.2)', color: '#6C63FF' }}
                >
                  G
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Giulia Bianchi</p>
                  <p className="text-sm" style={{ color: '#A1A1AA' }}>Cliente dal 12 Marzo 2024</p>
                </div>
                <div
                  className="ml-auto px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' }}
                >
                  Fedele
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Prenotazioni totali', value: '18' },
                  { label: 'Ultimo appuntamento', value: '20 Mag' },
                  { label: 'Canale acquisizione', value: 'Instagram' },
                  { label: 'Frequenza media', value: '2x/mese' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-3"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <p className="text-xs mb-1" style={{ color: '#A1A1AA' }}>{stat.label}</p>
                    <p className="text-sm font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(108, 99, 255, 0.08)', border: '1px solid rgba(108, 99, 255, 0.2)' }}
              >
                <p className="text-xs font-semibold mb-2" style={{ color: '#6C63FF' }}>Note</p>
                <p className="text-xs" style={{ color: '#A1A1AA' }}>
                  Preferisce orari pomeridiani. Allergia al lattice. Usa sempre il coupon compleanno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE STATISTICHE */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
              }}
            >
              <BarChart3 size={14} style={{ color: '#00D4FF' }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#00D4FF' }}>
                Dashboard Statistiche
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Dati che ti aiutano a{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00D4FF, #6C63FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                decidere meglio
              </span>
            </h2>

            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
              Non numeri per i numeri. Dashboard pensata per rispondere alle domande che ti fai ogni
              lunedì mattina quando guardi la settimana che arriva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Canali che funzionano',
                desc: 'Quali canali portano più prenotazioni questo mese rispetto al precedente.',
                color: '#6C63FF',
              },
              {
                title: 'Giorni e fasce orarie',
                desc: 'Quando sei più pieno, quando hai più spazio. Utile per offerte e campagne.',
                color: '#00D4FF',
              },
              {
                title: 'Tasso di conferma',
                desc: 'Quante prenotazioni diventano effettive presenze. Dove si perdono i clienti.',
                color: '#22C55E',
              },
              {
                title: 'Clienti nuovi vs abituali',
                desc: 'Quanto stai acquisendo e quanto stai fidelizzando. Due metriche diverse.',
                color: '#F59E0B',
              },
              {
                title: 'Performance operatori',
                desc: 'Se hai un team, vedi chi ha più prenotazioni e chi ha più slot liberi.',
                color: '#E1306C',
              },
              {
                title: 'Andamento nel tempo',
                desc: 'Trend settimanale e mensile per capire se stai crescendo o calando.',
                color: '#14B8A6',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-2 h-8 rounded-full mb-4"
                  style={{ background: item.color }}
                />
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMEMORIA */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            }}
          >
            <Bell size={14} style={{ color: '#F59E0B' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F59E0B' }}>
              Promemoria Automatici
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Il cliente dimentica.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #22C55E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Locario ricorda per te.
            </span>
          </h2>

          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
            Ogni cliente riceve un promemoria automatico prima dell&apos;appuntamento. Scegli quando
            mandarlo: 24 ore prima, 2 ore prima, o entrambi. Il tasso di no-show si abbassa
            drasticamente, senza che tu faccia niente.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[
              { value: '-70%', label: 'No-show mediamente ridotti con i promemoria' },
              { value: 'Automatici', label: 'Nessuna azione manuale richiesta da te' },
              { value: '24h / 2h', label: 'Anticipo personalizzabile per ogni attività' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                }}
              >
                <p
                  className="text-3xl font-black mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #F59E0B, #22C55E)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: '#A1A1AA' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SETTORI */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Funzionalità per la tua categoria
          </h2>
          <p className="text-base mb-8" style={{ color: '#A1A1AA' }}>
            Ogni settore ha le sue esigenze. Scopri come Locario risponde alle tue.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/gestionale-prenotazioni-ristorante', label: 'Ristoranti' },
              { href: '/gestionale-prenotazioni-pizzeria', label: 'Pizzerie' },
              { href: '/gestionale-prenotazioni-parrucchieri', label: 'Parrucchieri' },
              { href: '/gestionale-prenotazioni-centro-estetico', label: 'Centri Estetici' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
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

      {/* FAQ */}
      <FAQ items={faqFunzionalita} title="Domande sulle funzionalità" />

      {/* TRIAL CTA */}
      <TrialCTA />
    </>
  )
}
