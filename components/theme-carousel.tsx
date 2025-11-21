'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { themes } from '@/lib/themes' // Import du fichier valide

interface ThemeCarouselProps {
  onThemeSelect: (themeName: string) => void
}

export default function ThemeCarousel({ onThemeSelect }: ThemeCarouselProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="w-full overflow-x-auto pb-12 pt-4 px-4 hide-scrollbar">
      <div className="flex gap-6 justify-center min-w-max mx-auto">
        {themes.map((theme) => (
          <motion.div
            key={theme.id}
            className="relative group cursor-pointer"
            onHoverStart={() => setHoveredId(theme.id)}
            onHoverEnd={() => setHoveredId(null)}
            onClick={() => onThemeSelect(theme.name)} // On passe le NOM au store
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-2xl relative border border-white/20 bg-gray-800">
              {/* Image de fond */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${theme.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="text-4xl">✨</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{theme.name}</h3>
                  <p className="text-white/70 text-xs mb-4 line-clamp-2">{theme.description}</p>
                  <button className="w-full py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 backdrop-blur-md">
                    Choisir
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}