'use client';

import { stickers } from '@/lib/themes';
import { useAppStore } from '@/stores/appStore';
import { cn } from '@/lib/utils';

export default function StickerPanel() {
  const addElement = useAppStore(s => s.addElement);

  const handleDragStart = (e: React.DragEvent, sticker: Sticker) => {
    e.dataTransfer.setData('application/json', JSON.stringify(sticker));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const sticker = JSON.parse(e.dataTransfer.getData('application/json'));
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 50;
    const y = e.clientY - rect.top - 50;

    addElement({
      id: crypto.randomUUID(),
      type: 'sticker',
      x,
      y,
      width: 100,
      height: 100,
      rotation: 0,
      emoji: sticker.emoji,
      content: sticker.url,
      zIndex: 0
    });
  };

  return (
    <div className="w-64 glass p-4 overflow-y-auto h-screen">
      <h3 className="text-lg font-bold mb-4">Stickers</h3>
      <div
        className="grid grid-cols-3 gap-2"
        onDragOver={e => e.preventDefault()}
        onDrop={handleDrop}
      >
        {stickers.map((s, i) => (
          <div
            key={i}
            draggable
            onDragStart={(e) => handleDragStart(e, s)}
            className="aspect-square bg-white/10 rounded-lg flex items-center justify-center cursor-grab hover:bg-white/20 transition"
          >
            {s.emoji ? s.emoji : <img src={s.url} alt="sticker" className="w-8 h-8 object-contain" />}
          </div>
        ))}
      </div>
    </div>
  );
}
