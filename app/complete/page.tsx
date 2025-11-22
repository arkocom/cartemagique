'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useAppStore } from '@/stores/appStore'

// --- DONNÉES INTÉGRÉES (Pour éviter les bugs d'import) ---
const SAFE_THEMES = [
  { name: 'Celestial Dreams', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=600' },
  { name: 'Enchanted Garden', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600' },
  { name: 'Ocean Whispers',   image: 'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&w=600' },
  { name: 'Fireside Warmth',  image: 'https://images.unsplash.com/photo-1542293787938-c9e299b880cc?auto=format&fit=crop&w=600' },
  { name: 'Crystal Frost',    image: 'https://images.unsplash.com/photo-1489674267075-cee793167910?auto=format&fit=crop&w=600' },
  { name: 'Golden Sunset',    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?auto=format&fit=crop&w=600' }
]

// Chargement sécurisé de l'éditeur
const CanvasEditor = dynamic(() => import('@/components/canvas-editor'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black/90 flex items-center justify-center text-white">Chargement de l'atelier...</div>
})

export default function CompletePage() {
  const [showEditor, setShowEditor] = useState(false)
  const { selectedTheme, setSelectedTheme } = useAppStore()

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white pb-20">
      <nav className="p-4 glass sticky top-0 z-40 flex justify-between items-center border-b border-white/10">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <span>✨</span> CarteMagique
        </Link>
        <div className="flex gap-4">
          <Link href="/gallery" className="py-2 px-4 text-sm opacity-80 hover:opacity-100">Galerie</Link>
          <button onClick={() => setShowEditor(true)} className="bg-purple-600 px-6 py-2 rounded-full font-bold hover:bg-purple-500 transition-colors">
            Créer
          </button>
        </div>
      </nav>

      {/* Hero Rapide */}
      <section className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Choisissez votre univers</h1>
        <p className="text-gray-400 mb-12">Cliquez sur une image pour commencer la création.</p>
        
        {/* Carrousel Manuel Intégré */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {SAFE_THEMES.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -10 }}
              onClick={() => { setSelectedTheme(t.name); setShowEditor(true) }}
              className="w-64 h-80 rounded-2xl overflow-hidden cursor-pointer relative group shadow-2xl border border-white/10"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${t.image})` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-end p-6">
                <span className="font-bold text-lg">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {showEditor && (
          <CanvasEditor 
            isOpen={showEditor} 
            onClose={() => setShowEditor(false)}
            theme={selectedTheme || 'Celestial Dreams'}
          />
        )}
      </AnimatePresence>
    </div>
  )
}