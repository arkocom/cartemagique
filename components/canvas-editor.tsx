'use client';

import dynamic from 'next/dynamic';
import { useAppStore } from '@/stores/appStore';
import { themes } from '@/lib/themes';
import useImage from 'use-image';
import Toolbar from './ui/toolbar';
import StickerPanel from './ui/sticker-panel';

const Stage = dynamic(() => import('react-konva').then(m => m.Stage), { ssr: false });
const Layer = dynamic(() => import('react-konva').then(m => m.Layer), { ssr: false });
const Text = dynamic(() => import('react-konva').then(m => m.Text), { ssr: false });
const Image = dynamic(() => import('react-konva').then(m => m.Image), { ssr: false });
const Transformer = dynamic(() => import('react-konva').then(m => m.Transformer), { ssr: false });

export default function CanvasEditor({ isOpen, onClose, theme }: { isOpen: boolean; onClose: () => void; theme: string | null }) {
  if (!isOpen) return null;

  const { elements, selectedId, selectElement, updateElement, setTheme, addElement } = useAppStore();
  const currentTheme = themes.find(t => t.id === theme) || themes[0];
  const [bgImage, status] = useImage(currentTheme.image);

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StickerPanel />
      <div className="flex-1 relative">
        <div className="absolute top-4 left-4 flex gap-2 z-50">
          {themes.map(t => (
            <button key={t.id} onClick={() => setTheme(t)} className="glass px-4 py-2 rounded-lg hover:bg-white/20">
              {t.name}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 glass px-4 py-2 rounded-lg hover:bg-red-500/20">
          Fermer
        </button>

        <div className="flex items-center justify-center h-full p-8">
          <div className="glass-card p-4 rounded-3xl">
            <Stage width={800} height={600} onMouseDown={() => selectElement(null)}>
              <Layer>
                {status === 'loaded' ? (
                  <Image image={bgImage} width={800} height={600} />
                ) : (
                  <rect width={800} height={600} fill={currentTheme.colors.background} />
                )}
                {elements.sort((a, b) => a.zIndex - b.zIndex).map(el => {
                  if (el.type === 'text') {
                    return (
                      <Text
                        key={el.id}
                        text={el.text}
                        x={el.x}
                        y={el.y}
                        fontSize={el.fontSize}
                        fontFamily={el.fontFamily}
                        fontStyle={el.fontStyle}
                        fontVariant={el.fontWeight === 'bold' ? 'bold' : 'normal'}
                        textDecoration={''}
                        align={el.textAlign}
                        fill={el.fill}
                        rotation={el.rotation}
                        draggable
                        onClick={() => selectElement(el.id)}
                        onDragEnd={e => updateElement(el.id, { x: e.target.x(), y: e.target.y() })}
                        onTransformEnd={e => {
                          const node = e.target;
                          updateElement(el.id, {
                            x: node.x(),
                            y: node.y(),
                            width: node.width() * node.scaleX(),
                            height: node.height() * node.scaleY(),
                            rotation: node.rotation()
                          });
                          node.scaleX(1);
                          node.scaleY(1);
                        }}
                      />
                    );
                  } else if (el.type === 'sticker') {
                    const [stickerImage] = useImage(el.content || '');
                    return (
                      <Image
                        key={el.id}
                        image={stickerImage}
                        x={el.x}
                        y={el.y}
                        width={el.width}
                        height={el.height}
                        rotation={el.rotation}
                        draggable
                        onClick={() => selectElement(el.id)}
                        onDragEnd={e => updateElement(el.id, { x: e.target.x(), y: e.target.y() })}
                        onTransformEnd={e => {
                          const node = e.target;
                          updateElement(el.id, {
                            x: node.x(),
                            y: node.y(),
                            width: node.width() * node.scaleX(),
                            height: node.height() * node.scaleY(),
                            rotation: node.rotation()
                          });
                          node.scaleX(1);
                          node.scaleY(1);
                        }}
                      />
                    );
                  }
                  return null;
                })}
                {selectedId && (
                  <Transformer
                    attachedTo={undefined}
                    boundBoxFunc={(oldBox, newBox) => {
                      if (newBox.width < 20 || newBox.height < 20) return oldBox;
                      return newBox;
                    }}
                  />
                )}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
      <Toolbar />
    </motion.div>
  );
}