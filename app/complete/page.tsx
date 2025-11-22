// app/complete/page.tsx
'use client'

import { useState, useEffect } from 'react'
import AudioPlayer from '@/components/audio-player'
import SurpriseModal from '@/components/surprise-modal'
import CanvasEditor from '@/components/canvas-editor'
import ExportModal from '@/components/export-modal'
import { useAppStore } from '@/stores/appStore'

export default function CompletePage() {
  const { selectedThemeId } = useAppStore()
  const [isExportOpen, setIsExportOpen] = useState(false)
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false)

  // Simule une carte prête dès le chargement
  useEffect(() => {
    if (!selectedThemeId) {
      // Optionnel : définir un thème par défaut
      // useAppStore.getState().setSelectedThemeId('noel-1')
    }
  }, [selectedThemeId])

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Éditeur principal */}
      <CanvasEditor isOpen={true} onClose={() => {}} />

      {/* Boutons flottants */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-40">
        <button
          onClick={() => setIsExportOpen(true)}
          className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
        >
          📥 Exporter
        </button>
        <button
          onClick={() => setIsSurpriseOpen(true)}
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-medium backdrop-blur"
        >
          🎁 Surprise
        </button>
      </div>

      {/* Composants modaux et audio */}
      <AudioPlayer />
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        themeId={selectedThemeId}
      />
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </div>
  )
}
