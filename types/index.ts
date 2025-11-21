export interface Theme {
  id: string
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  particles: string
  music: string;
  gradient: string;
  // C'est la ligne qui manquait pour afficher vos fonds d'écran !
  image: string 
}

export interface Card {
  id: string
  title: string
  theme: string
  content: string
  author: string
  rating: number
  createdAt: Date
  imageUrl?: string
}

export interface CardElement {
  id: string
  type: 'text' | 'image' | 'shape'
  x: number
  y: number
  width: number
  height: number
  rotation: number
  content?: string
  style?: any
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
}

export interface ExportOptions {
  format: 'png' | 'jpg' | 'gif' | 'mp4'
  quality: 'low' | 'medium' | 'high'
  includeAudio: boolean
  size: 'small' | 'medium' | 'large'
}