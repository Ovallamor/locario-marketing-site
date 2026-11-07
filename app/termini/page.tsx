// app/termini/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { LINKS } from '@/lib/constants'
import { LAST_LEGAL_UPDATE, LEGAL } from '@/lib/legal'

export const metadata: Metadata = genMeta({
  title: 'Termini di Servizio',
  description:
    'Termini e condizioni di utilizzo di Locario. Leggi i diritti e gli obblighi degli utenti della piattaforma di gestione prenotazioni.',
  path: '/termini',
})

const lastUpdated = LAST_LEGAL_UPDATE

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
              Il Servizio è fornito da <strong className="text-white">{LEGAL.name}</strong> (di seguito &quot;Locario&quot;). Per qualsiasi
              comunicazione scrivi a{' '}
              <a href={`mailto:${LINKS.email}`} className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                {LINKS.email}
              </a>
              .
              {(LEGAL.address || LEGAL.vatId) && (
                <>
                  {' '}
                  {LEGAL.address && <>Sede: {LEGAL.address}. </>}
                  {LEGAL.vatId && <>P. IVA {LEGAL.vatId}.</>}
                </>
              )}
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
              Locario offre un periodo di prova gratuita di <strong className="text-white">30 giorni</strong> su tutti i piani,
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
                  I prezzi degli abbonamenti al gestionale sono indicati al netto di IVA, che viene applicata secondo la normativa fiscale italiana vigente. Per il servizio di creazione siti web valgono le condizioni della sezione 7.
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
            <p className="mb-4">
              Le regole di questa sezione riguardano gli abbonamenti al gestionale. Per il servizio di creazione siti web valgono le condizioni della sezione 7.
            </p>
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

          <Section title="7. Servizio di creazione siti web">
            <p>
              Oltre al gestionale, Locario realizza siti web per attività locali nei pacchetti descritti nella pagina{' '}
              <a href="/sito-web-attivita-locali" className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                Creazione sito web
              </a>
              . Questa sezione si applica agli ordini di quel servizio e prevale, per quel servizio, sulle regole degli altri articoli. L&apos;offerta è riservata a imprese e professionisti, che acquistano per scopi legati alla propria attività, e non è destinata ai consumatori. Il &quot;Cliente&quot; è chi effettua l&apos;ordine; il &quot;Sito&quot; è il sito web realizzato da Locario per il Cliente.
            </p>
            <div className="mt-4 space-y-4">
              {[
                {
                  title: '7.1 Oggetto',
                  text: 'Locario realizza, pubblica e mantiene online per 12 mesi un Sito per l’attività del Cliente, nel pacchetto scelto (Sito Web, Sito + Prenotazioni, Sito + Professional) come descritto nella pagina dedicata al momento dell’ordine. Il servizio comprende le pagine Home, Menu o Servizi e Contatti, l’adattamento per smartphone e computer, il caricamento iniziale dei contenuti forniti dal Cliente, una revisione prima della pubblicazione, la pubblicazione e 12 mesi di assistenza tecnica. I pacchetti con Locario includono anche la pagina di prenotazione e l’uso del gestionale, nei limiti del pacchetto scelto. Si tratta di una prestazione di servizi: non comporta la vendita o la cessione del Sito.',
                },
                {
                  title: '7.2 Proprietà del Sito e licenza d’uso',
                  text: 'Il Sito, compresi progetto grafico, struttura, codice, configurazioni e testi redatti da Locario, è e resta di proprietà esclusiva di Locario. Per tutta la durata del servizio il Cliente ha una licenza d’uso non esclusiva e non trasferibile, limitata allo svolgimento della propria attività. Alla scadenza senza rinnovo, o in caso di risoluzione, il Sito viene disattivato e non può essere copiato, trasferito o riutilizzato dal Cliente o da terzi.',
                },
                {
                  title: '7.3 Contenuti del Cliente',
                  text: 'Loghi, marchi, testi, fotografie, menu e ogni altro materiale forniti dal Cliente restano di sua proprietà. Il Cliente concede a Locario il diritto di utilizzarli per realizzare, pubblicare e mantenere il Sito per la durata del servizio, garantisce di averne la piena disponibilità e di non violare diritti di terzi, e tiene Locario indenne da pretese di terzi al riguardo. Alla fine del servizio Locario rimuove i contenuti dal Sito e, su richiesta scritta del Cliente entro 30 giorni dalla scadenza, ne restituisce una copia.',
                },
                {
                  title: '7.4 Dominio',
                  text: 'Il dominio già posseduto dal Cliente resta di sua proprietà: viene collegato al Sito e scollegato alla fine del servizio. Per i domini nuovi, titolarità e costi sono indicati nel preventivo prima della conferma.',
                },
                {
                  title: '7.5 Prezzi, pagamento e fattura',
                  text: 'I prezzi sono quelli indicati nel pacchetto scelto al momento dell’ordine e, per questo servizio, non è applicata l’IVA. Il pagamento avviene tramite Stripe, in un’unica soluzione con lo sconto indicato oppure in 12 rate mensili con impegno di 12 mesi: le rate sono dovute per l’intero periodo e l’abbonamento termina da solo dopo la dodicesima. In caso di mancato pagamento di una rata, dopo un sollecito Locario può sospendere il Sito fino alla regolarizzazione, restando dovute le rate. Per emettere la fattura serve la Partita IVA, richiesta durante l’ordine.',
                },
                {
                  title: '7.6 Durata, scadenza e rinnovo',
                  text: 'Il servizio dura 12 mesi dal pagamento e non si rinnova automaticamente. Locario ricorda la scadenza 20, 7, 3 e 1 giorno prima, con le condizioni per proseguire; il servizio continua solo con la conferma del Cliente. Senza conferma, alla scadenza il Sito viene disattivato secondo l’articolo 7.2.',
                },
                {
                  title: '7.7 Avvio, realizzazione e revisione',
                  text: 'Dopo il pagamento, entro 48 ore lavorative Locario avvia la lavorazione. Il Cliente collabora fornendo i materiali necessari: i ritardi nella consegna sospendono i tempi di realizzazione. Il Sito viene presentato al Cliente in una call prima della pubblicazione ed è inclusa una revisione. Modifiche ulteriori, pagine aggiuntive, produzioni fotografiche e testi estesi sono preventivati a parte.',
                },
                {
                  title: '7.8 Nessuna garanzia di risultato',
                  text: 'Locario si impegna a realizzare e mantenere il Sito con la diligenza richiesta, ma non garantisce un numero di visite, il posizionamento sui motori di ricerca, né un numero di prenotazioni, clienti o un incremento di fatturato, che dipendono anche da fattori esterni al servizio.',
                },
                {
                  title: '7.9 Sospensione e risoluzione',
                  text: 'Locario può sospendere o disattivare il Sito, con avviso quando possibile, in caso di contenuti illeciti o che violino diritti di terzi, di uso contrario ai presenti Termini o di mancato pagamento.',
                },
                {
                  title: '7.10 Pacchetti con gestionale',
                  text: 'Durante i 12 mesi l’uso di Locario nei pacchetti con gestionale è regolato anche dagli articoli dei presenti Termini su account, uso accettabile, disponibilità e responsabilità.',
                },
                {
                  title: '7.11 Approvazione specifica delle clausole',
                  text: 'Il Cliente dichiara di acquistare per scopi professionali e, ai sensi degli artt. 1341 e 1342 del Codice civile, di aver letto e di approvare specificamente le clausole: 7.2 (proprietà del Sito e licenza d’uso), 7.5 (impegno di 12 mesi e sospensione per mancato pagamento), 7.8 (nessuna garanzia di risultato), 7.9 (sospensione e risoluzione), articolo 12 (limitazione di responsabilità) e articolo 14 (legge applicabile e foro competente).',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="8. Uso accettabile">
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

          <Section title="9. Proprietà intellettuale">
            <p>
              Locario e tutti i suoi contenuti, design, logo, testi e software sono di proprietà esclusiva di Locario o dei
              suoi licenziatari e sono protetti da leggi sul diritto d&apos;autore e sulla proprietà intellettuale.
            </p>
            <p className="mt-3">
              L&apos;utente conserva la piena proprietà dei dati inseriti nella piattaforma (dati dell&apos;attività, prenotazioni, clienti).
              Concede a Locario una licenza limitata per trattare tali dati ai soli fini dell&apos;erogazione del Servizio.
            </p>
          </Section>

          <Section title="10. Dati e privacy">
            <p>
              Il trattamento dei dati personali è disciplinato dalla nostra{' '}
              <a href="/privacy" className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
                Privacy Policy
              </a>
              , che costituisce parte integrante dei presenti Termini. Trattando dati di clienti finali tramite la piattaforma,
              l&apos;utente agisce come titolare autonomo del trattamento ed è responsabile della conformità al GDPR nei confronti dei propri clienti.
            </p>
          </Section>

          <Section title="11. Disponibilità del servizio">
            <p>
              Ci impegniamo a garantire la massima disponibilità della piattaforma. Tuttavia, non possiamo garantire un servizio ininterrotto al 100%. Possono verificarsi brevi interruzioni per manutenzione programmata (comunicata in anticipo) o eventi straordinari al di fuori del nostro controllo.
            </p>
            <p className="mt-3">
              Non siamo responsabili per perdite derivanti da interruzioni temporanee del servizio, fatta eccezione per i casi di dolo o colpa grave da parte di Locario.
            </p>
          </Section>

          <Section title="12. Limitazione di responsabilità">
            <p>
              Nei limiti consentiti dalla legge applicabile, Locario non è responsabile per danni indiretti, incidentali, speciali o consequenziali derivanti dall&apos;utilizzo o dall&apos;impossibilità di utilizzo del Servizio, inclusi ma non limitati a: perdita di fatturato, perdita di dati, costi di sostituzione del servizio.
            </p>
            <p className="mt-3">
              La responsabilità complessiva di Locario nei confronti dell&apos;utente, per qualsiasi motivo, non supera l&apos;importo pagato per il Servizio nei 3 mesi precedenti all&apos;evento che ha causato il danno.
            </p>
          </Section>

          <Section title="13. Modifiche ai termini">
            <p>
              Ci riserviamo il diritto di modificare i presenti Termini in qualsiasi momento. In caso di modifiche sostanziali,
              ti avviseremo via email o tramite un avviso nella piattaforma con almeno <strong className="text-white">30 giorni</strong> di preavviso.
              L&apos;utilizzo continuato del Servizio dopo tale periodo costituisce accettazione delle nuove condizioni.
            </p>
          </Section>

          <Section title="14. Legge applicabile e foro competente">
            <p>
              I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia derivante dall&apos;interpretazione o dall&apos;esecuzione dei presenti Termini, le parti concordano di tentare una risoluzione amichevole. In caso contrario, il foro competente esclusivo è quello del luogo di sede di Locario, salvo diversa disposizione di legge inderogabile.
            </p>
          </Section>

          <Section title="15. Contatti">
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
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-semibold text-white mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {title}
      </h2>
      <div className="leading-relaxed space-y-3">{children}</div>
    </section>
  )
}
