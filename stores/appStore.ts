import { create } from 'zustand'
import { CanvasElement } from '@/types'
import { themes } from '@/lib/themes'

interface AppState {
  selectedThemeName: string
  elements: CanvasElement[]
  selectedId: string | null
  setSelectedThemeName: (name: string) => void
  addElement: (element: CanvasElement) => void
  updateElement: (id: string, attrs: Partial<CanvasElement>) => void
  selectElement: (id: string | null) => void
  removeElement: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedThemeName: 'Celestial Dreams',
  elements: [],
  selectedId: null,

  setSelectedThemeName: (name) => set({ selectedThemeName: name }), // Juste le nom pour éviter les bugs d'objet
  
  addElement: (element) => set((state) => ({ 
    elements: [...state.elements, element],
    selectedId: element.id 
  })),
  
  updateElement: (id, attrs) => set((state) => ({
    elements: state.elements.map((el) => el.id === id ? { ...el, ...attrs } : el),
  })),
  
  selectElement: (id) => set({ selectedId: id }),
  
  removeElement: (id) => set((state) => ({
    elements: state.elements.filter((el) => el.id !== id),
    selectedId: null
  })),
}))