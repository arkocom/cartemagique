// components/audio-player.tsx
'use client'

import { useEffect, useState } from 'react'
import { useAppStore } from '@/stores/appStore'
import { themes } from '@/lib/themes'

export default function AudioPlayer() {
  const { selectedThemeId } = useAppStore()
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Désactive l’audio par défaut (optionnel)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    if (!isEnabled) return

    const theme = themes.find(t => t.id === selectedThemeId)
    let src = ''

    // Musique par catégorie
    if (selectedThemeId.startsWith('noel')) {
      src = '/audio/noel.mp3' // Tu peux remplacer par un son libre de droit
    } else if (selectedThemeId.startsWith('nouvel-an')) {
      src = '/audio/nouvel-an.mp3'
    } else {
      src = '/audio/hiver.mp3'
    }

    // Crée l’élément audio
    const newAudio = new Audio(src)
    newAudio.loop = true
    newAudio.volume = 0.3
    setAudio(newAudio)

    return () => {
      newAudio.pause()
    }
  }, [selectedThemeId, isEnabled])

  const togglePlay = () => {
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(e => console.warn('Audio play failed:', e))
    }
    setIsPlaying(!isPlaying)
  }

  const handleEnable = () => {
    setIsEnabled(true)
  }

  if (!isEnabled) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleEnable}
          className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full backdrop-blur text-sm"
        >
          🎵 Activer la musique
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <button
        onClick={togglePlay}
        className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full backdrop-blur"
      >
        {isPlaying ? '⏸️ Pause' : '▶️ Jouer'}
      </button>
    </div>
  )
}
