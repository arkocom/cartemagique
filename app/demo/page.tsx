'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '@/stores/appStore'

export default function DemoPage() {
  const [selectedTheme, setSelectedTheme] = useState('celestial')
  const { setSelectedTheme: setGlobalTheme } = useAppStore()

  const themes = [
    {
      id: 'celestial',
      name: 'Celestial Dreams',
      gradient: 'from-indigo-900 via-purple-900 to-pink-900',
      emoji: '🌟'
    },
    {
      id: 'garden',
      name: 'Enchanted Garden',
      gradient: 'from-green-200 via-pink-200 to-purple-200',
      emoji: '🌸'
    },
    {
      id: 'ocean',
      name: 'Ocean Whispers',
      gradient: 'from-blue-400 via-cyan-400 to-teal-400',
      emoji: '🌊'
    }
  ]

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId)
    setGlobalTheme(themeId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">✨</span>
              </div>
              <span className="font-display text-xl font-semibold text-white">CarteMagique.io</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
              <a href="/complete" className="text-gray-300 hover:text-white transition-colors">Application</a>
              <a href="/gallery" className="text-gray-300 hover:text-white transition-colors">Galerie</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Démo <span className="gradient-text">CarteMagique.io</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez les fonctionnalités principales de notre application
            </p>
          </motion.div>

          {/* Theme Selector Demo */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Sélecteur de thèmes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {themes.map((theme) => (
                <motion.div
                  key={theme.id}
                  className={`glass-card rounded-2xl p-6 cursor-pointer ${
                    selectedTheme === theme.id ? 'ring-2 ring-purple-500' : ''
                  }`}
                  onClick={() => handleThemeSelect(theme.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`h-32 bg-gradient-to-br ${theme.gradient} rounded-xl mb-4 flex items-center justify-center`}>
                    <span className="text-4xl">{theme.emoji}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{theme.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {theme.id === 'celestial' && 'Étoiles scintillantes et cosmos mystérieux'}
                    {theme.id === 'garden' && 'Jardin féerique avec pétales colorés'}
                    {theme.id === 'ocean' && 'Vagues océaniques et bulles aquatiques'}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card Preview Demo */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Aperçu de la carte</h2>
            <div className="glass-card rounded-3xl p-8 max-w-md mx-auto">
              <div className={`h-48 bg-gradient-to-br ${themes.find(t => t.id === selectedTheme)?.gradient} rounded-xl mb-6 flex items-center justify-center`}>
                <span className="text-6xl">{themes.find(t => t.id === selectedTheme)?.emoji}</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-4 text-center">
                Joyeux {themes.find(t => t.id === selectedTheme)?.name} !
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Cette carte magique vous est offerte avec toute mon affection. 
                Que cette journée soit remplie de bonheur et de moments inoubliables.
              </p>
              <div className="text-center">
                <button className="btn-primary px-6 py-2 rounded-full text-white font-medium">
                  Personnaliser cette carte
                </button>
              </div>
            </div>
          </motion.div>

          {/* Features Demo */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Assistant IA</h3>
              <p className="text-gray-400 mb-4">
                Générez automatiquement des messages personnalisés selon le destinataire et l'occasion.
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Tester l'assistant →
              </button>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl">🎵</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Musique & Effets</h3>
              <p className="text-gray-400 mb-4">
                Ajoutez une ambiance sonore avec nos playlists thématiques et effets sonores.
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Écouter un aperçu →
              </button>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl">💾</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Export Multiple</h3>
              <p className="text-gray-400 mb-4">
                Exportez vos créations en PNG, JPG, GIF ou MP4 avec qualité professionnelle.
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Voir les formats →
              </button>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-xl">🎭</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Mode Surprise</h3>
              <p className="text-gray-400 mb-4">
                Programmez l'envoi de vos cartes par email ou WhatsApp à une date précise.
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Programmer un envoi →
              </button>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a 
              href="/complete"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow inline-block"
            >
              ✨ Accéder à l'application complète
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}