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
  music: string
  gradient: string
  image: string // L'image est obligatoire
}

export interface CanvasElement {
  id: string
  type: 'text' | 'image'
  x: number
  y: number
  rotation: number
  scaleX: number
  scaleY: number
  content?: string
  src?: string
  fill?: string
  fontSize?: number
  width?: number
  height?: number
  fontFamily?: string
  align?: string
  shadowColor?: string
  shadowBlur?: number
}