import { Theme } from '@/types'

export const themes: Theme[] = [
  {
    id: 'celestial',
    name: 'Celestial Dreams',
    description: 'Magie des étoiles',
    colors: { primary: '#6366f1', secondary: '#8b5cf6', accent: '#06b6d4', background: '#1e1b4b', text: '#ffffff' },
    particles: 'stars', music: 'celestial', gradient: '',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'garden',
    name: 'Enchanted Garden',
    description: 'Douceur florale',
    colors: { primary: '#10b981', secondary: '#ec4899', accent: '#a855f7', background: '#fdf2f8', text: '#1f2937' },
    particles: 'petals', music: 'garden', gradient: '',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'ocean',
    name: 'Ocean Whispers',
    description: 'Calme profond',
    colors: { primary: '#0ea5e9', secondary: '#06b6d4', accent: '#14b8a6', background: '#0c4a6e', text: '#ffffff' },
    particles: 'bubbles', music: 'ocean', gradient: '',
    image: 'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'fireside',
    name: 'Fireside Warmth',
    description: 'Chaleur du foyer',
    colors: { primary: '#f97316', secondary: '#ef4444', accent: '#eab308', background: '#7c2d12', text: '#ffffff' },
    particles: 'embers', music: 'fireside', gradient: '',
    image: 'https://images.unsplash.com/photo-1542293787938-c9e299b880cc?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'crystal',
    name: 'Crystal Frost',
    description: 'Hiver éternel',
    colors: { primary: '#3b82f6', secondary: '#06b6d4', accent: '#f8fafc', background: '#1e40af', text: '#1f2937' },
    particles: 'snowflakes', music: 'crystal', gradient: '',
    image: 'https://images.unsplash.com/photo-1489674267075-cee793167910?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'sunset',
    name: 'Golden Sunset',
    description: 'Lumière dorée',
    colors: { primary: '#eab308', secondary: '#f97316', accent: '#ec4899', background: '#78350f', text: '#ffffff' },
    particles: 'light-rays', music: 'sunset', gradient: '',
    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?q=80&w=1000&auto=format&fit=crop'
  }
]