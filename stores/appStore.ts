import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CardElement, Theme } from '@/types';

interface AppState {
  elements: CardElement[];
  selectedId: string | null;
  theme: Theme | null;
  history: CardElement[][];
  historyIndex: number;
  addElement: (el: CardElement) => void;
  updateElement: (id: string, updates: Partial<CardElement>) => void;
  deleteElement: (id: string) => void;
  selectElement: (id: string | null) => void;
  setTheme: (theme: Theme | null) => void;
  bringToFront: (id: string) => void;
  sendToBack: (id: string) => void;
  undo: () => void;
  redo: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      elements: [],
      selectedId: null,
      theme: null,
      history: [],
      historyIndex: -1,
      addElement: (el) => set((s) => {
        const newElements = [...s.elements, { ...el, zIndex: s.elements.length }];
        const newHistory = s.history.slice(0, s.historyIndex + 1);
        newHistory.push(newElements);
        return { elements: newElements, history: newHistory, historyIndex: newHistory.length - 1 };
      }),
      updateElement: (id, updates) => set((s) => {
        const newElements = s.elements.map(e => e.id === id ? { ...e, ...updates } : e);
        const newHistory = s.history.slice(0, s.historyIndex + 1);
        newHistory.push(newElements);
        return { elements: newElements, history: newHistory, historyIndex: newHistory.length - 1 };
      }),
      deleteElement: (id) => set((s) => {
        const newElements = s.elements.filter(e => e.id !== id);
        const newHistory = s.history.slice(0, s.historyIndex + 1);
        newHistory.push(newElements);
        return { elements: newElements, history: newHistory, historyIndex: newHistory.length - 1, selectedId: s.selectedId === id ? null : s.selectedId };
      }),
      selectElement: (id) => set({ selectedId: id }),
      setTheme: (theme) => set({ theme }),
      bringToFront: (id) => set((s) => {
        const idx = s.elements.findIndex(e => e.id === id);
        if (idx === -1 || idx === s.elements.length - 1) return s;
        const newElements = [...s.elements];
        const [el] = newElements.splice(idx, 1);
        newElements.push(el);
        const updated = newElements.map((e, i) => ({ ...e, zIndex: i }));
        const newHistory = s.history.slice(0, s.historyIndex + 1);
        newHistory.push(updated);
        return { elements: updated, history: newHistory, historyIndex: newHistory.length - 1 };
      }),
      sendToBack: (id) => set((s) => {
        const idx = s.elements.findIndex(e => e.id === id);
        if (idx === -1 || idx === 0) return s;
        const newElements = [...s.elements];
        const [el] = newElements.splice(idx, 1);
        newElements.unshift(el);
        const updated = newElements.map((e, i) => ({ ...e, zIndex: i }));
        const newHistory = s.history.slice(0, s.historyIndex + 1);
        newHistory.push(updated);
        return { elements: updated, history: newHistory, historyIndex: newHistory.length - 1 };
      }),
      undo: () => set((s) => {
        if (s.historyIndex <= 0) return s;
        const previous = s.history[s.historyIndex - 1];
        return { elements: previous, historyIndex: s.historyIndex - 1 };
      }),
      redo: () => set((s) => {
        if (s.historyIndex >= s.history.length - 1) return s;
        const next = s.history[s.historyIndex + 1];
        return { elements: next, historyIndex: s.historyIndex + 1 };
      })
    }),
    { name: 'cartemagique-v2' }
  )
);