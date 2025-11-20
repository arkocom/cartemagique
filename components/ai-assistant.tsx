'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
  onGenerate: (message: string) => void
}

export default function AIAssistant({ isOpen, onClose, onGenerate }: AIAssistantProps) {
  const [recipient, setRecipient] = useState('')
  const [occasion, setOccasion] = useState('')
  const [tone, setTone] = useState('amical')
  const [isGenerating, setIsGenerating] = useState(false)

  const occasions = [
    'Anniversaire', 'Noël', 'Nouvel An', 'Saint-Valentin', 
    'Fête des Mères', 'Fête des Pères', 'Mariage', 'Départ', 
    'Remerciement', 'Félicitations', 'Bon rétablissement'
  ]

  const tones = [
    { value: 'formel', label: 'Formel' },
    { value: 'amical', label: 'Amical' },
    { value: 'amoureux', label: 'Amoureux' },
    { value: 'drôle', label: 'Drôle' },
    { value: 'inspirant', label: 'Inspirant' },
    { value: 'émouvant', label: 'Émouvant' }
  ]

  const handleGenerate = async () => {
    if (!recipient || !occasion) return
    
    setIsGenerating(true)
    
    // Simulation de génération IA
    setTimeout(() => {
      const messages = [
        `Cher/Chère ${recipient},\n\nPour cette occasion spéciale de ${occasion.toLowerCase()}, je vous souhaite tout le bonheur du monde. Que cette journée soit remplie de moments magiques et de souvenirs inoubliables.\n\nAvec toute mon affection,\n[Votre nom]`,
        
        `${recipient},\n\n${occasion} est le moment parfait pour vous dire à quel point vous comptez pour moi. Votre présence illumine nos vies et votre bonheur est précieux.\n\nQue cette célébration soit aussi magnifique que vous !\n\nBien à vous`,
        
        `Mon cher/Ma chère ${recipient},\n\nEn cette journée de ${occasion}, je pense à vous avec beaucoup d'émotion. Les moments passés ensemble sont des trésors que je chéris profondément.\n\nJe vous souhaite une journée remplie d'amour, de rires et de magie.\n\nTendrement`,
        
        `Cher/Chère ${recipient},\n\nLe ${occasion} approche et avec lui l'opportunité de célébrer la personne exceptionnelle que vous êtes. Votre générosité, votre gentillesse et votre positivité inspirent tous ceux qui vous entourent.\n\nPuisse cette journée vous apporter autant de joie que vous en apportez aux autres !\n\nAmicalement`,
        
        `${recipient},\n\nPour ${occasion}, je vous envoie mes meilleurs vœux accompagnés de cette carte magique. Que cette célébration marque le début d'une nouvelle année remplie de bonheur, de réussite et de moments inoubliables.\n\nAvec toute mon amitié,\n[Votre nom]`
      ]
      
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      onGenerate(randomMessage)
      setIsGenerating(false)
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white">Assistant IA</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Destinataire
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Nom du destinataire"
              className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Occasion
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Sélectionnez une occasion</option>
              {occasions.map((occ) => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Ton du message
            </label>
            <div className="grid grid-cols-2 gap-2">
              {tones.map((toneOption) => (
                <button
                  key={toneOption.value}
                  onClick={() => setTone(toneOption.value)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    tone === toneOption.value
                      ? 'bg-purple-600 text-white'
                      : 'glass text-gray-300 hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {toneOption.label}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={!recipient || !occasion || isGenerating}
            className="w-full btn-primary px-6 py-3 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Génération en cours...</span>
              </div>
            ) : (
              '🤖 Générer le message'
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}