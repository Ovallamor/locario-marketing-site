// lib/legal.ts
// Dati dell'azienda che eroga il servizio, mostrati in Privacy e Termini.
// Si compilano con variabili d'ambiente (nessun valore inventato nel codice):
// finche' sono vuote i dati non compaiono nelle pagine.

export const LEGAL = {
  name: process.env.NEXT_PUBLIC_LEGAL_NAME?.trim() || 'Ecosy Digital',
  address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS?.trim() ?? '',
  vatId: process.env.NEXT_PUBLIC_LEGAL_VAT_ID?.trim() ?? '',
}

export const LAST_LEGAL_UPDATE = '7 novembre 2026'
