'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  onCreateCard: () => void
}

export default function HeroSection({ onCreateCard }: HeroSectionProps) {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          className="floating mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Créez des cartes
            <span className="gradient-text block">magiques</span>
            en un clic
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Transformez vos messages en œuvres d'art avec notre éditeur intuitif, 
          des thèmes enchanteurs et des animations époustouflantes.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button 
            onClick={onCreateCard}
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow hover:scale-105 transition-transform"
          >
            ✨ Commencer à créer
          </button>
          <button 
            onClick={() => document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all hover:scale-105"
          >
            🎨 Explorer les thèmes
          </button>
        </motion.div>
        
        {/* Feature Preview */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="glass-card rounded-3xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-white font-semibold mb-2">15+ Thèmes</h3>
                <p className="text-gray-400 text-sm">Chaque thème avec ses propres animations et effets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Assistant IA</h3>
                <p className="text-gray-400 text-sm">Générez des messages personnalisés en un clic</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Musique & Effets</h3>
                <p className="text-gray-400 text-sm">Musique de fond et effets sonores immersifs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}