// app/privacy/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { LINKS } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy',
  description:
    'Informativa sulla privacy di Locario. Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali in conformità al GDPR.',
  path: '/privacy',
})

const lastUpdated = '28 maggio 2025'

export default function PrivacyPage() {
  return (
    <div style={{ background: '#050816', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">

        {/* Intestazione */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C63FF' }}>
            Documenti legali
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Ultimo aggiornamento: {lastUpdated}
          </p>
        </div>

        {/* Contenuto */}
        <div className="space-y-10" style={{ color: '#A1A1AA' }}>

          <Section title="1. Titolare del trattamento">
            <p>
              Il titolare del trattamento dei dati personali è <strong className="text-white">Locario</strong>,
              raggiungibile all&apos;indirizzo email{' '}
              <a href={`mailto:${LINKS.email}`} className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                {LINKS.email}
              </a>
              .
            </p>
          </Section>

          <Section title="2. Dati raccolti">
            <p className="mb-4">Raccogliamo le seguenti categorie di dati:</p>
            <ul className="space-y-2 list-none">
              {[
                'Dati di registrazione: nome, indirizzo email, nome dell\'attività.',
                'Dati di utilizzo: interazioni con la piattaforma, log di accesso, preferenze dell\'account.',
                'Dati delle prenotazioni: informazioni sui clienti finali inserite dagli utenti del servizio.',
                'Dati di pagamento: gestiti da processori terzi certificati PCI-DSS (Stripe). Non conserviamo i dati della carta.',
                'Dati tecnici: indirizzo IP, tipo di browser, sistema operativo, pagine visitate.',
                'Cookie e tecnologie simili: descritti nella sezione dedicata.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6C63FF' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="3. Finalità e base giuridica del trattamento">
            <div className="space-y-4">
              {[
                {
                  title: 'Erogazione del servizio',
                  desc: 'Per creare e gestire il tuo account, fornire le funzionalità della piattaforma e rispondere alle richieste di supporto. Base giuridica: esecuzione del contratto (art. 6 par. 1 lett. b GDPR).',
                },
                {
                  title: 'Obblighi legali e contabili',
                  desc: 'Per adempiere agli obblighi fiscali e normativi. Base giuridica: obbligo legale (art. 6 par. 1 lett. c GDPR).',
                },
                {
                  title: 'Comunicazioni di servizio',
                  desc: 'Per inviarti aggiornamenti importanti sull\'account, notifiche di sistema e comunicazioni relative al contratto. Base giuridica: esecuzione del contratto.',
                },
                {
                  title: 'Marketing (opzionale)',
                  desc: 'Previo consenso esplicito, per inviarti newsletter, offerte e aggiornamenti sul prodotto. Puoi revocare il consenso in qualsiasi momento. Base giuridica: consenso (art. 6 par. 1 lett. a GDPR).',
                },
                {
                  title: 'Miglioramento del servizio',
                  desc: 'Per analizzare l\'utilizzo della piattaforma e migliorare le funzionalità. Base giuridica: legittimo interesse (art. 6 par. 1 lett. f GDPR).',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="4. Conservazione dei dati">
            <p>
              Conserviamo i tuoi dati per il tempo strettamente necessario alle finalità indicate:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                'Dati dell\'account: per tutta la durata del contratto e fino a 12 mesi dalla cancellazione.',
                'Dati di fatturazione: 10 anni in conformità alla normativa fiscale italiana.',
                'Log tecnici: massimo 12 mesi.',
                'Dati di marketing: fino alla revoca del consenso.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6C63FF' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="5. Condivisione con terze parti">
            <p className="mb-4">
              Non vendiamo i tuoi dati personali. Possiamo condividerli con fornitori di servizi che agiscono come responsabili del trattamento per nostro conto:
            </p>
            <ul className="space-y-2 list-none">
              {[
                'Processori di pagamento (Stripe) per gestire le transazioni.',
                'Provider di infrastruttura cloud per l\'hosting della piattaforma.',
                'Strumenti di analisi (dati aggregati e anonimizzati).',
                'Provider di email transazionali per notifiche di sistema.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6C63FF' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Tutti i fornitori sono selezionati per garantire livelli di protezione adeguati e sono vincolati da accordi di trattamento dei dati conformi al GDPR.
            </p>
          </Section>

          <Section title="6. Trasferimenti internazionali">
            <p>
              Alcuni fornitori di servizi terzi possono trattare dati al di fuori dello Spazio Economico Europeo (SEE). In questi casi, ci assicuriamo che il trasferimento avvenga nel rispetto delle garanzie previste dal GDPR, incluse le Clausole Contrattuali Standard approvate dalla Commissione Europea.
            </p>
          </Section>

          <Section title="7. I tuoi diritti">
            <p className="mb-4">
              In qualità di interessato, hai i seguenti diritti ai sensi del GDPR:
            </p>
            <ul className="space-y-2 list-none">
              {[
                'Accesso: ottenere conferma dell\'esistenza dei tuoi dati e una copia degli stessi.',
                'Rettifica: correggere dati inesatti o incompleti.',
                'Cancellazione ("diritto all\'oblio"): richiedere la cancellazione dei tuoi dati, salvo obblighi legali.',
                'Limitazione: limitare il trattamento dei tuoi dati in determinate circostanze.',
                'Portabilità: ricevere i tuoi dati in formato strutturato e leggibile da macchina.',
                'Opposizione: opporti al trattamento basato su legittimo interesse o per finalità di marketing diretto.',
                'Revoca del consenso: revocare in qualsiasi momento il consenso precedentemente prestato.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6C63FF' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Per esercitare i tuoi diritti, scrivi a{' '}
              <a href={`mailto:${LINKS.email}`} className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                {LINKS.email}
              </a>
              . Risponderemo entro 30 giorni dalla ricezione della richiesta. Hai inoltre il diritto di presentare reclamo al{' '}
              <strong className="text-white">Garante per la protezione dei dati personali</strong> (
              <span style={{ color: '#6C63FF' }}>www.garanteprivacy.it</span>).
            </p>
          </Section>

          <Section title="8. Cookie e tecnologie di tracciamento">
            <p className="mb-4">Il sito utilizza le seguenti categorie di cookie:</p>
            <div className="space-y-4">
              {[
                {
                  title: 'Cookie tecnici (necessari)',
                  desc: 'Essenziali per il funzionamento del sito e della piattaforma. Non richiedono consenso.',
                },
                {
                  title: 'Cookie analitici',
                  desc: 'Utilizzati per raccogliere dati statistici anonimi sull\'utilizzo del sito, previo consenso.',
                },
                {
                  title: 'Cookie di preferenza',
                  desc: 'Memorizzano le tue preferenze (es. lingua) per migliorare l\'esperienza, previo consenso.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Puoi gestire le preferenze cookie tramite il banner al primo accesso o dalle impostazioni del browser.
            </p>
          </Section>

          <Section title="9. Sicurezza dei dati">
            <p>
              Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati da accessi non autorizzati, perdita, divulgazione o alterazione. Tra queste: trasmissione HTTPS, cifratura dei dati sensibili a riposo, accessi limitati al personale autorizzato e backup automatici regolari.
            </p>
          </Section>

          <Section title="10. Modifiche alla presente informativa">
            <p>
              Possiamo aggiornare questa informativa in qualsiasi momento. In caso di modifiche sostanziali, ti informeremo tramite email o tramite un avviso visibile sulla piattaforma prima che le modifiche entrino in vigore. La data dell&apos;ultima revisione è sempre indicata in cima a questa pagina.
            </p>
          </Section>

          <Section title="11. Contatti">
            <p>
              Per qualsiasi domanda relativa a questa informativa o al trattamento dei tuoi dati, contattaci a:{' '}
              <a href={`mailto:${LINKS.email}`} className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                {LINKS.email}
              </a>
              .
            </p>
          </Section>

        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {title}
      </h2>
      <div className="leading-relaxed space-y-3">{children}</div>
    </section>
  )
}
