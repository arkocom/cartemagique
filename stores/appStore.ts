import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CardElement, Theme } from '@/types';

interface AppState {
  elements: CardElement[];
  selectedId: string | null;
  theme: Theme | null;
  addElement: (el: CardElement) => void;
  updateElement: (id: string, updates: Partial<CardElement>) => void;
  deleteElement: (id: string) => void;
  selectElement: (id: string | null) => void;
  setTheme: (t: Theme | null) => void;
  bringToFront: (id: string) => void;
  sendToBack: (id: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      elements: [],
      selectedId: null,
      theme: null,
      addElement: (el) => set((s) => ({ elements: [...s.elements, { ...el, zIndex: s.elements.length }] })),
      updateElement: (id, updates) => set((s) => ({
        elements: s.elements.map(e => e.id === id ? { ...e, ...updates } : e)
      })),
      deleteElement: (id) => set((s) => ({
        elements: s.elements.filter(e => e.id === id),
        selectedId: s.selectedId === id ? null : s.selectedId
      })),
      selectElement: (id) => set({ selectedId: id }),
      setTheme: (theme) => set({ theme }),
      bringToFront: (id) => set((s) => {
        const idx = s.elements.findIndex(e => e.id === id);
        if (idx === -1 || idx === s.elements.length - 1) return s;
        const arr = [...s.elements];
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        return { elements: arr.map((e, i) => ({ ...e, zIndex: i })) };
      }),
      sendToBack: (id) => set((s) => {
        const idx = s.elements.findIndex(e => e.id === id);
        if (idx === 0) return s;
        const arr = [...s.elements];
        [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
        return { elements: arr.map((e, i) => ({ ...e, zIndex: i })) };
      })
    }),
    { name: 'cartemagique-v2' }
  )
);
