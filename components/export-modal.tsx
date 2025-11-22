// components/export-modal.tsx
'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import html2canvas from 'html2canvas'
import { useAppStore } from '@/stores/appStore'
import { themes } from '@/lib/themes'

export default function ExportModal({
  isOpen,
  onClose,
  themeId,
}: {
  isOpen: boolean
  onClose: () => void
  themeId: string
}) {
  const [isExporting, setIsExporting] = useState(false)
  const exportPreviewRef = useRef<HTMLDivElement>(null)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      // Crée un élément temporaire pour le rendu
      const container = document.createElement('div')
      container.style.width = '800px'
      container.style.height = '1100px'
      container.style.position = 'absolute'
      container.style.left = '-9999px'
      document.body.appendChild(container)

      const theme = themes.find(t => t.id === themeId) || themes[0]
      const img = new Image()
      img.src = theme.image
      img.style.width = '100%'
      img.style.height = '100%'
      img.style.objectFit = 'cover'
      container.appendChild(img)

      // Attendre le chargement de l'image
      await new Promise((resolve) => (img.onload = resolve))

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      })

      const link = document.createElement('a')
      link.download = `carte-voeux-${themeId}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()

      document.body.removeChild(container)
      onClose()
    } catch (error) {
      console.error('Export failed:', error)
      alert('❌ Échec de l’export. Veuillez réessayer.')
    } finally {
      setIsExporting(false)
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-800/95 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md border border-amber-500/30"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-center text-white mb-2">🎁 Votre carte est prête !</h3>
        <p className="text-gray-400 text-center mb-6">
          Téléchargez votre carte de vœux en haute qualité (PNG).
        </p>

        <div className="space-y-4">
          <button
            onClick={handleExport}
            disabled={isExporting}
            className={`w-full py-3 rounded-xl font-semibold transition-all ${
              isExporting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white'
            }`}
          >
            {isExporting ? (
              <span>📥 Export en cours…</span>
            ) : (
              'Télécharger en PNG'
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 text-gray-400 hover:text-white font-medium"
          >
            ← Retour à l’édition
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
