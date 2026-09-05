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
      title: 'Ridurre No-Show Ristorante | Promemoria Automatici',
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
    related: ristoranteLinks,
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
      title: 'Gestire Prenotazioni WhatsApp | Link Tracciato',
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
    related: ristoranteLinks,
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
      title: 'Google Business Profile | Prenotazioni Tracciate',
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
  gestionalePrenotazioniBar: {
    key: 'gestionalePrenotazioniBar',
    path: '/gestionale-prenotazioni-bar',
    kicker: 'Gestionale prenotazioni bar',
    title: 'Gestionale prenotazioni',
    highlight: 'per bar, bistrot e locali veloci',
    description:
      'Locario aiuta bar, bistrot e locali con tavoli o eventi a gestire prenotazioni, richieste da WhatsApp, Google e Instagram, mantenendo chiara la fonte di ogni cliente.',
    gradient: 'linear-gradient(135deg, #F59E0B, #00D4FF)',
    accent: '#F59E0B',
    shadow: 'rgba(245, 158, 11, 0.25)',
    metadata: {
      title: 'Gestionale Prenotazioni Bar | Tavoli ed Eventi',
      description:
        'Gestionale prenotazioni per bar, bistrot e locali: tavoli, aperitivi, eventi, link online e tracking dei canali da Google, Instagram e WhatsApp.',
      keywords: [
        'gestionale prenotazioni bar',
        'prenotazioni online bar',
        'software prenotazioni bar',
        'agenda prenotazioni bar',
        'gestione tavoli bar',
      ],
    },
    intent: 'Gestire prenotazioni, aperitivi ed eventi in un bar o bistrot',
    audience: 'Bar, bistrot, cocktail bar e locali che ricevono richieste su canali diversi',
    painTitle: 'Quando anche un bar diventa una piccola agenda piena',
    solutionTitle: 'Prenotazioni leggere, canali chiari, meno messaggi sparsi',
    painPoints: [
      'Aperitivi, tavoli e piccoli eventi arrivano via WhatsApp, telefono e Instagram.',
      'Le richieste serali si mescolano ai messaggi operativi e qualcosa sfugge.',
      'Non sai se i clienti nuovi arrivano da Google, social o passaparola digitale.',
      'Nei giorni pieni e difficile capire disponibilita e orari senza ricontrollare tutto.',
    ],
    solutionPoints: [
      'Link prenotazione per Google, Instagram, WhatsApp e sito del locale.',
      'Agenda unica per tavoli, fasce orarie, eventi e richieste speciali.',
      'Fonte registrata su ogni prenotazione per misurare i canali migliori.',
      'Dashboard semplice per staff e titolare, anche durante i momenti veloci del servizio.',
    ],
    proofTitle: 'Cosa puo misurare un bar con Locario',
    proofItems: [
      'Quante prenotazioni arrivano da Google Maps rispetto a Instagram.',
      'Quali fasce orarie riempiono meglio aperitivi ed eventi.',
      'Quali link generano clienti nuovi e richieste ripetute.',
      'Dove semplificare il flusso per ridurre chat e telefonate inutili.',
    ],
    related: [
      {
        href: '/link-prenotazione-online',
        label: 'Link prenotazione online',
        description: 'Un link unico o tracciato per ogni canale importante del locale.',
      },
      {
        href: '/prenotazioni-da-google-business-profile',
        label: 'Prenotazioni da Google',
        description: 'Misura le richieste che arrivano dalla scheda Google Business Profile.',
      },
      {
        href: '/gestire-prenotazioni-whatsapp',
        label: 'Prenotazioni WhatsApp',
        description: 'Porta le chat verso un flusso prenotazioni piu ordinato.',
      },
      {
        href: '/prenotazioni-online',
        label: 'Prenotazioni online',
        description: 'La base per ricevere richieste anche fuori orario.',
      },
    ],
    faq: [
      {
        question: 'Locario e adatto anche a un bar piccolo?',
        answer:
          'Si. Se il bar riceve prenotazioni per tavoli, aperitivi, gruppi o eventi, Locario aiuta a raccoglierle in modo ordinato e a capire da quali canali arrivano.',
      },
      {
        question: 'Posso usare un link diverso per aperitivi o eventi?',
        answer:
          'Si. Puoi usare link tracciati diversi per campagne, social, Google o messaggi WhatsApp, cosi ogni richiesta mantiene la sua fonte.',
      },
      {
        question: 'Serve scaricare una app al cliente?',
        answer:
          'No. Il cliente apre una pagina web, sceglie giorno e orario disponibili e invia la richiesta dal telefono.',
      },
    ],
  },

  gestionalePrenotazioniAgriturismo: {
    key: 'gestionalePrenotazioniAgriturismo',
    path: '/gestionale-prenotazioni-agriturismo',
    kicker: 'Gestionale prenotazioni agriturismo',
    title: 'Gestionale prenotazioni',
    highlight: 'per agriturismi, degustazioni e tavoli',
    description:
      'Locario organizza prenotazioni per agriturismi, pranzi, cene, degustazioni ed esperienze locali. Ogni richiesta resta tracciata dal canale giusto.',
    gradient: 'linear-gradient(135deg, #22C55E, #F59E0B)',
    accent: '#22C55E',
    shadow: 'rgba(34, 197, 94, 0.25)',
    metadata: {
      title: 'Gestionale Prenotazioni Agriturismo | Degustazioni',
      description:
        'Gestionale prenotazioni agriturismo per pranzi, cene, degustazioni ed eventi. Link online, promemoria e tracking da Google, sito e WhatsApp.',
      keywords: [
        'gestionale prenotazioni agriturismo',
        'prenotazioni online agriturismo',
        'software prenotazioni agriturismo',
        'prenotazioni degustazioni agriturismo',
        'gestione prenotazioni eventi agriturismo',
      ],
    },
    intent: 'Gestire prenotazioni di tavoli, degustazioni ed eventi in agriturismo',
    audience: 'Agriturismi e strutture locali che ricevono richieste da Google, sito, telefono e WhatsApp',
    painTitle: 'Le richieste arrivano prima del weekend, tutte insieme',
    solutionTitle: 'Un flusso unico per tavoli, gruppi ed esperienze',
    painPoints: [
      'Pranzi, cene, degustazioni e gruppi hanno dettagli diversi da ricordare.',
      'Le richieste arrivano da Google, sito, WhatsApp e telefonate senza una fonte unica.',
      'Nei weekend pieni e facile perdere note su allergie, bambini o orari di arrivo.',
      'Non sai quali canali portano prenotazioni reali e quali solo messaggi generici.',
    ],
    solutionPoints: [
      'Agenda online per tavoli, fasce orarie, degustazioni e richieste speciali.',
      'Link tracciati da usare su Google Business Profile, sito, Instagram e WhatsApp.',
      'Schede cliente e note operative per preferenze, allergie e gruppi.',
      'Dashboard per capire quali canali riempiono davvero weekend ed eventi.',
    ],
    proofTitle: 'Dati utili per un agriturismo',
    proofItems: [
      'Prenotazioni arrivate dalla scheda Google e dal sito ufficiale.',
      'Richieste per degustazioni, gruppi o giornate specifiche.',
      'Canali che generano clienti nuovi rispetto a clienti abituali.',
      'Promemoria inviati prima dell appuntamento o del pranzo prenotato.',
    ],
    related: [
      {
        href: '/prenotazioni-da-google-business-profile',
        label: 'Prenotazioni da Google',
        description: 'Trasforma le ricerche locali in prenotazioni misurabili.',
      },
      {
        href: '/promemoria-prenotazioni',
        label: 'Promemoria prenotazioni',
        description: 'Riduci dimenticanze e conferme manuali prima del giorno prenotato.',
      },
      {
        href: '/link-prenotazione-online',
        label: 'Link prenotazione online',
        description: 'Un link da inserire in sito, Google, social e messaggi.',
      },
      {
        href: '/gestionale-prenotazioni-ristorante',
        label: 'Gestionale ristorante',
        description: 'Approfondisci la gestione di tavoli, turni e sala.',
      },
    ],
    faq: [
      {
        question: 'Locario gestisce anche degustazioni ed eventi?',
        answer:
          'Si. Puoi configurare disponibilita, fasce orarie e link dedicati per esperienze specifiche come degustazioni, pranzi speciali o piccoli eventi.',
      },
      {
        question: 'Posso sapere se una prenotazione arriva da Google?',
        answer:
          'Si. Usando un link tracciato su Google Business Profile, Locario registra la fonte della prenotazione come Google.',
      },
      {
        question: 'E utile anche se ricevo molte prenotazioni al telefono?',
        answer:
          'Si. Le prenotazioni telefoniche possono essere inserite in dashboard, mentre i canali digitali entrano con dati gia ordinati.',
      },
    ],
  },

  gestionaleBarberShop: {
    key: 'gestionaleBarberShop',
    path: '/gestionale-barber-shop',
    kicker: 'Gestionale barber shop',
    title: 'Gestionale barber shop',
    highlight: 'per appuntamenti rapidi e canali misurabili',
    description:
      'Locario organizza prenotazioni per barber shop, tagli, barba e servizi rapidi. Meno chat, meno telefonate e piu dati su Instagram, Google e WhatsApp.',
    gradient: 'linear-gradient(135deg, #111827, #00D4FF)',
    accent: '#00D4FF',
    shadow: 'rgba(0, 212, 255, 0.24)',
    metadata: {
      title: 'Gestionale Barber Shop | Agenda Online Tracciata',
      description:
        'Gestionale barber shop per appuntamenti online, operatori, taglio, barba, promemoria e tracking da Instagram, Google, WhatsApp e sito.',
      keywords: [
        'gestionale barber shop',
        'agenda online barber shop',
        'software prenotazioni barber shop',
        'prenotazioni online barbiere',
        'gestionale barbiere',
      ],
    },
    intent: 'Gestire appuntamenti e operatori in un barber shop',
    audience: 'Barber shop, barbieri e saloni maschili con richieste da social, Google e WhatsApp',
    painTitle: 'Nel barber shop ogni slot conta',
    solutionTitle: 'Prenotazioni veloci, operatori chiari, meno buchi in agenda',
    painPoints: [
      'Taglio, barba e servizi combinati hanno durate diverse e slot ravvicinati.',
      'WhatsApp e Instagram portano richieste, ma interrompono il lavoro al banco.',
      'I clienti abituali vogliono il loro barber preferito e orari precisi.',
      'Senza promemoria, anche un appuntamento breve puo diventare un buco perso.',
    ],
    solutionPoints: [
      'Agenda online con servizi, durate e operatori del barber shop.',
      'Link prenotazione in bio Instagram, Google Business Profile e WhatsApp.',
      'Promemoria automatici prima dell appuntamento.',
      'Tracking canali per capire quali fonti portano clienti nuovi e ritorni.',
    ],
    proofTitle: 'Cosa controllare in un barber shop',
    proofItems: [
      'Slot liberi per operatore e servizio durante la settimana.',
      'Prenotazioni da Instagram rispetto a Google Maps.',
      'Clienti abituali, preferenze e storico appuntamenti.',
      'No-show e cancellazioni su giorni e fasce orarie specifiche.',
    ],
    related: [
      {
        href: '/gestionale-prenotazioni-parrucchieri',
        label: 'Gestionale parrucchieri',
        description: 'Gestione completa per saloni e team.',
      },
      {
        href: '/promemoria-prenotazioni',
        label: 'Promemoria prenotazioni',
        description: 'Reminder automatici per diminuire appuntamenti mancati.',
      },
      {
        href: '/link-prenotazione-online',
        label: 'Link prenotazione online',
        description: 'Il link da mettere su social, Google e sito.',
      },
    ],
    faq: [
      {
        question: 'Locario funziona per barber shop con piu operatori?',
        answer:
          'Si. Puoi gestire servizi, durate e disponibilita per ogni operatore, cosi il cliente vede solo slot realmente prenotabili.',
      },
      {
        question: 'Posso far prenotare da Instagram?',
        answer:
          'Si. Metti un link prenotazione tracciato in bio o nelle storie e Locario registra la fonte Instagram.',
      },
      {
        question: 'I promemoria aiutano anche per appuntamenti brevi?',
        answer:
          'Si. Nei servizi brevi ogni slot perso pesa molto, quindi un promemoria automatico puo ridurre dimenticanze e no-show.',
      },
    ],
  },

  promemoriaPrenotazioni: {
    key: 'promemoriaPrenotazioni',
    path: '/promemoria-prenotazioni',
    kicker: 'Promemoria prenotazioni',
    title: 'Promemoria prenotazioni',
    highlight: 'per ridurre dimenticanze e no-show',
    description:
      'Locario invia promemoria automatici e rende ogni prenotazione piu chiara: giorno, orario, dettagli e fonte restano in un flusso ordinato.',
    gradient: 'linear-gradient(135deg, #EF4444, #6C63FF)',
    accent: '#EF4444',
    shadow: 'rgba(239, 68, 68, 0.24)',
    metadata: {
      title: 'Promemoria Prenotazioni | Reminder Automatici',
      description:
        'Promemoria prenotazioni automatici per ridurre dimenticanze, no-show e conferme manuali. Ideale per ristoranti, saloni, barber e centri estetici.',
      keywords: [
        'promemoria prenotazioni',
        'reminder prenotazioni',
        'promemoria appuntamenti clienti',
        'ridurre no show appuntamenti',
        'notifiche prenotazioni clienti',
      ],
    },
    intent: 'Ridurre dimenticanze e mancate presentazioni con promemoria automatici',
    audience: 'Attivita locali che perdono tempo in conferme manuali o subiscono no-show',
    painTitle: 'Il cliente prenota, poi la vita succede',
    solutionTitle: 'Reminder automatici dentro un flusso gia ordinato',
    painPoints: [
      'Lo staff deve confermare appuntamenti e tavoli a mano nei momenti piu pieni.',
      'Il cliente dimentica giorno, orario o dettagli della prenotazione.',
      'Le mancate presentazioni lasciano tavoli o slot vuoti difficili da recuperare.',
      'Non sai se certi canali o fasce orarie generano piu no-show.',
    ],
    solutionPoints: [
      'Promemoria automatici collegati alla prenotazione registrata in Locario.',
      'Dettagli chiari per cliente e staff: giorno, orario, servizio o coperti.',
      'Storico e tracking per leggere meglio assenze, cancellazioni e canali.',
      'Meno lavoro manuale di conferma prima del servizio o dell appuntamento.',
    ],
    proofTitle: 'Quando i promemoria fanno piu differenza',
    proofItems: [
      'Prenotazioni prese con giorni di anticipo.',
      'Gruppi, tavoli grandi, trattamenti lunghi o servizi costosi.',
      'Appuntamenti fuori dagli orari abituali del cliente.',
      'Weekend, eventi e giornate dove ogni slot vuoto pesa di piu.',
    ],
    related: [
      {
        href: '/ridurre-no-show-ristorante',
        label: 'Ridurre no-show ristorante',
        description: 'Applicazione specifica ai tavoli e al servizio in sala.',
      },
      {
        href: '/gestionale-prenotazioni-parrucchieri',
        label: 'Agenda parrucchieri',
        description: 'Reminder e agenda online per saloni con operatori.',
      },
      {
        href: '/gestionale-prenotazioni-centro-estetico',
        label: 'Agenda centro estetico',
        description: 'Promemoria per trattamenti, cabine e appuntamenti.',
      },
      {
        href: '/prenotazioni-online',
        label: 'Prenotazioni online',
        description: 'La base per creare richieste strutturate e ricordabili.',
      },
    ],
    faq: [
      {
        question: 'I promemoria eliminano tutti i no-show?',
        answer:
          'No, ma aiutano a ridurre dimenticanze e assenze non comunicate, soprattutto quando la prenotazione e stata fatta con anticipo.',
      },
      {
        question: 'Sono utili anche fuori dalla ristorazione?',
        answer:
          'Si. Parrucchieri, barber shop, centri estetici e altre attivita su appuntamento beneficiano molto dei reminder.',
      },
      {
        question: 'Posso capire da dove arrivano i no-show?',
        answer:
          'Usando link tracciati, puoi confrontare canali e fasce orarie per capire dove si concentrano cancellazioni e mancate presentazioni.',
      },
    ],
  },

  linkPrenotazioneOnline: {
    key: 'linkPrenotazioneOnline',
    path: '/link-prenotazione-online',
    kicker: 'Link prenotazione online',
    title: 'Link prenotazione online',
    highlight: 'per Google, Instagram, WhatsApp e sito',
    description:
      'Con Locario crei link prenotazione tracciati per ogni canale. Il cliente prenota online e tu sai se arriva da Google, Instagram, WhatsApp, sito o campagna.',
    gradient: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
    accent: '#6C63FF',
    shadow: 'rgba(108, 99, 255, 0.28)',
    metadata: {
      title: 'Link Prenotazione Online per Ogni Canale',
      description:
        'Crea link prenotazione online tracciati per Google, Instagram, WhatsApp, sito e campagne. Ogni richiesta entra in dashboard con fonte misurabile.',
      keywords: [
        'link prenotazione online',
        'link prenotazione instagram',
        'link prenotazione whatsapp',
        'link prenotazione Google Business',
        'prenotazioni online con link',
      ],
    },
    intent: 'Creare link prenotazione misurabili per i canali digitali di una attivita locale',
    audience: 'Ristoranti, bar, saloni, barber shop, centri estetici e attivita locali multicanale',
    painTitle: 'Un solo link generico non basta per capire cosa funziona',
    solutionTitle: 'Un link per ogni canale, una dashboard per leggerli tutti',
    painPoints: [
      'Metti un link ovunque, ma poi non sai quale canale ha generato la prenotazione.',
      'Google, Instagram e WhatsApp portano clienti con intenzioni diverse.',
      'Le campagne locali sono difficili da valutare se tutte finiscono nello stesso flusso.',
      'Lo staff riceve richieste sparse invece di prenotazioni strutturate.',
    ],
    solutionPoints: [
      'Link prenotazione dedicati per Google, Instagram, WhatsApp, sito e campagne.',
      'Fonte registrata automaticamente su ogni prenotazione ricevuta.',
      'Dashboard per confrontare canali, giorni e volume delle richieste.',
      'Esperienza semplice per il cliente, senza installare app.',
    ],
    proofTitle: 'Dove usare i link prenotazione tracciati',
    proofItems: [
      'Pulsante prenota su sito e Google Business Profile.',
      'Bio Instagram, storie, campagne Meta e post locali.',
      'Messaggi WhatsApp, QR code, menu, vetrina e materiali in negozio.',
      'Promozioni stagionali, eventi e collaborazioni con partner locali.',
    ],
    related: [
      {
        href: '/prenotazioni-online',
        label: 'Prenotazioni online',
        description: 'La funzione principale per ricevere richieste dal web.',
      },
      {
        href: '/prenotazioni-da-google-business-profile',
        label: 'Prenotazioni da Google',
        description: 'Misura il canale Google Business Profile.',
      },
      {
        href: '/gestire-prenotazioni-whatsapp',
        label: 'Prenotazioni WhatsApp',
        description: 'Usa WhatsApp come ingresso ordinato, non come archivio.',
      },
      {
        href: '/tracciamento-prenotazioni',
        label: 'Tracciamento prenotazioni',
        description: 'Il cuore del sistema di attribuzione Locario.',
      },
    ],
    faq: [
      {
        question: 'Posso creare piu link per la stessa attivita?',
        answer:
          'Si. Il punto e proprio creare link diversi per canale o campagna, cosi puoi misurare quale fonte genera prenotazioni reali.',
      },
      {
        question: 'Il cliente vede che il link e tracciato?',
        answer:
          'Il cliente vede una normale pagina di prenotazione. Il tracking serve alla dashboard per registrare la fonte in modo ordinato.',
      },
      {
        question: 'Dove conviene mettere il link prenotazione?',
        answer:
          'Sito, Google Business Profile, Instagram, WhatsApp, QR code e campagne sono i punti principali. La scelta migliore dipende da dove i clienti ti cercano gia.',
      },
    ],
  },
  studioDentistico: {
    key: 'studioDentistico',
    path: '/gestionale-prenotazioni-studio-dentistico',
    kicker: 'Gestionale prenotazioni studio dentistico',
    title: 'Gestionale prenotazioni',
    highlight: 'per studi dentistici e appuntamenti paziente',
    description:
      'Locario aiuta studi dentistici e cliniche odontoiatriche a gestire appuntamenti, promemoria, richieste da Google e WhatsApp, mantenendo chiara la fonte di ogni nuovo paziente.',
    gradient: 'linear-gradient(135deg, #14B8A6, #6C63FF)',
    accent: '#14B8A6',
    shadow: 'rgba(20, 184, 166, 0.24)',
    metadata: {
      title: 'Gestionale Prenotazioni Studio Dentistico | Agenda',
      description:
        'Gestionale prenotazioni per studio dentistico: agenda online, promemoria appuntamenti, richieste da Google e WhatsApp, tracking dei canali paziente.',
      keywords: [
        'gestionale prenotazioni studio dentistico',
        'agenda online studio dentistico',
        'software appuntamenti dentista',
        'prenotazioni online dentista',
        'promemoria appuntamenti dentista',
      ],
    },
    intent: 'Gestire appuntamenti e richieste paziente in uno studio dentistico',
    audience: 'Studi dentistici, cliniche odontoiatriche e studi professionali che ricevono appuntamenti da piu canali',
    painTitle: 'Lo studio riceve richieste, conferme e spostamenti da troppi canali',
    solutionTitle: 'Una agenda ordinata per appuntamenti, pazienti e fonti',
    painPoints: [
      'Telefonate, messaggi WhatsApp e richieste da Google arrivano durante le visite.',
      'Gli spostamenti appuntamento consumano tempo alla segreteria.',
      'I pazienti dimenticano orario, trattamento o visita di controllo.',
      'Non sai quali canali portano nuovi pazienti e quali generano solo contatti generici.',
    ],
    solutionPoints: [
      'Agenda online per appuntamenti, visite, controlli e fasce disponibili.',
      'Promemoria automatici per ridurre dimenticanze e conferme manuali.',
      'Link tracciati per Google Business Profile, sito, WhatsApp e campagne locali.',
      'Scheda cliente con note operative e storico prenotazioni consultabile dallo staff.',
    ],
    proofTitle: 'Cosa puo misurare uno studio dentistico',
    proofItems: [
      'Quanti appuntamenti arrivano dalla scheda Google Business Profile.',
      'Quali canali portano nuovi pazienti rispetto ai pazienti ricorrenti.',
      'Quando si concentrano cancellazioni, spostamenti e no-show.',
      'Quali campagne o link locali generano richieste reali.',
    ],
    related: [
      {
        href: '/promemoria-prenotazioni',
        label: 'Promemoria prenotazioni',
        description: 'Reminder automatici per ridurre dimenticanze e conferme manuali.',
      },
      {
        href: '/prenotazioni-da-google-business-profile',
        label: 'Prenotazioni da Google',
        description: 'Misura le richieste che arrivano dalla scheda Google dello studio.',
      },
      {
        href: '/link-prenotazione-online',
        label: 'Link prenotazione online',
        description: 'Usa link tracciati per sito, WhatsApp, Google e campagne.',
      },
      {
        href: '/gestire-prenotazioni-whatsapp',
        label: 'Prenotazioni WhatsApp',
        description: 'Porta le richieste da chat dentro un flusso piu ordinato.',
      },
    ],
    faq: [
      {
        question: 'Come funziona l\'agenda online per uno studio dentistico?',
        answer:
          'Il paziente prenota da un link dedicato (sito, scheda Google, WhatsApp) scegliendo tra gli slot realmente disponibili. La richiesta entra in Locario gia ordinata, con fonte, orario e dati del paziente, senza passare dalla segreteria per ogni conferma.',
      },
      {
        question: 'Come si gestisce l\'agenda di uno studio con piu dentisti o poltrone?',
        answer:
          'Ogni dentista o poltrona ha la propria disponibilita configurabile in Locario. Il paziente vede solo gli slot realmente liberi per il professionista o il trattamento scelto, e lo studio ha una vista unica su tutte le agende invece di doverle incrociare a mano.',
      },
      {
        question: 'Locario va bene per uno studio dentistico?',
        answer:
          'Si. Locario e adatto a studi dentistici che vogliono organizzare appuntamenti, promemoria e canali di acquisizione in un sistema piu ordinato.',
      },
      {
        question: 'Posso usare Locario per le richieste da Google?',
        answer:
          'Si. Puoi usare un link prenotazione tracciato nella scheda Google Business Profile o nel sito dello studio e misurare le richieste ricevute.',
      },
      {
        question: 'I promemoria aiutano con visite di controllo e appuntamenti lunghi?',
        answer:
          'Si. I reminder sono utili soprattutto per appuntamenti fissati con anticipo, visite di controllo e trattamenti che occupano slot importanti in agenda.',
      },
    ],
  },
} satisfies Record<string, SiloPageData>
