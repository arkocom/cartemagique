import { Theme } from '@/types'

export const themes: Theme[] = [
  {
    id: 'celestial',
    name: 'Celestial Dreams',
    description: 'Bleus profonds et ors brillants avec des particules d\'étoiles scintillantes',
    colors: { primary: '#6366f1', secondary: '#8b5cf6', accent: '#06b6d4', background: '#1e1b4b', text: '#ffffff' },
    particles: 'stars',
    music: 'celestial',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%)',
    image: '/themes/celeste.png' //
  },
  {
    id: 'garden',
    name: 'Enchanted Garden',
    description: 'Pastels doux avec des pétales de fleurs qui dansent dans l\'air',
    colors: { primary: '#10b981', secondary: '#ec4899', accent: '#a855f7', background: '#fdf2f8', text: '#1f2937' },
    particles: 'petals',
    music: 'garden',
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #fce7f3 50%, #f3e8ff 100%)',
    image: '/themes/floralee.png' //
  },
  {
    id: 'ocean',
    name: 'Ocean Whispers',
    description: 'Bleus océaniques avec des bulles qui flottent gracieusement',
    colors: { primary: '#0ea5e9', secondary: '#06b6d4', accent: '#14b8a6', background: '#0c4a6e', text: '#ffffff' },
    particles: 'bubbles',
    music: 'ocean',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
    image: '/themes/aquatique.png' //
  },
  {
    id: 'fireside',
    name: 'Fireside Warmth',
    description: 'Oranges chaleureux avec des braises incandescentes',
    colors: { primary: '#f97316', secondary: '#ef4444', accent: '#eab308', background: '#7c2d12', text: '#ffffff' },
    particles: 'embers',
    music: 'fireside',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #dc2626 50%, #f59e0b 100%)',
    image: '/themes/cheminee.png' //
  },
  {
    id: 'crystal',
    name: 'Crystal Frost',
    description: 'Bleus glacés avec des flocons de neige cristallins',
    colors: { primary: '#3b82f6', secondary: '#06b6d4', accent: '#f8fafc', background: '#1e40af', text: '#1f2937' },
    particles: 'snowflakes',
    music: 'crystal',
    gradient: 'linear-gradient(135deg, #dbeafe 0%, #cffafe 50%, #f8fafc 100%)',
    image: '/themes/hiver.png' //
  },
  {
    id: 'sunset',
    name: 'Golden Sunset',
    description: 'Dégradés chauds avec des rayons de lumière dorée',
    colors: { primary: '#eab308', secondary: '#f97316', accent: '#ec4899', background: '#78350f', text: '#ffffff' },
    particles: 'light-rays',
    music: 'sunset',
    gradient: 'linear-gradient(135deg, #78350f 0%, #ea580c 50%, #f97316 100%)',
    image: '/themes/cieux.png' //
  }
]

export const getThemeById = (id: string): Theme | undefined => {
  return themes.find(theme => theme.id === id)
}

export const getThemeByName = (name: string): Theme | undefined => {
  return themes.find(theme => theme.name === name)
}

export const getRandomTheme = (): Theme => {
  return themes[Math.floor(Math.random() * themes.length)]
}
