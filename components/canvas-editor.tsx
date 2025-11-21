'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Stage, Layer, Text, Image as KonvaImage, Transformer, Rect } from 'react-konva'
import useImage from 'use-image'
import { useAppStore } from '@/stores/appStore'
import { themes } from '@/lib/themes'

// Sous-composant Fond
const BackgroundLayer = ({ themeName, width, height }: { themeName: string, width: number, height: number }) => {
  const activeTheme = themes.find(t => t.name === themeName) || themes[0]
  const [image] = useImage(activeTheme.image, 'anonymous') // 'anonymous' est vital pour l'export

  let crop = { x: 0, y: 0, width: 0, height: 0 }
  if (image) {
    const scale = Math.max(width / image.width, height / image.height)
    crop = {
      x: (image.width * scale - width) / (2 * scale),
      y: (image.height * scale - height) / (2 * scale),
      width: width / scale,
      height: height / scale
    }
  }

  return (
    <>
      <Rect width={width} height={height} fill="#222" />
      {image && <KonvaImage image={image} width={width} height={height} crop={crop} listening={false} />}
      <Rect width={width} height={height} fill="black" opacity={0.2} listening={false} />
    </>
  )
}

// Sous-composant Texte
const EditableText = ({ textProps, onSelect, onChange, isSelected }: any) => {
  const shapeRef = useRef<any>(null); const trRef = useRef<any>(null);
  useEffect(() => { if (isSelected && trRef.current) { trRef.current.nodes([shapeRef.current]); trRef.current.getLayer().batchDraw() } }, [isSelected])
  
  return (
    <>
      <Text {...textProps} ref={shapeRef} draggable onClick={onSelect} onTap={onSelect}
        onDragEnd={(e: any) => onChange({ x: e.target.x(), y: e.target.y() })}
        onTransformEnd={() => onChange({ x: shapeRef.current.x(), y: shapeRef.current.y(), rotation: shapeRef.current.rotation(), scaleX: shapeRef.current.scaleX(), scaleY: shapeRef.current.scaleY() })}
        onDblClick={() => { const val = prompt('Texte:', textProps.content); if (val) onChange({ content: val }) }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </>
  )
}

export default function CanvasEditor({ isOpen, onClose, theme }: { isOpen: boolean; onClose: () => void; theme?: string | null }) {
  const { elements, addElement, updateElement, selectedId, selectElement, removeElement } = useAppStore()
  const [dims, setDims] = useState({ w: 800, h: 600 })
  const container = useRef<HTMLDivElement>(null)
  const safeTheme = theme || 'Celestial Dreams'

  useEffect(() => { if (container.current) setDims({ w: container.current.offsetWidth, h: container.current.offsetHeight }) }, [isOpen])

  if (!isOpen) return null

  return (
    <motion.div className="fixed inset-0 bg-black/95 z-50 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="h-16 glass flex items-center justify-between px-4">
        <h3 className="text-white font-bold">{safeTheme}</h3>
        <div className="flex gap-2">
            <button onClick={() => addElement({ id: `t-${Date.now()}`, type: 'text', x: dims.w/2, y: dims.h/2, content: 'Double-clic pour éditer', fill: '#fff', fontSize: 30, rotation: 0, scaleX: 1, scaleY: 1 })} className="bg-white/20 px-4 py-2 rounded text-white">Ajouter Texte</button>
            <button onClick={onClose} className="text-white px-4">Fermer</button>
        </div>
      </div>
      <div className="flex-1 bg-gray-900 flex items-center justify-center p-4" ref={container}>
        <div className="shadow-2xl overflow-hidden" style={{ width: '100%', height: '100%', maxWidth: 800, maxHeight: 600 }}>
          <Stage width={dims.w} height={dims.h} onMouseDown={(e) => { if (e.target === e.target.getStage()) selectElement(null) }}>
            <Layer>
              <BackgroundLayer themeName={safeTheme} width={dims.w} height={dims.h} />
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