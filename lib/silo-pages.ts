import type { FAQItem } from './constants'

export type SiloLink = {
  href: string
  label: string
  description: string
}

export type SiloPageData = {
  key: string
  path: string
  kicker: string
  title: string
  highlight: string
  description: string
  gradient: string
  accent: string
  shadow: string
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
  intent: string
  audience: string
  painTitle: string
  solutionTitle: string
  painPoints: string[]
  solutionPoints: string[]
  proofTitle: string
  proofItems: string[]
  related: SiloLink[]
  faq: FAQItem[]
}

const ristoranteLinks: SiloLink[] = [
  {
    href: '/gestionale-prenotazioni-ristorante',
    label: 'Gestionale prenotazioni ristorante',
    description: 'La pagina hub per ristoranti, tavoli, turni e canali di prenotazione.',
  },
  {
    href: '/prenotazioni-online',
    label: 'Prenotazioni online',
    description: 'Il link prenotazione tracciato per sito, Google, Instagram e WhatsApp.',
  },
  {
    href: '/tracciamento-prenotazioni',
    label: 'Tracciamento prenotazioni',
    description: 'Il differenziatore Locario: sapere da dove arriva ogni prenotazione.',
  },
]

export const SILO_PAGES = {
  softwarePrenotazioniRistorante: {
    key: 'softwarePrenotazioniRistorante',
    path: '/software-prenotazioni-ristorante',
    kicker: 'Software prenotazioni ristorante',
    title: 'Software prenotazioni',
    highlight: 'per ristoranti che vogliono ordine e dati',
    description:
      'Locario centralizza prenotazioni da sito, Google, Instagram e WhatsApp in una dashboard pensata per ristoranti. Gestisci tavoli, turni e fonti di acquisizione senza perdere il controllo del servizio.',
    gradient: 'linear-gradient(135deg, #F59E0B, #6C63FF)',
    accent: '#F59E0B',
    shadow: 'rgba(245, 158, 11, 0.3)',
    metadata: {
      title: 'Software Prenotazioni Ristorante | Tavoli, Turni e Tracking',
      description:
        'Software prenotazioni ristorante per gestire tavoli, turni, richieste da Google, Instagram, WhatsApp e sito. Traccia i canali e riduci il caos operativo.',
      keywords: [
        'software prenotazioni ristorante',
        'gestionale prenotazioni ristorante',
        'software tavoli ristorante',
        'programma prenotazioni ristorante',
        'prenotazioni online ristorante',
      ],
    },
    intent: 'Scegliere un software per gestire le prenotazioni del ristorante',
    audience: 'Titolari e responsabili di ristoranti che ricevono prenotazioni da piu canali',
    painTitle: 'Quando le prenotazioni arrivano da troppi posti',
    solutionTitle: 'Un software unico per servizio, sala e marketing',
    painPoints: [
      'Telefonate, messaggi WhatsApp e richieste da Google arrivano nello stesso momento.',
      'I tavoli vengono segnati su fogli diversi e gli errori emergono durante il servizio.',
      'Non sai se i tavoli pieni arrivano da Google, Instagram, dal sito o dal passaparola.',
      'I giorni deboli restano vuoti perche non hai dati utili per promuoverli.',
    ],
    solutionPoints: [
      'Agenda prenotazioni unica, con tavoli, turni e disponibilita sempre aggiornati.',
      'Link tracciati per ogni canale: Google, Instagram, WhatsApp, sito e campagne.',
      'Dashboard chiara per capire quali canali portano coperti reali.',
      'Storico clienti e note operative per gestire preferenze, allergie e richieste speciali.',
    ],
    proofTitle: 'Cosa deve fare un buon software prenotazioni ristorante',
    proofItems: [
      'Mostrare disponibilita reali prima che il cliente invii la richiesta.',
      'Evitare sovrapposizioni tra turni, tavoli e gruppi numerosi.',
      'Registrare la fonte della prenotazione senza lavoro manuale.',
      'Rendere leggibili i dati a chi gestisce sala, marketing e proprieta.',
    ],
    related: [
      ...ristoranteLinks,
      {
        href: '/ridurre-no-show-ristorante',
        label: 'Ridurre no-show ristorante',
        description: 'Promemoria e flussi piu chiari per diminuire assenze e tavoli vuoti.',
      },
    ],
    faq: [
      {
        question: 'Locario e un software prenotazioni solo per ristoranti?',
        answer:
          'No. Locario funziona anche per pizzerie, parrucchieri, centri estetici e altre attivita locali. Questa pagina e dedicata al caso ristorante: tavoli, turni, gruppi e canali di acquisizione.',
      },
      {
        question: 'Posso usare Locario insieme a Google Business Profile?',
        answer:
          'Si. Puoi inserire su Google Business Profile un link prenotazione tracciato. Quando un cliente prenota da quel link, Locario registra la fonte come Google.',
      },
      {
        question: 'Il software aiuta anche con WhatsApp?',
        answer:
          'Si. Puoi usare un link dedicato per WhatsApp e portare le richieste dentro un flusso ordinato, evitando di gestire tutto dentro chat sparse.',
      },
    ],
  },

  prenotazioniOnlineRistorante: {
    key: 'prenotazioniOnlineRistorante',
    path: '/prenotazioni-online-ristorante',
    kicker: 'Prenotazioni online ristorante',
    title: 'Prenotazioni online',
    highlight: 'per ristoranti sempre misurabili',
    description:
      'Trasforma sito, Google Business Profile, Instagram e WhatsApp in canali di prenotazione online per il tuo ristorante. Ogni link porta prenotazioni ordinate e dati sulla fonte.',
    gradient: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
    accent: '#00D4FF',
    shadow: 'rgba(0, 212, 255, 0.28)',
    metadata: {
      title: 'Prenotazioni Online Ristorante | Link Prenotazione Tracciato',
      description:
        'Prenotazioni online per ristoranti: link tracciati per sito, Google, Instagram e WhatsApp. Gestisci richieste, tavoli e fonti in un unico sistema.',
      keywords: [
        'prenotazioni online ristorante',
        'link prenotazione ristorante',
        'sistema prenotazioni online ristorante',
        'prenotare tavolo online',
        'prenotazioni ristorante da Google',
      ],
    },
    intent: 'Attivare prenotazioni online per il ristorante senza perdere controllo operativo',
    audience: 'Ristoratori che vogliono ricevere richieste anche fuori orario e misurarne la fonte',
    painTitle: 'Il cliente vuole prenotare subito, non aspettare una risposta',
    solutionTitle: 'Un link prenotazione per ogni canale importante',
    painPoints: [
      'Il cliente trova il ristorante su Google ma non vede un modo semplice per prenotare.',
      'Instagram genera interesse ma la prenotazione si perde tra messaggi e risposte tardive.',
      'WhatsApp resta comodo, ma diventa difficile capire quali richieste sono confermate.',
      'Il sito porta visite, ma non sai quante diventano tavoli reali.',
    ],
    solutionPoints: [
      'Link prenotazione online da usare su Google, sito, Instagram, QR code e WhatsApp.',
      'Disponibilita e orari configurati dal ristorante, non lasciati al caso.',
      'Fonte registrata automaticamente su ogni prenotazione.',
      'Esperienza semplice per il cliente e dashboard ordinata per lo staff.',
    ],
    proofTitle: 'Dove mettere il link prenotazione tracciato',
    proofItems: [
      'Pulsante prenota su Google Business Profile e Google Maps.',
      'Bio Instagram, storie in evidenza e campagne Meta.',
      'Pulsante principale del sito web del ristorante.',
      'Messaggio WhatsApp, QR code in sala e materiali locali.',
    ],
    related: [
      ...ristoranteLinks,
      {
        href: '/prenotazioni-da-google-business-profile',
        label: 'Prenotazioni da Google Business Profile',
        description: 'Ottimizza il canale piu vicino alle ricerche locali ad alta intenzione.',
      },
    ],
    faq: [
      {
        question: 'Le prenotazioni online sostituiscono il telefono?',
        answer:
          'Non per forza. Locario riduce le telefonate ripetitive e rende piu ordinati i canali digitali. Le prenotazioni telefoniche possono comunque essere inserite manualmente in dashboard.',
      },
      {
        question: 'Posso usare un link diverso per Google e Instagram?',
        answer:
          'Si. Ogni canale puo avere il suo link tracciato, cosi la dashboard mostra quale fonte ha generato ogni prenotazione.',
      },
      {
        question: 'I clienti devono scaricare una app?',
        answer:
          'No. Il cliente apre una pagina web, sceglie giorno, orario e dettagli richiesti dal ristorante. Non deve installare nulla.',
      },
    ],
  },

  ridurreNoShowRistorante: {
    key: 'ridurreNoShowRistorante',
    path: '/ridurre-no-show-ristorante',
    kicker: 'No-show ristorante',
    title: 'Ridurre i no-show',
    highlight: 'senza inseguire i clienti uno per uno',
    description:
      'I no-show lasciano tavoli vuoti proprio quando potresti venderli. Locario aiuta a ridurli con prenotazioni piu chiare, promemoria e una gestione ordinata delle conferme.',
    gradient: 'linear-gradient(135deg, #EF4444, #F59E0B)',
    accent: '#EF4444',
    shadow: 'rgba(239, 68, 68, 0.25)',
    metadata: {
      title: 'Ridurre No-Show Ristorante | Promemoria e Prenotazioni Ordinate',
      description:
        'Riduci i no-show nel ristorante con promemoria, prenotazioni online chiare e gestione ordinata delle conferme. Meno tavoli vuoti, piu controllo.',
      keywords: [
        'ridurre no show ristorante',
        'no show ristorante',
        'promemoria prenotazioni ristorante',
        'clienti che non si presentano ristorante',
        'conferma prenotazione ristorante',
      ],
    },
    intent: 'Diminuire clienti che prenotano e non si presentano al ristorante',
    audience: 'Ristoranti con tavoli vuoti causati da mancate presentazioni e cancellazioni tardive',
    painTitle: 'Il tavolo vuoto costa due volte',
    solutionTitle: 'Prenotazioni piu chiare, promemoria piu puntuali',
    painPoints: [
      'Il cliente prenota via chat e poi dimentica orario o numero persone.',
      'Lo staff scopre il no-show quando ormai e troppo tardi per riassegnare il tavolo.',
      'Non c e uno storico per capire se il problema si ripete con certi canali o giorni.',
      'Ogni conferma manuale richiede tempo durante servizio e preparazione.',
    ],
    solutionPoints: [
      'Prenotazione strutturata con giorno, orario, coperti e note sempre visibili.',
      'Promemoria automatici prima della prenotazione per ridurre dimenticanze.',
      'Storico clienti e canali per capire dove nascono piu no-show.',
      'Dashboard ordinata per vedere rapidamente prenotazioni, conferme e criticita.',
    ],
    proofTitle: 'Azioni pratiche per ridurre le mancate presentazioni',
    proofItems: [
      'Raccogliere dati chiari al momento della prenotazione.',
      'Inviare promemoria automatici nei momenti giusti.',
      'Usare canali tracciati per capire dove avvengono piu no-show.',
      'Controllare storico e note cliente prima dei servizi piu pieni.',
    ],
    related: [
      ...ristoranteLinks,
      {
        href: '/software-prenotazioni-ristorante',
        label: 'Software prenotazioni ristorante',
        description: 'Il sistema centrale per tavoli, turni, canali e dati.',
      },
    ],
    faq: [
      {
        question: 'Locario elimina completamente i no-show?',
        answer:
          'Nessun software puo eliminarli del tutto, ma un flusso chiaro e promemoria automatici aiutano a ridurre dimenticanze e assenze non comunicate.',
      },
      {
        question: 'Posso vedere da quale canale arrivano piu no-show?',
        answer:
          'Si. Ogni prenotazione puo essere collegata alla fonte, quindi puoi analizzare canali, giorni e fasce orarie piu problematiche.',
      },
      {
        question: 'I promemoria sono utili anche per gruppi numerosi?',
        answer:
          'Si. Per i gruppi sono ancora piu importanti, perche confermano orario, numero persone e dettagli prima del servizio.',
      },
    ],
  },

  gestirePrenotazioniWhatsapp: {
    key: 'gestirePrenotazioniWhatsapp',
    path: '/gestire-prenotazioni-whatsapp',
    kicker: 'Prenotazioni WhatsApp',
    title: 'Gestire le prenotazioni WhatsApp',
    highlight: 'senza perdere messaggi e conferme',
    description:
      'WhatsApp e comodo per i clienti, ma rischia di diventare un secondo gestionale non organizzato. Locario trasforma le richieste da WhatsApp in prenotazioni tracciabili e ordinate.',
    gradient: 'linear-gradient(135deg, #25D366, #00D4FF)',
    accent: '#25D366',
    shadow: 'rgba(37, 211, 102, 0.25)',
    metadata: {
      title: 'Gestire Prenotazioni WhatsApp | Link Tracciato per Attivita Locali',
      description:
        'Gestisci prenotazioni da WhatsApp con un link tracciato: meno chat confuse, piu richieste ordinate e fonte registrata in dashboard.',
      keywords: [
        'gestire prenotazioni whatsapp',
        'prenotazioni whatsapp ristorante',
        'link prenotazione whatsapp',
        'prenotazioni da whatsapp',
        'agenda online whatsapp',
      ],
    },
    intent: 'Ordinare le richieste di prenotazione che arrivano da WhatsApp',
    audience: 'Attivita locali che ricevono molte richieste in chat e vogliono smettere di perdere messaggi',
    painTitle: 'WhatsApp e veloce, ma non e una dashboard',
    solutionTitle: 'Usa WhatsApp come porta di ingresso, non come archivio',
    painPoints: [
      'Le richieste restano mischiate a domande, foto, vocali e messaggi personali.',
      'Una conferma puo perdersi dopo pochi minuti in una chat affollata.',
      'Lo staff non vede subito disponibilita, turni e dati cliente.',
      'Non puoi misurare quante prenotazioni arrivano davvero da WhatsApp.',
    ],
    solutionPoints: [
      'Link prenotazione dedicato da condividere in chat, stato e messaggi automatici.',
      'La richiesta entra in Locario con dati ordinati e fonte WhatsApp registrata.',
      'Disponibilita, note e storico cliente restano in una dashboard unica.',
      'Puoi confrontare WhatsApp con Google, Instagram, sito e campagne.',
    ],
    proofTitle: 'Dove usare il link WhatsApp tracciato',
    proofItems: [
      'Risposta rapida per chi chiede disponibilita in chat.',
      'Messaggio automatico fuori orario con invito a prenotare online.',
      'Stato WhatsApp durante eventi, weekend o promozioni.',
      'Campagne locali dove WhatsApp resta il canale piu familiare.',
    ],
    related: [
      ...ristoranteLinks,
      {
        href: '/prenotazioni-online-ristorante',
        label: 'Prenotazioni online ristorante',
        description: 'Porta WhatsApp, Google e sito dentro lo stesso flusso prenotazioni.',
      },
    ],
    faq: [
      {
        question: 'Devo smettere di usare WhatsApp?',
        answer:
          'No. L obiettivo e usare WhatsApp meglio: non come archivio delle prenotazioni, ma come canale che porta il cliente verso un flusso ordinato.',
      },
      {
        question: 'Il link WhatsApp e diverso dagli altri link?',
        answer:
          'Si, puoi creare un link dedicato a WhatsApp. Quando il cliente prenota da quel link, la fonte viene registrata in dashboard.',
      },
      {
        question: 'Funziona anche per parrucchieri e centri estetici?',
        answer:
          'Si. WhatsApp e spesso centrale anche per saloni, barber shop, centri estetici e studi professionali.',
      },
    ],
  },

  prenotazioniDaGoogleBusinessProfile: {
    key: 'prenotazioniDaGoogleBusinessProfile',
    path: '/prenotazioni-da-google-business-profile',
    kicker: 'Google Business Profile',
    title: 'Prenotazioni da Google Business Profile',
    highlight: 'tracciate fino al tavolo o appuntamento',
    description:
      'Google Business Profile intercetta clienti con intenzione alta. Con Locario puoi usare un link prenotazione tracciato e vedere quante richieste arrivano davvero dalla scheda Google.',
    gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
    accent: '#4285F4',
    shadow: 'rgba(66, 133, 244, 0.25)',
    metadata: {
      title: 'Prenotazioni da Google Business Profile | Link Tracciato Locario',
      description:
        'Trasforma Google Business Profile in un canale di prenotazione misurabile. Usa un link tracciato e scopri quante prenotazioni arrivano da Google.',
      keywords: [
        'prenotazioni da Google Business Profile',
        'link prenotazione Google Business',
        'prenotazioni Google Maps ristorante',
        'Google Business Profile prenota',
        'tracciare prenotazioni da Google',
      ],
    },
    intent: 'Capire e aumentare le prenotazioni generate dalla scheda Google',
    audience: 'Attivita locali che ricevono visite da Google Maps e vogliono misurare le prenotazioni',
    painTitle: 'Google porta visibilita, ma spesso non dati chiari',
    solutionTitle: 'Un link prenotazione dedicato alla scheda Google',
    painPoints: [
      'La scheda Google riceve visite, chiamate e click, ma non sempre sai cosa diventa prenotazione.',
      'Il cliente passa da Google a telefono o chat e la fonte si perde.',
      'Non riesci a confrontare Google con Instagram, sito o campagne.',
      'Senza dati, e difficile capire se ottimizzare foto, post, recensioni o link.',
    ],
    solutionPoints: [
      'Inserisci su Google Business Profile un link prenotazione tracciato Locario.',
      'Ogni prenotazione da quel link entra con fonte Google registrata.',
      'La dashboard mostra andamento, giorni e volume delle richieste da Google.',
      'Puoi confrontare Google con gli altri canali e decidere dove investire.',
    ],
    proofTitle: 'Cosa misurare sulla scheda Google',
    proofItems: [
      'Quante prenotazioni arrivano dal link principale della scheda.',
      'Quali giorni ricevono piu richieste da Google Maps.',
      'Quanto pesa Google rispetto a Instagram, sito e WhatsApp.',
      'Se campagne o aggiornamenti locali migliorano le prenotazioni reali.',
    ],
    related: [
      ...ristoranteLinks,
      {
        href: '/gestire-prenotazioni-whatsapp',
        label: 'Gestire prenotazioni WhatsApp',
        description: 'Confronta Google con un altro canale ad alta frequenza nelle attivita locali.',
      },
    ],
    faq: [
      {
        question: 'Posso mettere il link Locario su Google Business Profile?',
        answer:
          'Si. Puoi usare il link prenotazione generato da Locario nella scheda Google, dove disponibile, oppure nei pulsanti e nei contenuti che rimandano alla prenotazione.',
      },
      {
        question: 'Google Business Profile resta separato da Locario?',
        answer:
          'Si. Locario non sostituisce Google Business Profile: lo rende piu misurabile collegando le prenotazioni alla fonte Google.',
      },
      {
        question: 'Questa pagina vale solo per ristoranti?',
        answer:
          'No. Il tracking da Google Business Profile e utile anche per parrucchieri, centri estetici, studi professionali e altre attivita locali.',
      },
    ],
  },
} satisfies Record<string, SiloPageData>