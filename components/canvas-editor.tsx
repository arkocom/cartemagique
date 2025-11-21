'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Stage, Layer, Text, Image as KonvaImage, Transformer, Rect } from 'react-konva'
import useImage from 'use-image'
import { useAppStore } from '@/stores/appStore'
import { themes } from '@/lib/themes' // <--- Import du bon fichier existant

interface CanvasEditorProps { isOpen: boolean; onClose: () => void; theme?: string | null }

// --- FOND D'ÉCRAN ---
const BackgroundLayer = ({ themeName, width, height }: { themeName: string, width: number, height: number }) => {
  // On cherche le thème par son NOM (ex: "Celestial Dreams") ou son ID
  const activeTheme = themes.find(t => t.name === themeName || t.id === themeName)
  // Fallback : si on trouve pas, on prend le premier, sinon l'image du thème
  const imageUrl = activeTheme ? activeTheme.image : '/themes/celeste.png'
  
  const [image] = useImage(imageUrl, 'anonymous')

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

// --- IMAGE AJOUTÉE PAR L'UTILISATEUR ---
const URLImage = ({ imageProps, onSelect, onChange, isSelected }: any) => {
  const [img] = useImage(imageProps.src, 'anonymous')
  const shapeRef = useRef<any>(null); const trRef = useRef<any>(null);
  useEffect(() => { if (isSelected && trRef.current) { trRef.current.nodes([shapeRef.current]); trRef.current.getLayer().batchDraw() } }, [isSelected])
  return <><KonvaImage {...imageProps} image={img} ref={shapeRef} draggable onClick={onSelect} onTap={onSelect}
    onDragEnd={(e: any) => onChange({ x: e.target.x(), y: e.target.y() })}
    onTransformEnd={() => onChange({ x: shapeRef.current.x(), y: shapeRef.current.y(), rotation: shapeRef.current.rotation(), scaleX: shapeRef.current.scaleX(), scaleY: shapeRef.current.scaleY() })}
  />{isSelected && <Transformer ref={trRef} />}</>
}

// --- TEXTE ÉDITABLE ---
const EditableText = ({ textProps, onSelect, onChange, isSelected }: any) => {
  const shapeRef = useRef<any>(null); const trRef = useRef<any>(null);
  useEffect(() => { if (isSelected && trRef.current) { trRef.current.nodes([shapeRef.current]); trRef.current.getLayer().batchDraw() } }, [isSelected])
  return <><Text {...textProps} ref={shapeRef} draggable onClick={onSelect} onTap={onSelect}
    onDragEnd={(e: any) => onChange({ x: e.target.x(), y: e.target.y() })}
    onTransformEnd={() => onChange({ x: shapeRef.current.x(), y: shapeRef.current.y(), rotation: shapeRef.current.rotation(), scaleX: shapeRef.current.scaleX(), scaleY: shapeRef.current.scaleY() })}
    onDblClick={() => { const val = prompt('Modifier le texte :', textProps.content); if (val !== null) onChange({ content: val }) }}
  />{isSelected && <Transformer ref={trRef} />}</>
}

// --- COMPOSANT PRINCIPAL ---
export default function CanvasEditor({ isOpen, onClose, theme }: CanvasEditorProps) {
  const { elements, addElement, updateElement, selectedId, selectElement, removeElement } = useAppStore()
  const [stageSize, setStageSize] = useState({ width: 800, height: 600 })
  const containerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const currentThemeName = theme || 'Celestial Dreams'

  useEffect(() => { if (containerRef.current) setStageSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight }) }, [isOpen])
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId) removeElement(selectedId) }
    window.addEventListener('keydown', handleKeyDown); return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedId, removeElement])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const img = new Image(); img.src = reader.result as string;
        img.onload = () => addElement({ id: `img-${Date.now()}`, type: 'image', x: 100, y: 100, src: reader.result as string, width: 200, height: 200 * (img.height/img.width), rotation: 0, scaleX: 1, scaleY: 1 })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleExport = () => {
    if (stageRef.current) {
        selectElement(null)
        setTimeout(() => {
            const link = document.createElement('a'); link.download = `CarteMagique.png`; link.href = stageRef.current.toDataURL({ pixelRatio: 2 });
            document.body.appendChild(link); link.click(); document.body.removeChild(link);
        }, 100)
    }
  }

  if (!isOpen) return null

  return (
    <motion.div className="fixed inset-0 bg-black/95 z-50 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="h-16 glass flex items-center justify-between px-4">
        <h3 className="text-white font-bold hidden sm:block">{currentThemeName}</h3>
        <div className="flex gap-2">
            <button onClick={() => addElement({ id: `t-${Date.now()}`, type: 'text', x: stageSize.width/2, y: stageSize.height/2, content: 'Nouveau Texte', fill: '#fff', fontSize: 30, rotation: 0, scaleX: 1, scaleY: 1 })} className="glass px-3 py-2 rounded text-white text-sm hover:bg-white/10">Texte</button>
            <button onClick={() => fileInputRef.current?.click()} className="glass px-3 py-2 rounded text-white text-sm hover:bg-white/10">Image</button>
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
            <button onClick={handleExport} className="bg-purple-600 px-3 py-2 rounded text-white text-sm hover:bg-purple-500">Sauvegarder</button>
            <button onClick={onClose} className="text-white p-2 ml-2">✕</button>
        </div>
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 bg-gray-900 flex items-center justify-center p-4" ref={containerRef}>
          <div className="relative shadow-2xl overflow-hidden border border-white/10" style={{ width: '100%', height: '100%', maxWidth: '800px', maxHeight: '600px' }}>
            <Stage ref={stageRef} width={stageSize.width} height={stageSize.height} onMouseDown={(e) => { if (e.target === e.target.getStage()) selectElement(null) }}>
              <Layer>
                <BackgroundLayer themeName={currentThemeName} width={stageSize.width} height={stageSize.height} />
                {elements.map((el) => {
                    if (el.type === 'text') return <EditableText key={el.id} textProps={el} isSelected={el.id === selectedId} onSelect={() => selectElement(el.id)} onChange={(attrs: any) => updateElement(el.id, attrs)} />
                    if (el.type === 'image' && el.src) return <URLImage key={el.id} imageProps={el} isSelected={el.id === selectedId} onSelect={() => selectElement(el.id)} onChange={(attrs: any) => updateElement(el.id, attrs)} />
                    return null
                })}
              </Layer>
            </Stage>
          </div>
        </div>
        {/* Sidebar simplifiée pour éviter les erreurs */}
        <div className="w-64 glass border-l border-white/10 p-4 text-white hidden lg:block">
            <h4 className="font-bold mb-4 text-sm">Options</h4>
            {selectedId ? <button onClick={() => removeElement(selectedId)} className="w-full py-2 bg-red-500/20 text-red-300 rounded">Supprimer</button> : <p className="text-sm text-gray-500">Sélectionnez un élément</p>}
        </div>
      </div>
    </motion.div>
  )
}