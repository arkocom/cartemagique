'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { themes } from '@/lib/themes'

interface ThemeCarouselProps {
  onThemeSelect: (themeName: string) => void
}

export default function ThemeCarousel({ onThemeSelect }: ThemeCarouselProps) {
  return (
    <div className="w-full overflow-x-auto pb-12 pt-4 px-4">
      <div className="flex gap-6 justify-center min-w-max mx-auto">
        {themes.map((theme) => (
          <motion.div
            key={theme.id}
            className="relative group cursor-pointer w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            whileHover={{ y: -10 }}
            onClick={() => onThemeSelect(theme.name)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${theme.image})` }}
            />
            <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white">{theme.name}</h3>
              <button className="mt-2 py-2 bg-white/20 backdrop-blur rounded text-white text-sm">Choisir</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}