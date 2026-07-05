import Link from 'next/link'
import { ArrowRight, BarChart3, Check, Network, Search, X } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'
import { TrialCTA } from '@/components/TrialCTA'
import { FAQ } from '@/components/FAQ'
import { LINKS } from '@/lib/constants'
import { buildFAQSchema, buildWebPageSchema } from '@/lib/seo'
import type { SiloPageData } from '@/lib/silo-pages'

function buildBreadcrumbSchema(page: SiloPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: LINKS.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.kicker,
        item: `${LINKS.siteUrl}${page.path}`,
      },
    ],
  }
}

export function SeoSiloPage({ page }: { page: SiloPageData }) {
  return (
    <>
      <JsonLd
        schema={buildWebPageSchema({
          name: page.metadata.title,
          description: page.metadata.description,
          url: `${LINKS.siteUrl}${page.path}`,
        })}
      />
      <JsonLd schema={buildFAQSchema(page.faq)} />
      <JsonLd schema={buildBreadcrumbSchema(page)} />

      <section className="section-padding pt-36 lg:pt-44" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: `${page.accent}15`,
              border: `1px solid ${page.accent}45`,
            }}
          >
            <Search size={14} style={{ color: page.accent }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: page.accent }}>
              {page.kicker}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {page.title}{' '}
            <span
              style={{
                background: page.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {page.highlight}
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            {page.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={LINKS.trial}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
              style={{
                background: page.gradient,
                boxShadow: `0 8px 32px ${page.shadow}`,
              }}
            >
              Prova gratis 14 giorni <ArrowRight size={18} />
            </Link>
            <Link
              href="/tracciamento-prenotazioni"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              Vedi il tracking <BarChart3 size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">{page.painTitle}</h2>
              <ul className="space-y-4">
                {page.painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={14} className="flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">{page.solutionTitle}</h2>
              <ul className="space-y-4">
                {page.solutionPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={14} className="flex-shrink-0 mt-1" style={{ color: '#22C55E' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(108, 99, 255, 0.1)', border: '1px solid rgba(108, 99, 255, 0.25)' }}
            >
              <Network size={14} style={{ color: '#6C63FF' }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6C63FF' }}>
                Dati e decisioni
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">{page.proofTitle}</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
              {page.intent}. Pensato per: {page.audience}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.proofItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${page.accent}22` }}
                >
                  <Check size={12} style={{ color: page.accent }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pagine collegate</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
              Approfondisci le pagine piu vicine a questo tema e collega funzioni, settori e problemi reali.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl p-5 transition-all hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-white">{link.label}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>{link.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: page.accent }}>
                  Apri pagina <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={page.faq} title="Domande frequenti" />
      <TrialCTA />
    </>
  )
}