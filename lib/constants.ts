// lib/constants.ts
// Costanti globali del sito Locario: link, navigazione, contenuti

// ===================================
// LINK UFFICIALI
// ===================================
export const LINKS = {
  login: 'https://app.locario.net/login',
  register: 'https://app.locario.net/register',
  trial: 'https://app.locario.net/register?trial=14',
  email: 'info@locario.net',
  siteUrl: 'https://locario.net',
} as const

// ===================================
// NAVIGAZIONE
// ===================================
export const NAV_ITEMS = [
  { href: '/funzionalita', label: 'Funzionalità' },
  { href: '/prezzi', label: 'Prezzi' },
  { href: '/come-funziona', label: 'Come Funziona' },
  { href: '/contatti', label: 'Contatti' },
] as const

export const INDUSTRY_NAV = [
  { href: '/gestionale-prenotazioni-ristorante', label: 'Ristoranti' },
  { href: '/gestionale-prenotazioni-pizzeria', label: 'Pizzerie' },
  { href: '/gestionale-prenotazioni-parrucchieri', label: 'Parrucchieri' },
  { href: '/gestionale-prenotazioni-centro-estetico', label: 'Centri Estetici' },
  { href: '/gestionale-prenotazioni-bar', label: 'Bar' },
  { href: '/gestionale-barber-shop', label: 'Barber Shop' },
  { href: '/gestionale-prenotazioni-studio-dentistico', label: 'Studi Dentistici' },
] as const

// ===================================
// FUNZIONALITA'
// ===================================
export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  highlighted?: boolean
}

export const FEATURES: Feature[] = [
  {
    id: 'prenotazioni-online',
    icon: 'Calendar',
    title: 'Prenotazioni Online',
    description: 'Un link unico da condividere su Google, Instagram, sito e WhatsApp. I clienti prenotano autonomamente, tu gestisci senza telefonate.',
  },
  {
    id: 'agenda-intelligente',
    icon: 'LayoutDashboard',
    title: 'Agenda Intelligente',
    description: 'Visualizza l\'agenda per giorno, settimana o operatore. Gestisci turni, durate diverse e disponibilità in tempo reale.',
  },
  {
    id: 'tracking-canali',
    icon: 'BarChart3',
    title: 'Tracking Canali',
    description: 'Ogni prenotazione è collegata alla sua fonte. Sai esattamente quante arrivano da Google, Instagram, campagne Ads o QR code.',
    highlighted: true,
  },
  {
    id: 'gestione-clienti',
    icon: 'Users',
    title: 'Gestione Clienti',
    description: 'Scheda cliente completa con storico prenotazioni, preferenze, note e canale di acquisizione. Conosci i tuoi clienti davvero.',
  },
  {
    id: 'promemoria-automatici',
    icon: 'Bell',
    title: 'Promemoria Automatici',
    description: 'Notifiche automatiche ai clienti prima dell\'appuntamento. Riduci i no-show e le cancellazioni dell\'ultimo minuto.',
  },
  {
    id: 'dashboard-statistiche',
    icon: 'TrendingUp',
    title: 'Dashboard Statistiche',
    description: 'Dati chiari su prenotazioni, canali, giorni di punta e andamento. Capisci cosa funziona e dove investire il tuo budget.',
  },
  {
    id: 'link-prenotazione',
    icon: 'Link',
    title: 'Link Prenotazione',
    description: 'Ogni canale ha il suo identificatore univoco. Il link per Instagram traccia Instagram, quello per Google traccia Google.',
  },
  {
    id: 'multi-settore',
    icon: 'Building2',
    title: 'Multi-Settore',
    description: 'Progettato per ristoranti, parrucchieri, centri estetici, studi professionali e qualsiasi attività con appuntamenti.',
  },
]

// ===================================
// SETTORI
// ===================================
export interface Industry {
  id: string
  icon: string
  title: string
  subtitle: string
  painPoints: string[]
  solution: string
  href: string
  color: string
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'bar',
    icon: 'Coffee',
    title: 'Bar e Locali',
    subtitle: 'Aperitivi, tavoli ed eventi con link tracciati',
    painPoints: [
      'Prenotazioni per tavoli e aperitivi sparse tra WhatsApp e Instagram',
      'Piccoli eventi difficili da organizzare nei momenti di punta',
      'Nessun dato su Google, social e passaparola digitale',
      'Richieste serali che si perdono tra messaggi e telefonate',
    ],
    solution: 'Link prenotazione, agenda leggera e tracking canali per capire quali fonti riempiono davvero il locale.',
    href: '/gestionale-prenotazioni-bar',
    color: '#F59E0B',
  },
  {
    id: 'ristorante',
    icon: 'UtensilsCrossed',
    title: 'Ristoranti e Pizzerie',
    subtitle: 'Gestisci tavoli, turni e canali in un flusso unico',
    painPoints: [
      'Prenotazioni da telefono, Google e WhatsApp tutte insieme',
      'Doppie prenotazioni nei weekend',
      'Giorni deboli difficili da riempire',
      'Nessuna idea di quale canale porta più tavoli',
    ],
    solution: 'Con Locario gestisci tavoli, turni e richieste speciali in un flusso unico. Sai da dove arriva ogni prenotazione e ottimizzi i canali che convertono di più.',
    href: '/gestionale-prenotazioni-ristorante',
    color: '#F59E0B',
  },
  {
    id: 'parrucchieri',
    icon: 'Scissors',
    title: 'Parrucchieri e Barber Shop',
    subtitle: 'Agenda online, operatori e zero telefonate inutili',
    painPoints: [
      'Clienti che scrivono su WhatsApp a qualsiasi ora',
      'Agenda segnata a mano con errori e sovrascritture',
      'Operatori con orari diversi difficili da coordinare',
      'Cancellazioni dell\'ultimo minuto senza preavviso',
    ],
    solution: 'Agenda online, gestione operatori, promemoria automatici. I clienti prenotano da soli e tu lavori senza interruzioni.',
    href: '/gestionale-prenotazioni-parrucchieri',
    color: '#6C63FF',
  },
  {
    id: 'centro-estetico',
    icon: 'Sparkles',
    title: 'Centri Estetici e Spa',
    subtitle: 'Trattamenti, cabine e clienti in un sistema ordinato',
    painPoints: [
      'Trattamenti con durate molto diverse da gestire',
      'Cabine e operatrici specializzate da coordinare',
      'Clienti abituali con preferenze e allergie da ricordare',
      'Promozioni stagionali impossibili da misurare',
    ],
    solution: 'Ogni servizio, ogni cabina, ogni cliente in un sistema ordinato. Le promozioni finalmente hanno un dato da cui partire.',
    href: '/gestionale-prenotazioni-centro-estetico',
    color: '#00D4FF',
  },
  {
    id: 'studi-professionali',
    icon: 'Briefcase',
    title: 'Studi Professionali',
    subtitle: 'Appuntamenti digitali, storico clienti e promemoria',
    painPoints: [
      'Appuntamenti gestiti via email o telefono',
      'Nessun storico consultazioni strutturato',
      'Difficoltà a ricordare le preferenze dei clienti',
      'Nessun dato su quali canali portano nuovi pazienti',
    ],
    solution: 'Agenda digitale, storico clienti e promemoria automatici per uno studio professionale più organizzato e misurabile.',
    href: '/prenotazioni-online',
    color: '#22C55E',
  },
  {
    id: 'studio-dentistico',
    icon: 'Stethoscope',
    title: 'Studi Dentistici',
    subtitle: 'Appuntamenti, reminder e nuovi pazienti tracciati',
    painPoints: [
      'Telefonate e WhatsApp durante le visite',
      'Spostamenti appuntamento gestiti a mano dalla segreteria',
      'Pazienti che dimenticano controlli o orari',
      'Difficile capire quanti nuovi pazienti arrivano da Google',
    ],
    solution: 'Agenda online, promemoria automatici e link tracciati per Google, sito e WhatsApp dello studio.',
    href: '/gestionale-prenotazioni-studio-dentistico',
    color: '#14B8A6',
  },
]

// ===================================
// TRACKING SOURCES - DIFFERENZIATORE CHIAVE
// ===================================
export interface TrackingSource {
  id: string
  name: string
  color: string
  bgColor: string
  description: string
}

export const TRACKING_SOURCES: TrackingSource[] = [
  {
    id: 'google-business',
    name: 'Google Business Profile',
    color: '#4285F4',
    bgColor: 'rgba(66, 133, 244, 0.15)',
    description: 'Prenotazioni dirette dalla scheda Google',
  },
  {
    id: 'google-maps',
    name: 'Google Maps',
    color: '#34A853',
    bgColor: 'rgba(52, 168, 83, 0.15)',
    description: 'Clienti che trovano la tua attività su Maps',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    color: '#E1306C',
    bgColor: 'rgba(225, 48, 108, 0.15)',
    description: 'Link in bio e post con link prenotazione',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    color: '#1877F2',
    bgColor: 'rgba(24, 119, 242, 0.15)',
    description: 'Pagina Facebook e gruppi locali',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    color: '#25D366',
    bgColor: 'rgba(37, 211, 102, 0.15)',
    description: 'Link prenotazione in status e chat',
  },
  {
    id: 'qr-code',
    name: 'QR Code',
    color: '#6C63FF',
    bgColor: 'rgba(108, 99, 255, 0.15)',
    description: 'QR fisici su volantini, tavoli, vetrina',
  },
  {
    id: 'sito-web',
    name: 'Sito Web',
    color: '#00D4FF',
    bgColor: 'rgba(0, 212, 255, 0.15)',
    description: 'Widget o link sul tuo sito ufficiale',
  },
  {
    id: 'telefono',
    name: 'Telefono',
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.15)',
    description: 'Prenotazioni inserite manualmente dallo staff',
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    color: '#FBBC04',
    bgColor: 'rgba(251, 188, 4, 0.15)',
    description: 'Campagne Google con link tracciato',
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    color: '#0668E1',
    bgColor: 'rgba(6, 104, 225, 0.15)',
    description: 'Inserzioni Facebook e Instagram',
  },
  {
    id: 'link-diretto',
    name: 'Link Diretto',
    color: '#14B8A6',
    bgColor: 'rgba(20, 184, 166, 0.15)',
    description: 'Email, newsletter o messaggio diretto',
  },
]

// ===================================
// STEPS - COME FUNZIONA
// ===================================
export interface Step {
  number: string
  icon: string
  title: string
  description: string
  detail: string
}

export const STEPS: Step[] = [
  {
    number: '01',
    icon: 'UserPlus',
    title: 'Crea il tuo account',
    description: 'Registrati in 2 minuti. Nessuna carta richiesta. 14 giorni gratis.',
    detail: 'Inserisci email e nome attività. Sei subito dentro, senza burocrazia e senza rischi.',
  },
  {
    number: '02',
    icon: 'Settings',
    title: 'Configura la tua attività',
    description: 'Aggiungi servizi, orari, operatori o tavoli. Bastano pochi minuti.',
    detail: 'Inserisci i tuoi servizi con durate e prezzi. Imposta gli orari di apertura e i tuoi operatori o spazi.',
  },
  {
    number: '03',
    icon: 'Share2',
    title: 'Condividi il link prenotazione',
    description: 'Un link unico da mettere su Google, Instagram, sito, WhatsApp e campagne.',
    detail: 'Ogni canale riceve il suo link tracciato. Mettili dove vuoi: bio Instagram, scheda Google, bottone sito, status WhatsApp.',
  },
  {
    number: '04',
    icon: 'CalendarCheck',
    title: 'Ricevi prenotazioni ordinate',
    description: 'Ogni richiesta arriva nel sistema, tracciata e organizzata.',
    detail: 'Niente più caos. Le prenotazioni arrivano in agenda con nome, servizio, ora e canale di origine già registrato.',
  },
  {
    number: '05',
    icon: 'BarChart3',
    title: 'Analizza i risultati',
    description: 'Dashboard con dati su prenotazioni, canali e andamento.',
    detail: 'Vedi in tempo reale quale canale porta più prenotazioni. Decidi dove investire tempo e budget con dati reali.',
  },
]

// ===================================
// FAQ
// ===================================
export interface FAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Come funziona la prova gratuita di Locario?',
    answer: 'Hai 14 giorni completi per esplorare tutte le funzionalità di Locario senza limiti. Nessuna carta di credito richiesta. Al termine della prova puoi scegliere un piano o semplicemente smettere di usarlo: nessun addebito automatico.',
  },
  {
    question: 'Posso usare Locario per il mio ristorante?',
    answer: 'Assolutamente sì. Locario è progettato anche per ristoranti e pizzerie: gestione tavoli, turni di servizio, richieste speciali e prenotazioni da Google, WhatsApp, sito e social in un unico sistema.',
  },
  {
    question: 'Come fa Locario a sapere da dove arriva una prenotazione?',
    answer: 'Ogni canale di acquisizione riceve un link prenotazione con un identificatore univoco. Quando un cliente prenota tramite quel link, il sistema registra automaticamente la fonte. Vedi così esattamente quante prenotazioni arrivano da Google Business, Instagram, il tuo sito, una campagna pubblicitaria o un QR code fisico.',
  },
  {
    question: 'Locario funziona anche per parrucchieri e centri estetici?',
    answer: 'Sì, Locario è multi-settore. Parrucchieri, barber shop, centri estetici e spa possono gestire agenda, operatori con orari diversi, trattamenti di durata variabile, cabine e clienti abituali. Il sistema si adatta alla tua attività.',
  },
  {
    question: 'Devo installare qualcosa per usare Locario?',
    answer: 'No. Locario è completamente cloud-based. Funziona da browser su qualsiasi dispositivo: computer, tablet o smartphone. Nessun software da installare, nessun aggiornamento manuale.',
  },
  {
    question: 'Come condivido il link di prenotazione sui miei canali?',
    answer: 'Dal tuo pannello Locario generi link tracciati per ogni canale: uno per Instagram, uno per Google Business Profile, uno per il sito, uno per WhatsApp. Ogni link è diverso così il sistema sa da dove arriva ogni prenotazione.',
  },
  {
    question: 'Posso gestire più operatori con orari diversi?',
    answer: 'Sì. Locario supporta la gestione di più operatori, ognuno con il proprio calendario, i propri servizi e i propri orari di disponibilità. I clienti possono scegliere l\'operatore preferito al momento della prenotazione.',
  },
  {
    question: 'Come funzionano i promemoria automatici?',
    answer: 'Il sistema invia automaticamente un promemoria al cliente prima dell\'appuntamento (24 ore prima o all\'orario che configuri tu). Questo riduce significativamente i no-show e le cancellazioni dell\'ultimo minuto.',
  },
  {
    question: 'Cosa succede dopo i 14 giorni di prova?',
    answer: 'Al termine della prova ti viene chiesto di scegliere un piano per continuare. Se non lo fai, l\'account viene sospeso automaticamente e non viene addebitato nulla. Nessuna sorpresa.',
  },
  {
    question: 'Posso annullare l\'abbonamento quando voglio?',
    answer: 'Sì, puoi cancellare in qualsiasi momento dal pannello del tuo account. Nessun vincolo contrattuale, nessuna penale, nessuna telefonata da fare. Il servizio rimane attivo fino alla fine del periodo pagato.',
  },
]
