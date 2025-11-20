'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const cards = [
    {
      id: '1',
      title: 'Anniversaire Élégant',
      author: '@marie_design',
      rating: 4.8,
      theme: 'anniversaire',
      image: 'https://picsum.photos/seed/card1/400/300.jpg',
      description: 'Carte d\'anniversaire avec thème doré et paillettes animées'
    },
    {
      id: '2',
      title: 'Nouvel An Nature',
      author: '@nature_lover',
      rating: 4.9,
      theme: 'nouvel-an',
      image: 'https://picsum.photos/seed/card2/400/300.jpg',
      description: 'Bonne année avec éléments naturels et feuillages'
    },
    {
      id: '3',
      title: 'Amour Romantique',
      author: '@romantic_soul',
      rating: 5.0,
      theme: 'saint-valentin',
      image: 'https://picsum.photos/seed/card3/400/300.jpg',
      description: 'Carte romantique avec cœurs et effets roses'
    },
    {
      id: '4',
      title: 'Mariage Royal',
      author: '@wedding_planner',
      rating: 4.7,
      theme: 'mariage',
      image: 'https://picsum.photos/seed/card4/400/300.jpg',
      description: 'Félicitations de mariage avec style royal et dorures'
    },
    {
      id: '5',
      title: 'Noël Magique',
      author: '@xmas_spirit',
      rating: 4.6,
      theme: 'noel',
      image: 'https://picsum.photos/seed/card5/400/300.jpg',
      description: 'Joyeux Noël avec neige tombante et lumières scintillantes'
    },
    {
      id: '6',
      title: 'Fête des Mères',
      author: '@mom_lover',
      rating: 4.9,
      theme: 'fete-meres',
      image: 'https://picsum.photos/seed/card6/400/300.jpg',
      description: 'Cartre remplie d\'amour pour la fête des mères'
    }
  ]

  const filters = [
    { id: 'all', name: 'Tout', count: cards.length },
    { id: 'anniversaire', name: 'Anniversaire', count: 2 },
    { id: 'saint-valentin', name: 'Saint-Valentin', count: 1 },
    { id: 'mariage', name: 'Mariage', count: 1 },
    { id: 'noel', name: 'Noël', count: 1 },
    { id: 'nouvel-an', name: 'Nouvel An', count: 1 }
  ]

  const filteredCards = selectedFilter === 'all' 
    ? cards 
    : cards.filter(card => card.theme === selectedFilter)

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
              <a href="/demo" className="text-gray-300 hover:text-white transition-colors">Démo</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Galerie <span className="gradient-text">communautaire</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Découvrez et remixez les créations magnifiques de notre communauté
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-purple-600 text-white'
                    : 'glass text-gray-300 hover:bg-white hover:bg-opacity-10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name} ({filter.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="glass-card rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <div className="relative">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-black/50 px-2 py-1 rounded-full">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-white text-sm font-medium">{card.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">par {card.author}</span>
                    <span className="text-xs text-purple-400 capitalize">{card.theme.replace('-', ' ')}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => alert('Fonctionnalité à venir !')}
                      className="flex-1 btn-primary px-4 py-2 rounded-lg text-white font-medium text-sm"
                    >
                      Remixer 🎨
                    </button>
                    <button 
                      onClick={() => alert('Fonctionnalité à venir !')}
                      className="flex-1 glass px-4 py-2 rounded-lg text-white font-medium text-sm hover:bg-white hover:bg-opacity-10 transition-all"
                    >
                      Partager 📤
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredCards.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-white text-xl font-semibold mb-2">Aucune carte trouvée</h3>
              <p className="text-gray-400">Essayez avec un autre filtre</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="glass-card rounded-3xl p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à créer votre propre carte ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté de créateurs et partagez vos œuvres magnifiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/complete"
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow"
              >
                ✨ Créer une carte
              </a>
              <button 
                onClick={() => alert('Fonctionnalité à venir !')}
                className="glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all"
              >
                📤 Partager mes créations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
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
    </div>
  )
}