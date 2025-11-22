'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
      {/* Fond animé simple */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="z-10 text-center max-w-2xl"
      >
        <h1 className="text-6xl font-bold mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          CarteMagique.io
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          La manière la plus féerique de souhaiter le meilleur à ceux que vous aimez.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link 
            href="/complete" 
            className="px-8 py-4 bg-white text-purple-900 font-bold rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            ✨ Créer une carte
          </Link>
          <Link 
            href="/gallery" 
            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-colors"
          >
            Voir la galerie
          </Link>
        </div>
      </motion.div>
    </div>
  )
}