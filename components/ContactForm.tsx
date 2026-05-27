'use client'

// components/ContactForm.tsx
// Form di contatto con glassmorphism, validazione base e gestione stato
// TODO: collegare il form a un backend email/API.
// Possibili soluzioni: Resend, Nodemailer, Formspree, Netlify Forms o API custom.
// Lead da inviare a info@locario.net.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

interface FormState {
  nome: string
  cognome: string
  email: string
  telefono: string
  nomeAttivita: string
  tipoAttivita: string
  sitoWeb: string
  messaggio: string
  privacy: boolean
}

const initialState: FormState = {
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  nomeAttivita: '',
  tipoAttivita: '',
  sitoWeb: '',
  messaggio: '',
  privacy: false,
}

const tipiAttivita = [
  'Ristorante',
  'Pizzeria',
  'Parrucchiere',
  'Barber Shop',
  'Centro Estetico',
  'Spa',
  'Studio Professionale',
  'Altro',
]

// Stile comune per gli input
const inputStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  color: 'white',
  borderRadius: '0.625rem',
}

const inputFocusStyle = {
  outline: 'none',
  border: '1px solid rgba(108, 99, 255, 0.6)',
  background: 'rgba(108, 99, 255, 0.06)',
}

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const getInputStyle = (fieldName: string) => ({
    ...inputStyle,
    ...(focusedField === fieldName ? inputFocusStyle : {}),
    transition: 'all 0.15s ease',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: sostituire con chiamata API reale
    console.log('Form data:', form)

    // Simulazione invio
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert('Grazie! Ti contatteremo presto a ' + form.email)
    setForm(initialState)
    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-8 lg:p-10"
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        {/* Nome + Cognome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-white mb-2"
            >
              Nome <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              onFocus={() => setFocusedField('nome')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 text-sm"
              style={getInputStyle('nome')}
              placeholder="Mario"
            />
          </div>
          <div>
            <label
              htmlFor="cognome"
              className="block text-sm font-medium text-white mb-2"
            >
              Cognome <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              id="cognome"
              name="cognome"
              type="text"
              value={form.cognome}
              onChange={handleChange}
              onFocus={() => setFocusedField('cognome')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 text-sm"
              style={getInputStyle('cognome')}
              placeholder="Rossi"
            />
          </div>
        </div>

        {/* Email + Telefono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 text-sm"
              style={getInputStyle('email')}
              placeholder="mario@ristorante.it"
            />
          </div>
          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-white mb-2"
            >
              Telefono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              onFocus={() => setFocusedField('telefono')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 text-sm"
              style={getInputStyle('telefono')}
              placeholder="+39 333 000 0000"
            />
          </div>
        </div>

        {/* Nome attività + Tipo attività */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label
              htmlFor="nomeAttivita"
              className="block text-sm font-medium text-white mb-2"
            >
              Nome attività <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <input
              id="nomeAttivita"
              name="nomeAttivita"
              type="text"
              value={form.nomeAttivita}
              onChange={handleChange}
              onFocus={() => setFocusedField('nomeAttivita')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 text-sm"
              style={getInputStyle('nomeAttivita')}
              placeholder="Ristorante Da Mario"
            />
          </div>
          <div>
            <label
              htmlFor="tipoAttivita"
              className="block text-sm font-medium text-white mb-2"
            >
              Tipo attività <span style={{ color: '#EF4444' }}>*</span>
            </label>
            <select
              id="tipoAttivita"
              name="tipoAttivita"
              value={form.tipoAttivita}
              onChange={handleChange}
              onFocus={() => setFocusedField('tipoAttivita')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 py-3 text-sm cursor-pointer"
              style={getInputStyle('tipoAttivita')}
            >
              <option value="" style={{ background: '#0B1020' }}>
                Seleziona...
              </option>
              {tipiAttivita.map((tipo) => (
                <option key={tipo} value={tipo} style={{ background: '#0B1020' }}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sito web */}
        <div className="mb-5">
          <label
            htmlFor="sitoWeb"
            className="block text-sm font-medium text-white mb-2"
          >
            Sito web o pagina social
          </label>
          <input
            id="sitoWeb"
            name="sitoWeb"
            type="url"
            value={form.sitoWeb}
            onChange={handleChange}
            onFocus={() => setFocusedField('sitoWeb')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-3 text-sm"
            style={getInputStyle('sitoWeb')}
            placeholder="https://www.tuoristorante.it o instagram.com/tuolocale"
          />
        </div>

        {/* Messaggio */}
        <div className="mb-6">
          <label
            htmlFor="messaggio"
            className="block text-sm font-medium text-white mb-2"
          >
            Messaggio <span style={{ color: '#EF4444' }}>*</span>
          </label>
          <textarea
            id="messaggio"
            name="messaggio"
            value={form.messaggio}
            onChange={handleChange}
            onFocus={() => setFocusedField('messaggio')}
            onBlur={() => setFocusedField(null)}
            required
            rows={4}
            className="w-full px-4 py-3 text-sm resize-none"
            style={{ ...getInputStyle('messaggio'), borderRadius: '0.625rem' }}
            placeholder="Raccontaci della tua attività e cosa vorresti migliorare nella gestione delle prenotazioni..."
          />
        </div>

        {/* Privacy checkbox */}
        <div className="flex items-start gap-3 mb-8">
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={form.privacy}
              onChange={handleChange}
              required
              className="w-5 h-5 rounded cursor-pointer"
              style={{
                accentColor: '#6C63FF',
                background: 'rgba(255,255,255,0.05)',
              }}
            />
          </div>
          <label htmlFor="privacy" className="text-sm cursor-pointer" style={{ color: '#A1A1AA' }}>
            Ho letto e accetto la{' '}
            <a href="/privacy" className="underline hover:text-white transition-colors" style={{ color: '#6C63FF' }}>
              Privacy Policy
            </a>{' '}
            e acconsento al trattamento dei miei dati per essere contattato da Locario.{' '}
            <span style={{ color: '#EF4444' }}>*</span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || !form.privacy}
          className="w-full flex items-center justify-center gap-3 py-4 text-base font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          style={{
            background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
            boxShadow: '0 4px 20px rgba(108, 99, 255, 0.3)',
          }}
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Invio in corso...
            </>
          ) : (
            <>
              Richiedi informazioni
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
