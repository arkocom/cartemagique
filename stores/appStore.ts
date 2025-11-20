import { create } from 'zustand'

interface AppState {
  selectedTheme: string | null
  selectedCard: any | null
  user: any | null
  isLoading: boolean
  
  setSelectedTheme: (theme: string | null) => void
  setSelectedCard: (card: any) => void
  setUser: (user: any) => void
  setIsLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedTheme: null,
  selectedCard: null,
  user: null,
  isLoading: false,
  
  setSelectedTheme: (theme) => set({ selectedTheme: theme }),
  setSelectedCard: (card) => set({ selectedCard: card }),
  setUser: (user) => set({ user }),
  setIsLoading: (loading) => set({ isLoading: loading })
}))