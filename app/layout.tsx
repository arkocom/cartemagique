import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'CarteMagique.io - Créez des cartes magiques en un clic ✨',
  description: 'Créez des cartes de vœux personnalisées avec des animations magiques, de la musique et des effets spéciaux. Design glassmorphism 2025.',
  keywords: 'cartes de vœux, animations, design, glassmorphism, créateur, personnalisé',
  authors: [{ name: 'CarteMagique.io' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'CarteMagique.io - Cartes magiques personnalisées',
    description: 'Transformez vos messages en œuvres d\'art avec notre éditeur intuitif',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}