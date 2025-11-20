'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ExportModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ExportModal({ isOpen, onClose }: ExportModalProps) {
  const [selectedFormat, setSelectedFormat] = useState('png')
  const [isExporting, setIsExporting] = useState(false)

  const formats = [
    { id: 'png', name: 'PNG', description: 'Qualité haute résolution', icon: '📷', color: 'bg-blue-500' },
    { id: 'jpg', name: 'JPG', description: 'Compression optimisée', icon: '🖼️', color: 'bg-green-500' },
    { id: 'gif', name: 'GIF', description: 'Animations supportées', icon: '🎬', color: 'bg-purple-500' },
    { id: 'mp4', name: 'MP4', description: 'Vidéo avec musique', icon: '🎥', color: 'bg-red-500' }
  ]

  const handleExport = async () => {
    setIsExporting(true)
    
    // Simulation de l'export
    setTimeout(() => {
      alert(`Export en ${selectedFormat.toUpperCase()} réussi ! 📥`)
      setIsExporting(false)
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
        className="glass-card rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white">Exporter la carte</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Choisissez le format</h4>
            <div className="grid grid-cols-2 gap-4">
              {formats.map((format) => (
                <motion.button
                  key={format.id}
                  onClick={() => setSelectedFormat(format.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedFormat === format.id
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 ${format.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                      <span className="text-2xl">{format.icon}</span>
                    </div>
                    <h5 className="text-white font-semibold mb-1">{format.name}</h5>
                    <p className="text-gray-400 text-sm">{format.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Options d'export</h4>
            
            <div className="flex items-center justify-between p-4 glass rounded-lg">
              <div>
                <span className="text-white font-medium">Qualité maximale</span>
                <p className="text-gray-400 text-sm">Meilleure qualité d'image</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-purple-600 rounded" />
            </div>
            
            <div className="flex items-center justify-between p-4 glass rounded-lg">
              <div>
                <span className="text-white font-medium">Inclure la musique</span>
                <p className="text-gray-400 text-sm">Ajouter la bande sonore</p>
              </div>
              <input type="checkbox" className="w-5 h-5 text-purple-600 rounded" />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 glass px-6 py-3 rounded-lg text-white font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Annuler
            </button>
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="flex-1 btn-primary px-6 py-3 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Export...</span>
                </div>
              ) : (
                `Exporter en ${selectedFormat.toUpperCase()}`
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}