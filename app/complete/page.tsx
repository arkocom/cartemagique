'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '@/components/hero-section'
import ThemeCarousel from '@/components/theme-carousel'
import CanvasEditor from '@/components/canvas-editor'
import AIAssistant from '@/components/ai-assistant'
import ExportModal from '@/components/export-modal'
import { useAppStore } from '@/stores/appStore'

export default function CompletePage() {
  const [showEditor, setShowEditor] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const { selectedTheme } = useAppStore()

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
              <button 
                onClick={() => setShowAI(true)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Assistant IA
              </button>
              <button 
                onClick={() => setShowEditor(true)}
                className="btn-primary px-6 py-2 rounded-full text-white font-medium"
              >
                Créer une carte
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onCreateCard={() => setShowEditor(true)} />

      {/* Theme Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx.auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Choisissez votre <span className="gradient-text">thème magique</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx.auto">
              Chaque thème offre une expérience unique avec ses propres animations et effets
            </p>
          </div>
          
          <ThemeCarousel onThemeSelect={() => setShowEditor(true)} />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx.auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Fonctionnalités <span className="gradient-text">premium</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx.auto">
              Tout ce dont vous avez besoin pour créer des cartes exceptionnelles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎨', title: 'Éditeur Visuel', desc: 'Interface intuitive avec glisser-déposer' },
              { icon: '🤖', title: 'Assistant IA', desc: 'Générez des messages personnalisés' },
              { icon: '🎵', title: 'Audio & Musique', desc: 'Musique de fond et effets sonores' },
              { icon: '💾', title: 'Export Multiple', desc: 'PNG, JPG, GIF, MP4 en qualité pro' },
              { icon: '🎭', title: 'Mode Surprise', desc: 'Programmez l\'envoi de vos cartes' },
              { icon: '🌐', title: 'Galerie Communautaire', desc: 'Partagez et remixez des cartes' },
              { icon: '📱', title: 'App Mobile', desc: 'PWA installable avec offline' },
              { icon: '⚡', title: 'Performance', desc: 'Chargement ultra-rapide < 1.8s' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card glass-card rounded-2xl p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx.auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery Preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx.auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Galerie <span className="gradient-text">communautaire</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx.auto">
              Découvrez les créations magnifiques de notre communauté
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Anniversaire Élégant', author: '@marie_design', rating: 4.8, emoji: '🎂' },
              { title: 'Nouvel An Nature', author: '@nature_lover', rating: 4.9, emoji: '🌿' },
              { title: 'Amour Romantique', author: '@romantic_soul', rating: 5.0, emoji: '💕' }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">{card.emoji}</div>
                    <div className="font-semibold">{card.title}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{card.title}</span>
                    <div className="flex space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-gray-400">{card.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">Carte magnifique avec thème personnalisé</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">par {card.author}</span>
                    <button className="text-purple-400 hover:text-purple-300 text-sm">Remixer 🎨</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => alert('Galerie complète à venir !')}
              className="btn-primary px-8 py-3 rounded-full text-white font-semibold"
            >
              Voir toute la galerie
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx.auto text-center">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à créer votre première carte magique ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx.auto">
              Rejoignez des milliers de créateurs et donnez vie à vos messages 
              avec des cartes uniques et personnalisées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowEditor(true)}
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow"
              >
                ✨ Commencer maintenant
              </button>
              <button 
                onClick={() => setShowAI(true)}
                className="glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all"
              >
                🤖 Assistant IA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx.auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">✨</span>
            </div>
            <span className="font-display text-xl font-semibold text-white">CarteMagique.io</span>
          </div>
          <p className="text-gray-400 mb-4">
            Créez des cartes magiques avec des animations, de la musique et des effets spéciaux
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 CarteMagique.io - Tous droits réservés
          </p>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {showEditor && (
          <CanvasEditor 
            isOpen={showEditor} 
            onClose={() => setShowEditor(false)}
            theme={selectedTheme}
          />
        )}
        
        {showAI && (
          <AIAssistant 
            isOpen={showAI} 
            onClose={() => setShowAI(false)}
            onGenerate={(message) => {
              console.log('Message généré:', message)
              setShowAI(false)
              setShowEditor(true)
            }}
          />
        )}
        
        {showExport && (
          <ExportModal 
            isOpen={showExport} 
            onClose={() => setShowExport(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}