'use client'

import { motion } from 'framer-motion'

interface CanvasEditorProps {
  isOpen: boolean
  onClose: () => void
  theme?: string
}

export default function CanvasEditor({ isOpen, onClose, theme }: CanvasEditorProps) {
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
        className="glass-card rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white">Éditeur de Cartes</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎨</div>
          <h4 className="text-xl font-semibold text-white mb-2">
            Éditeur en cours de développement
          </h4>
          <p className="text-gray-400 mb-6">
            L'éditeur complet sera bientôt disponible avec toutes les fonctionnalités premium.
          </p>
          
          {theme && (
            <div className="mb-6">
              <p className="text-purple-400 mb-2">Thème sélectionné :</p>
              <span className="text-white font-semibold">{theme}</span>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <button 
              onClick={() => alert('Sélection de thèmes à venir !')}
              className="glass px-6 py-3 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all"
            >
              🎨 Choisir un thème
            </button>
            <button 
              onClick={() => alert('Assistant IA à venir !')}
              className="glass px-6 py-3 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all"
            >
              🤖 Assistant IA
            </button>
            <button 
              onClick={() => alert('Musique à venir !')}
              className="glass px-6 py-3 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all"
            >
              🎵 Ajouter musique
            </button>
            <button 
              onClick={() => alert('Export à venir !')}
              className="glass px-6 py-3 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all"
            >
              💾 Exporter carte
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}