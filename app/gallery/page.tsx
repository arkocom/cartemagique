'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { themes } from '@/lib/themes' // On utilise la source de vérité

// On construit la galerie à partir des thèmes existants pour éviter les erreurs
const GALLERY_ITEMS = [
  { id: 1, title: "Vœux Célestes", author: "Marie L.", likes: 124, category: "Anniversaire", image: themes[0].image },
  { id: 2, title: "Merci Maman", author: "Thomas P.", likes: 89, category: "Fête", image: themes[1].image },
  { id: 3, title: "Zen Attitude", author: "Sarah J.", likes: 256, category: "Bien-être", image: themes[2].image },
  { id: 4, title: "Noël au coin du feu", author: "Alex M.", likes: 450, category: "Fête", image: themes[3].image },
  { id: 5, title: "Hiver Magique", author: "Sophie K.", likes: 300, category: "Saison", image: themes[4].image },
  { id: 6, title: "Invitation Dorée", author: "Lucas D.", likes: 92, category: "Anniversaire", image: themes[5].image },
]

const CATEGORIES = ["Tout", "Anniversaire", "Fête", "Saison", "Bien-être"]

export default function GalleryPage() {
  const [filter, setFilter] = useState("Tout")

  const filteredItems = filter === "Tout" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter)

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-20 font-sans">
      <nav className="glass sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/complete" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors font-medium">
                <span>←</span> Retour à l'atelier
            </Link>
            <h1 className="font-display font-bold text-xl hidden sm:block">Galerie</h1>
            <div className="w-20"></div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 pt-12">
        <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold mb-4">Inspiration</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm transition-all border ${filter === cat ? 'bg-purple-600 border-purple-500 text-white' : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-400'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
                <motion.div layout key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-2xl overflow-hidden group border border-white/10">
                    <div className="h-56 relative bg-gray-800">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                            <Link href="/complete" className="px-6 py-3 bg-white text-purple-900 font-bold rounded-full shadow-xl">Utiliser 🎨</Link>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-white">{item.title}</h3>
                        <p className="text-sm text-gray-400">par {item.author}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </main>
    </div>
  )
}
