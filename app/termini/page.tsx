// app/termini/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { LINKS } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Termini di Servizio | Locario',
  description:
    'Termini e condizioni di utilizzo di Locario. Leggi i diritti e gli obblighi degli utenti della piattaforma di gestione prenotazioni.',
  path: '/termini',
})

const lastUpdated = '28 maggio 2025'

export default function TerminiPage() {
  return (
    <div style={{ background: '#050816', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">

        {/* Intestazione */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C63FF' }}>
            Documenti legali
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-white">
            Termini di Servizio
          </h1>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Ultimo aggiornamento: {lastUpdated}
          </p>
        </div>

        {/* Contenuto */}
        <div className="space-y-10" style={{ color: '#A1A1AA' }}>

          <Section title="1. Accettazione dei termini">
            <p>
              Utilizzando la piattaforma Locario (&quot;Servizio&quot;), dichiari di aver letto, compreso e accettato
              integralmente i presenti Termini di Servizio. Se non accetti questi termini, non puoi utilizzare il Servizio.
            </p>
            <p>
              Il Servizio è fornito da <strong className="text-white">Locario</strong>. Per qualsiasi
              comunicazione scrivi a{' '}
              <a href={`mailto:${LINKS.email}`} className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                {LINKS.email}
              </a>
              .
            </p>
          </Section>

          <Section title="2. Descrizione del servizio">
            <p>
              Locario è una piattaforma SaaS (Software as a Service) per la gestione delle prenotazioni rivolta ad attività locali — ristoranti, parrucchieri, centri estetici, studi professionali e simili. Il Servizio include:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                'Agenda digitale per la gestione di appuntamenti e prenotazioni.',
                'Link di prenotazione personalizzati con tracciamento del canale di acquisizione.',
                'Dashboard con statistiche su prenotazioni e canali.',
                'Promemoria automatici ai clienti finali.',
                'Gestione di operatori, servizi, tavoli e orari.',
                'Accesso via web da qualsiasi dispositivo.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6C63FF' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="3. Account e registrazione">
            <p className="mb-4">Per utilizzare il Servizio è necessario creare un account. L&apos;utente è responsabile di:</p>
            <ul className="space-y-2 list-none">
              {[
                'Fornire informazioni accurate e aggiornate durante la registrazione.',
                'Mantenere riservate le credenziali di accesso (email e password).',
                'Notificare immediatamente Locario in caso di accesso non autorizzato al proprio account.',
                'Qualsiasi attività effettuata tramite il proprio account.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6C63FF' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              È consentito un solo account per attività. Locario si riserva il diritto di sospendere account duplicati o creati con informazioni false.
            </p>
          </Section>

          <Section title="4. Prova gratuita">
            <p>
              Locario offre un periodo di prova gratuita di <strong className="text-white">14 giorni</strong> su tutti i piani,
              senza obbligo di inserire una carta di credito. Al termine del periodo di prova:
            </p>
            <ul className="mt-4 space-y-2 list-none">
              {[
                'Se scegli un piano a pagamento, l\'abbonamento parte dalla data di attivazione.',
                'Se non scegli nessun piano, l\'account viene sospeso automaticamente.',
                'Nessun addebito viene effettuato senza un\'azione esplicita dell\'utente.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6C63FF' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="5. Piani e pagamenti">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-1">Abbonamento</h3>
                <p>
                  Il Servizio è disponibile su base di abbonamento mensile o annuale. I prezzi sono indicati nella pagina{' '}
                  <a href="/prezzi" className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                    Prezzi
                  </a>{' '}
                  e possono variare. Gli utenti esistenti mantengono le condizioni in vigore al momento della sottoscrizione.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Fatturazione</h3>
                <p>
                  Gli addebiti avvengono in anticipo per il periodo selezionato (mensile o annuale). I pagamenti sono gestiti tramite Stripe, un processore di pagamenti sicuro e certificato PCI-DSS.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">IVA</h3>
                <p>
                  I prezzi indicati sono al netto di IVA. L&apos;IVA viene applicata secondo la normativa fiscale italiana vigente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Mancato pagamento</h3>
                <p>
                  In caso di mancato pagamento, il Servizio può essere sospeso previa notifica. L&apos;accesso viene ripristinato non appena il pagamento viene regolarizzato.
                </p>
              </div>
            </div>
          </Section>

          <Section title="6. Cancellazione e rimborsi">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-1">Cancellazione da parte dell&apos;utente</h3>
                <p>
                  Puoi cancellare il tuo abbonamento in qualsiasi momento dal pannello del tuo account, senza penali e senza dover contattare l&apos;assistenza. Il Servizio rimane attivo fino alla fine del periodo già pagato.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Rimborsi</h3>
                <p>
                  In generale non sono previsti rimborsi per i periodi già pagati, salvo diverso accordo scritto o obblighi di legge. In caso di problemi tecnici significativi imputabili a Locario, valutiamo ogni caso individualmente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Cancellazione da parte di Locario</h3>
                <p>
                  Locario può terminare il contratto con preavviso di 30 giorni per qualsiasi motivo. In caso di violazione dei presenti Termini, la cancellazione può avvenire immediatamente.
                </p>
              </div>
            </div>
          </Section>

          <Section title="7. Uso accettabile">
            <p className="mb-4">L&apos;utente si impegna a non utilizzare il Servizio per:</p>
            <ul className="space-y-2 list-none">
              {[
                'Attività illegali o fraudolente.',
                'Trasmettere contenuti offensivi, diffamatori o che violino diritti di terzi.',
                'Tentare di accedere ai dati di altri utenti o compromettere la sicurezza della piattaforma.',
                'Effettuare reverse engineering o copiare il software sottostante.',
                'Utilizzare il Servizio per raccogliere dati di concorrenti o per finalità non consentite.',
                'Sovraccaricare intenzionalmente l\'infrastruttura con richieste automatizzate (scraping, bot).',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#F59E0B' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="8. Proprietà intellettuale">
            <p>
              Locario e tutti i suoi contenuti, design, logo, testi e software sono di proprietà esclusiva di Locario o dei
              suoi licenziatari e sono protetti da leggi sul diritto d&apos;autore e sulla proprietà intellettuale.
            </p>
            <p className="mt-3">
              L&apos;utente conserva la piena proprietà dei dati inseriti nella piattaforma (dati dell&apos;attività, prenotazioni, clienti).
              Concede a Locario una licenza limitata per trattare tali dati ai soli fini dell&apos;erogazione del Servizio.
            </p>
          </Section>

          <Section title="9. Dati e privacy">
            <p>
              Il trattamento dei dati personali è disciplinato dalla nostra{' '}
              <a href="/privacy" className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                Privacy Policy
              </a>
              , che costituisce parte integrante dei presenti Termini. Trattando dati di clienti finali tramite la piattaforma,
              l&apos;utente agisce come titolare autonomo del trattamento ed è responsabile della conformità al GDPR nei confronti dei propri clienti.
            </p>
          </Section>

          <Section title="10. Disponibilità del servizio">
            <p>
              Ci impegniamo a garantire la massima disponibilità della piattaforma. Tuttavia, non possiamo garantire un servizio ininterrotto al 100%. Possono verificarsi brevi interruzioni per manutenzione programmata (comunicata in anticipo) o eventi straordinari al di fuori del nostro controllo.
            </p>
            <p className="mt-3">
              Non siamo responsabili per perdite derivanti da interruzioni temporanee del servizio, fatta eccezione per i casi di dolo o colpa grave da parte di Locario.
            </p>
          </Section>

          <Section title="11. Limitazione di responsabilità">
            <p>
              Nei limiti consentiti dalla legge applicabile, Locario non è responsabile per danni indiretti, incidentali, speciali o consequenziali derivanti dall&apos;utilizzo o dall&apos;impossibilità di utilizzo del Servizio, inclusi ma non limitati a: perdita di fatturato, perdita di dati, costi di sostituzione del servizio.
            </p>
            <p className="mt-3">
              La responsabilità complessiva di Locario nei confronti dell&apos;utente, per qualsiasi motivo, non supera l&apos;importo pagato per il Servizio nei 3 mesi precedenti all&apos;evento che ha causato il danno.
            </p>
          </Section>

          <Section title="12. Modifiche ai termini">
            <p>
              Ci riserviamo il diritto di modificare i presenti Termini in qualsiasi momento. In caso di modifiche sostanziali,
              ti avviseremo via email o tramite un avviso nella piattaforma con almeno <strong className="text-white">30 giorni</strong> di preavviso.
              L&apos;utilizzo continuato del Servizio dopo tale periodo costituisce accettazione delle nuove condizioni.
            </p>
          </Section>

          <Section title="13. Legge applicabile e foro competente">
            <p>
              I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall&apos;interpretazione o dall&apos;esecuzione dei presenti Termini, le parti concordano di tentare una risoluzione amichevole. In caso contrario, il foro competente esclusivo è quello del luogo di sede di Locario, salvo diversa disposizione di legge inderogabile.
            </p>
          </Section>

          <Section title="14. Contatti">
            <p>
              Per qualsiasi domanda relativa ai presenti Termini, contattaci a:{' '}
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
