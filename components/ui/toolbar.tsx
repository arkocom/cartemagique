'use client';

import { useAppStore } from '@/stores/appStore';
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight, ArrowUpCircle, ArrowDownCircle, Trash2 } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';
import { cn } from '@/lib/utils';

export default function Toolbar() {
  const { selectedId, elements, updateElement, deleteElement, bringToFront, sendToBack } = useAppStore();
  const element = elements.find(e => e.id === selectedId);

  if (!element || element.type !== 'text') return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-6 rounded-3xl shadow-2xl z-50 flex flex-col gap-6">
      <div className="flex gap-2">
        <button
          onClick={() => updateElement(selectedId!, { fontWeight: element.fontWeight === 'bold' ? 'normal' : 'bold' })}
          className={cn('p-3 rounded-lg hover:bg-white/10 transition', element.fontWeight === 'bold' ? 'bg-white/20' : '')}
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={() => updateElement(selectedId!, { fontStyle: element.fontStyle === 'italic' ? 'normal' : 'italic' })}
          className={cn('p-3 rounded-lg hover:bg-white/10 transition', element.fontStyle === 'italic' ? 'bg-white/20' : '')}
        >
          <Italic className="w-5 h-5" />
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => updateElement(selectedId!, { textAlign: 'left' })}
          className={cn('p-3 rounded-lg hover:bg-white/10 transition', element.textAlign === 'left' ? 'bg-white/20' : '')}
        >
          <AlignLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => updateElement(selectedId!, { textAlign: 'center' })}
          className={cn('p-3 rounded-lg hover:bg-white/10 transition', element.textAlign === 'center' ? 'bg-white/20' : '')}
        >
          <AlignCenter className="w-5 h-5" />
        </button>
        <button
          onClick={() => updateElement(selectedId!, { textAlign: 'right' })}
          className={cn('p-3 rounded-lg hover:bg-white/10 transition', element.textAlign === 'right' ? 'bg-white/20' : '')}
        >
          <AlignRight className="w-5 h-5" />
        </button>
      </div>
      <select
        value={element.fontFamily || 'Great Vibes'}
        onChange={(e) => updateElement(selectedId!, { fontFamily: e.target.value })}
        className="glass px-4 py-2 rounded-lg focus:outline-none"
      >
        <option value="Great Vibes">Great Vibes</option>
        <option value="Dancing Script">Dancing Script</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Roboto">Roboto</option>
      </select>
      <input
        type="number"
        value={element.fontSize || 48}
        onChange={(e) => updateElement(selectedId!, { fontSize: Number(e.target.value) })}
        className="glass px-4 py-2 rounded-lg w-20 focus:outline-none"
        min={12}
        max={200}
        step={4}
      />
      <HexColorPicker
        color={element.fill || '#ffffff'}
        onChange={(color) => updateElement(selectedId!, { fill: color })}
      />
      <div className="flex gap-2">
        <button onClick={() => bringToFront(selectedId!)} className="p-3 hover:bg-white/10 rounded-lg transition">
          <ArrowUpCircle className="w-5 h-5" />
        </button>
        <button onClick={() => sendToBack(selectedId!)} className="p-3 hover:bg-white/10 rounded-lg transition">
          <ArrowDownCircle className="w-5 h-5" />
        </button>
        <button onClick={() => deleteElement(selectedId!)} className="p-3 hover:bg-red-500/20 rounded-lg transition">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
