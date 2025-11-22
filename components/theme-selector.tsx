// components/theme-selector.tsx
'use client'

import { useState } from 'react'
import { themes } from '@/lib/themes'
import { useAppStore } from '@/stores/appStore'

type Category = 'noel' | 'nouvel-an' | 'hiver'

const categoryLabels: Record<Category, string> = {
  noel: 'Noël 🎄',
  'nouvel-an': 'Nouvel An 🥂',
  hiver: 'Hiver ❄️',
}

const categoryColors: Record<Category, string> = {
  noel: 'text-amber-400 border-amber-400',
  'nouvel-an': 'text-blue-400 border-blue-400',
  hiver: 'text-cyan-400 border-cyan-400',
}

export default function ThemeSelector() {
  const [activeCategory, setActiveCategory] = useState<Category>('noel')
  const selectedThemeId = useAppStore((state) => state.selectedThemeId)
  const setSelectedThemeId = useAppStore((state) => state.setSelectedThemeId)

  const filteredThemes = themes.filter((theme) => theme.id.startsWith(activeCategory))

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Onglets */}
      <div className="flex gap-6 border-b border-gray-700 pb-4 mb-6 overflow-x-auto">
        {Object.entries(categoryLabels).map(([key, label]) => {
          const cat = key as Category
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap font-medium pb-2 px-2 border-b-2 transition-colors ${
                isActive
                  ? `text-white ${categoryColors[cat]}`
                  : 'text-gray-500 hover:text-gray-300 border-transparent'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Grille de thèmes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {filteredThemes.map((theme) => {
          const isSelected = selectedThemeId === theme.id
          return (
            <div
              key={theme.id}
              onClick={() => setSelectedThemeId(theme.id)}
              className={`cursor-pointer group rounded-xl overflow-hidden border-2 transition-all ${
                isSelected
                  ? 'border-amber-500 ring-2 ring-amber-500/30'
                  : 'border-transparent hover:border-gray-600'
              }`}
            >
              <div className="relative aspect-[4/5] bg-slate-800">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                )}
              </div>
              <div className="p-2 text-center">
                <p className="text-xs text-gray-300 truncate">{theme.name}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Indicateur de sélection */}
      <div className="mt-6 text-center text-sm text-gray-400">
        Cliquez sur un fond pour l’appliquer à votre carte.
      </div>
    </div>
  )
}
