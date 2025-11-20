'use client'

import { motion } from 'framer-motion'
import { useAppStore } from '@/stores/appStore'

interface ThemeCarouselProps {
  onThemeSelect?: () => void
}

const themes = [
  {
    id: 'celestial',
    name: 'Celestial Dreams',
    description: 'Bleus profonds et ors brillants avec des particules d\'étoiles scintillantes',
    colors: ['bg-indigo-500', 'bg-purple-500', 'bg-pink-500'],
    emoji: '🌟',
    particle: '✨ Étoiles',
    gradient: 'from-indigo-900 via-purple-900 to-pink-900'
  },
  {
    id: 'garden',
    name: 'Enchanted Garden',
    description: 'Pastels doux avec des pétales de fleurs qui dansent dans l\'air',
    colors: ['bg-green-400', 'bg-pink-400', 'bg-purple-400'],
    emoji: '🌸',
    particle: '🌸 Pétales',
    gradient: 'from-green-200 via-pink-200 to-purple-200'
  },
  {
    id: 'ocean',
    name: 'Ocean Whispers',
    description: 'Bleus océaniques avec des bulles qui flottent gracieusement',
    colors: ['bg-blue-400', 'bg-cyan-400', 'bg-teal-400'],
    emoji: '🌊',
    particle: '💧 Bulles',
    gradient: 'from-blue-400 via-cyan-400 to-teal-400'
  },
  {
    id: 'fireside',
    name: 'Fireside Warmth',
    description: 'Oranges chaleureux avec des braises incandescentes',
    colors: ['bg-orange-500', 'bg-red-500', 'bg-yellow-500'],
    emoji: '🔥',
    particle: '🔥 Braises',
    gradient: 'from-orange-500 via-red-500 to-yellow-500'
  },
  {
    id: 'crystal',
    name: 'Crystal Frost',
    description: 'Bleus glacés avec des flocons de neige cristallins',
    colors: ['bg-blue-200', 'bg-cyan-200', 'bg-white'],
    emoji: '❄️',
    particle: '❄️ Flocons',
    gradient: 'from-blue-100 via-cyan-100 to-white'
  },
  {
    id: 'sunset',
    name: 'Golden Sunset',
    description: 'Dégradés chauds avec des rayons de lumière dorée',
    colors: ['bg-yellow-400', 'bg-orange-400', 'bg-pink-400'],
    emoji: '🌅',
    particle: '☀️ Rayons',
    gradient: 'from-yellow-400 via-orange-400 to-pink-400'
  }
]

export default function ThemeCarousel({ onThemeSelect }: ThemeCarouselProps) {
  const { setSelectedTheme } = useAppStore()

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId)
    onThemeSelect?.()
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {themes.map((theme, index) => (
        <motion.div
          key={theme.id}
          className="theme-card glass-card rounded-2xl p-6 cursor-pointer"
          onClick={() => handleThemeSelect(theme.id)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative mb-4">
            <div className={`h-48 bg-gradient-to-br ${theme.gradient} rounded-xl overflow-hidden relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">{theme.emoji}</div>
                  <div className="font-semibold text-lg">{theme.name}</div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <h3 className="text-white font-semibold text-lg mb-2">{theme.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{theme.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {theme.colors.map((color, colorIndex) => (
                <div key={colorIndex} className={`w-4 h-4 ${color} rounded-full`}></div>
              ))}
            </div>
            <span className="text-xs text-gray-500">{theme.particle}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}