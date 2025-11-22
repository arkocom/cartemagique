// app/functional/page.tsx
'use client'

import { useState } from 'react'
import { useAppStore } from '@/stores/appStore'
import ThemeSelector from '@/components/theme-selector'
import CanvasEditor from '@/components/canvas-editor'
import ExportModal from '@/components/export-modal'

export default function FunctionalApp() {
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isExportOpen, setIsExportOpen] = useState(false)
  const { selectedThemeId } = useAppStore()

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="py-6 px-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-center">✨ Joyeux Noël de la part de…</h1>
      </header>

      <main className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Choisissez votre fond</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">30 modèles festifs pour célébrer la fin d’année.</p>
        </div>

        <ThemeSelector />

        <div className="text-center mt-10">
          <button
            onClick={() => setIsEditorOpen(true)}
            disabled={!selectedThemeId}
            className={`px-8 py-4 rounded-full font-bold text-lg ${
              selectedThemeId
                ? 'bg-gradient-to-r from-red-600 to-amber-600 hover:scale-[1.02] text-white'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            } transition-all shadow-lg`}
          >
            ✨ Créer ma carte
          </button>
        </div>
      </main>

      <CanvasEditor isOpen={isEditorOpen} onClose={() => setIsEditorOpen(false)} />
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} themeId={selectedThemeId} />
    </div>
  )
}