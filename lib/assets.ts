import { Theme, Sticker } from '@/types';

export const themes: Theme[] = [
  {
    id: 'aquatique',
    name: 'Aquatique',
    description: 'Bleus océaniques avec bulles flottantes',
    image: '/aquatique.png',
    colors: {
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      accent: '#14b8a6',
      background: '#0c4a6e',
      text: '#ffffff'
    },
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)'
  },
  {
    id: 'celeste',
    name: 'Céleste',
    description: 'Bleus profonds et ors brillants avec étoiles scintillantes',
    image: '/celeste.png',
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#06b6d4',
      background: '#1e1b4b',
      text: '#ffffff'
    },
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%)'
  },
  {
    id: 'cheminee',
    name: 'Cheminée',
    description: 'Oranges chaleureux avec braises incandescentes',
    image: '/cheminee.png',
    colors: {
      primary: '#f97316',
      secondary: '#ef4444',
      accent: '#eab308',
      background: '#7c2d12',
      text: '#ffffff'
    },
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #dc2626 50%, #f59e0b 100%)'
  },
  {
    id: 'cieux',
    name: 'Cieux',
    description: 'Dégradés chauds avec rayons de lumière dorée',
    image: '/cieux.png',
    colors: {
      primary: '#eab308',
      secondary: '#f97316',
      accent: '#ec4899',
      background: '#78350f',
      text: '#ffffff'
    },
    gradient: 'linear-gradient(135deg, #78350f 0%, #ea580c 50%, #f97316 100%)'
  },
  {
    id: 'floralee',
    name: 'Floralée',
    description: 'Pastels doux avec pétales dansants',
    image: '/floralee.png',
    colors: {
      primary: '#10b981',
      secondary: '#ec4899',
      accent: '#a855f7',
      background: '#fdf2f8',
      text: '#1f2937'
    },
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #fce7f3 50%, #f3e8ff 100%)'
  },
  {
    id: 'hiver',
    name: 'Hiver',
    description: 'Bleus glacés avec flocons cristallins',
    image: '/hiver.png',
    colors: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#f8fafc',
      background: '#1e40af',
      text: '#1f2937'
    },
    gradient: 'linear-gradient(135deg, #dbeafe 0%, #cffafe 50%, #f8fafc 100%)'
  }
];

export const stickers: Sticker[] = [
  { emoji: "🎈" },
  { emoji: "🎉" },
  { emoji: "✨" },
  { emoji: "❤️" },
  { emoji: "🌟" },
  { emoji: "🎂" },
  { emoji: "🥳" },
  { emoji: "🎁" },
  { emoji: "🌹" },
  { emoji: "💐" },
  { emoji: "🌸" },
  { emoji: "🦋" },
  { emoji: "🌈" },
  { emoji: "⭐" },
  { emoji: "💌" },
  { emoji: "🎊" },
  { emoji: "🌺" },
  { emoji: "🕊️" },
  { emoji: "🌼" },
  { emoji: "🔥" }
];
