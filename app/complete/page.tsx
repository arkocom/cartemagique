'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/hero-section'
import ThemeCarousel from '@/components/theme-carousel'
import { useAppStore } from '@/stores/appStore'

const CanvasEditor = dynamic(() => import('@/components/canvas-editor'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black text-white flex items-center justify-center">Chargement de l'éditeur...</div>
})

export default function CompletePage() {
  const [showEditor, setShowEditor] = useState(false)
  const { selectedThemeName, setSelectedThemeName } = useAppStore()

  const handleThemeSelect = (name: string) => {
    setSelectedThemeName(name)
    setShowEditor(true)
  }

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white">
      <nav className="p-4 border-b border-white/10 flex justify-between items-center glass sticky top-0 z-40">
        <h1 className="text-xl font-bold">CarteMagique.io</h1>
        <button onClick={() => setShowEditor(true)} className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-bold">Créer</button>
      </nav>

      <HeroSection onCreateCard={() => setShowEditor(true)} />

      <section className="py-10">
        <h2 className="text-center text-3xl font-bold mb-8">Nos Thèmes Magiques</h2>
        <ThemeCarousel onThemeSelect={handleThemeSelect} />
      </section>

      {showEditor && (
        <CanvasEditor 
          isOpen={showEditor} 
          onClose={() => setShowEditor(false)}
          theme={selectedThemeName}
        />
      )}
    </div>
  )
}