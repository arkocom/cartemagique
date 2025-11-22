// components/surprise-modal.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '@/stores/appStore'
import { themes } from '@/lib/themes'

export default function SurpriseModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { selectedThemeId, elements } = useAppStore()
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSending(true)

    // ⚠️ Simuler l’envoi (en vrai, tu utiliserais une API Next.js + Resend/Mailgun)
    setTimeout(() => {
      setSent(true)
      setIsSending(false)
      // Réinitialiser après 3s
      setTimeout(() => {
        setSent(false)
        onClose()
      }, 3000)
    }, 1500)
  }

  if (!isOpen) return null

  const theme = themes.find(t => t.id === selectedThemeId)?.name || 'Ma carte'

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-800/95 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-white mb-2">🎁 Envoyer en surprise !</h3>
        <p className="text-gray-400 mb-4">
          Votre carte “{theme}” sera envoyée par email à la personne de votre choix.
        </p>

        {sent ? (
          <div className="text-center py-4">
            <div className="text-green-400 text-2xl mb-2">✅</div>
            <p className="text-white">Carte envoyée avec succès !</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse email du destinataire"
              className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 text-gray-400 hover:text-white"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSending}
                className={`flex-1 py-2 rounded-lg font-medium ${
                  isSending
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-600 to-red-600 text-white'
                }`}
              >
                {isSending ? 'Envoi...' : 'Envoyer ✨'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}
