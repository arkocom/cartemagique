'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Stage, Layer, Text, Image as KonvaImage, Transformer, Rect } from 'react-konva'
import useImage from 'use-image'
import { useAppStore } from '@/stores/appStore'

// LISTE DES IMAGES SÉCURISÉES (Copiée ici pour éviter l'import cassé)
const THEME_URLS: Record<string, string> = {
  'Celestial Dreams': 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000&auto=format&fit=crop',
  'Enchanted Garden': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop',
  'Ocean Whispers':   'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?q=80&w=1000&auto=format&fit=crop',
  'Fireside Warmth':  'https://images.unsplash.com/photo-1542293787938-c9e299b880cc?q=80&w=1000&auto=format&fit=crop',
  'Crystal Frost':    'https://images.unsplash.com/photo-1489674267075-cee793167910?q=80&w=1000&auto=format&fit=crop',
  'Golden Sunset':    'https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?q=80&w=1000&auto=format&fit=crop',
}

interface CanvasEditorProps { isOpen: boolean; onClose: () => void; theme?: string | null }

const BackgroundLayer = ({ themeName, width, height }: { themeName: string, width: number, height: number }) => {
  // Sécurité maximale : si le thème n'est pas trouvé, on prend le premier
  const url = THEME_URLS[themeName] || THEME_URLS['Celestial Dreams']
  const [image] = useImage(url, 'anonymous')

  let crop = { x: 0, y: 0, width: 0, height: 0 }
  if (image) {
    const scale = Math.max(width / image.width, height / image.height)
    crop = { x: (image.width * scale - width) / (2 * scale), y: (image.height * scale - height) / (2 * scale), width: width / scale, height: height / scale }
  }

  return (
    <>
      <Rect width={width} height={height} fill="#1e1e2e" />
      {image && <KonvaImage image={image} width={width} height={height} crop={crop} listening={false} />}
      <Rect width={width} height={height} fill="black" opacity={0.2} listening={false} />
    </>
  )
}

const EditableText = ({ textProps, onSelect, onChange, isSelected }: any) => {
  const shapeRef = useRef<any>(null); const trRef = useRef<any>(null);
  useEffect(() => { if (isSelected && trRef.current) { trRef.current.nodes([shapeRef.current]); trRef.current.getLayer().batchDraw() } }, [isSelected])
  return <><Text {...textProps} ref={shapeRef} draggable onClick={onSelect} onTap={onSelect}
    onDragEnd={(e: any) => onChange({ x: e.target.x(), y: e.target.y() })}
    onTransformEnd={() => onChange({ x: shapeRef.current.x(), y: shapeRef.current.y(), rotation: shapeRef.current.rotation(), scaleX: shapeRef.current.scaleX(), scaleY: shapeRef.current.scaleY() })}
    onDblClick={() => { const val = prompt('Texte:', textProps.content); if (val) onChange({ content: val }) }}
  />{isSelected && <Transformer ref={trRef} />}</>
}

export default function CanvasEditor({ isOpen, onClose, theme }: CanvasEditorProps) {
  const { elements, addElement, updateElement, selectedId, selectElement } = useAppStore()
  const [stageSize, setStageSize] = useState({ width: 800, height: 600 })
  const containerRef = useRef<HTMLDivElement>(null)
  const currentTheme = theme || 'Celestial Dreams'

  useEffect(() => { if (containerRef.current) setStageSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight }) }, [isOpen])

  if (!isOpen) return null

  return (
    <motion.div className="fixed inset-0 bg-black/95 z-50 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="h-16 glass flex items-center justify-between px-4">
        <h3 className="text-white font-bold">{currentTheme}</h3>
        <div className="flex gap-2">
            <button onClick={() => addElement({ id: `t-${Date.now()}`, type: 'text', x: stageSize.width/2, y: stageSize.height/2, content: 'Double-clic pour éditer', fill: '#fff', fontSize: 30, rotation: 0, scaleX: 1, scaleY: 1 })} className="bg-white/20 px-4 py-2 rounded text-white hover:bg-white/30">Ajouter Texte</button>
            <button onClick={onClose} className="text-white px-4">Fermer</button>
        </div>
      </div>
      <div className="flex-1 bg-gray-900 flex items-center justify-center p-4" ref={containerRef}>
        <div className="shadow-2xl overflow-hidden border border-white/10" style={{ width: '100%', height: '100%', maxWidth: 800, maxHeight: 600 }}>
          <Stage width={stageSize.width} height={stageSize.height} onMouseDown={(e) => { if (e.target === e.target.getStage()) selectElement(null) }}>
            <Layer>
              <BackgroundLayer themeName={currentTheme} width={stageSize.width} height={stageSize.height} />
              {elements.map((el) => {
                  if (el.type === 'text') return <EditableText key={el.id} textProps={el} isSelected={el.id === selectedId} onSelect={() => selectElement(el.id)} onChange={(a:any) => updateElement(el.id, a)} />
                  return null
              })}
            </Layer>
          </Stage>
        </div>
      </div>
    </motion.div>
  )
}