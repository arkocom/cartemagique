// app/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
      {/* Fond animé doux */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white/5 rounded-full blur-[200px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 24 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center max-w-2xl"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 font-serif"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ 
            background: "linear-gradient(90deg, #ffffff, #fbbf24, #ef4444, #10b981, #ffffff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "300% 300%"
          }}
        >
          Joyeux Noël
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          de la part de…
        </motion.p>

        <motion.p 
          className="text-lg text-gray-400 mb-10 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Créez une carte unique, pleine de magie, pour célébrer la fin de l’année.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/complete" 
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            ✨ Créer ma carte
          </Link>
          <Link 
            href="/gallery" 
            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            🎁 Voir les exemples
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        CarteMagique · Noël 2025
      </motion.div>
    </div>
  )
}