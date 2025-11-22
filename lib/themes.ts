// lib/themes.ts
import type { Theme } from '@/types'

const t = (
  id: string,
  name: string,
  description: string,
  path: string
): Theme => ({
  id,
  name,
  description,
  colors: {
    primary: '#ffffff',
    secondary: '#e2e8f0',
    accent: '#cbd5e1',
    background: '#0f172a',
    text: '#ffffff',
  },
  particles: 'snowflakes',
  music: 'default',
  image: path,
})

export const themes = [
  // ❄️ Hiver
  t('hiver-1', 'Hiver 1', 'Paysage neigeux', '/themes/hiver/hiver-1.jpg'),
  t('hiver-2', 'Hiver 2', 'Forêt enneigée', '/themes/hiver/hiver-2.jpg'),
  t('hiver-3', 'Hiver 3', 'Lac gelé', '/themes/hiver/hiver-3.jpg'),
  t('hiver-4', 'Hiver 4', 'Montagnes', '/themes/hiver/hiver-4.jpg'),
  t('hiver-5', 'Hiver 5', 'Village alpin', '/themes/hiver/hiver-5.jpg'),
  t('hiver-6', 'Hiver 6', 'Aurores', '/themes/hiver/hiver-6.jpg'),
  t('hiver-7', 'Hiver 7', 'Arbres givrés', '/themes/hiver/hiver-7.jpg'),
  t('hiver-8', 'Hiver 8', 'Tempête douce', '/themes/hiver/hiver-8.jpg'),
  t('hiver-9', 'Hiver 9', 'Chalet', '/themes/hiver/hiver-9.jpg'),
  t('hiver-10', 'Hiver 10', 'Ciel étoilé', '/themes/hiver/hiver-10.jpg'),

  // 🎄 Noël
  t('noel-1', 'Noël 1', 'Sapin lumineux', '/themes/noel/noel-1.jpg'),
  t('noel-2', 'Noël 2', 'Décor doré', '/themes/noel/noel-2.jpg'),
  t('noel-3', 'Noël 3', 'Cadeaux', '/themes/noel/noel-3.jpg'),
  t('noel-4', 'Noël 4', 'Guirlandes', '/themes/noel/noel-4.jpg'),
  t('noel-5', 'Noël 5', 'Boules', '/themes/noel/noel-5.jpg'),
  t('noel-6', 'Noël 6', 'Scandinave', '/themes/noel/noel-6.jpg'),
  t('noel-7', 'Noël 7', 'Ruelle festive', '/themes/noel/noel-7.jpg'),
  t('noel-8', 'Noël 8', 'Étoile', '/themes/noel/noel-8.jpg'),
  t('noel-9', 'Noël 9', 'Vitrine', '/themes/noel/noel-9.jpg'),
  t('noel-10', 'Noël 10', 'Magie', '/themes/noel/noel-10.jpg'),

  // 🥂 Nouvel An
  t('nouvel-an-1', 'Nouvel An 1', 'Feux d’artifice', '/themes/nouvel-an/nouvel-an-1.jpg'),
  t('nouvel-an-2', 'Nouvel An 2', 'Champagne', '/themes/nouvel-an/nouvel-an-2.jpg'),
  t('nouvel-an-3', 'Nouvel An 3', 'Minuit magique', '/themes/nouvel-an/nouvel-an-3.jpg'),
  t('nouvel-an-4', 'Nouvel An 4', 'Élégance dorée', '/themes/nouvel-an/nouvel-an-4.jpg'),
  t('nouvel-an-5', 'Nouvel An 5', 'Nuit étoilée', '/themes/nouvel-an/nouvel-an-5.jpg'),
  t('nouvel-an-6', 'Nouvel An 6', 'Confettis', '/themes/nouvel-an/nouvel-an-6.jpg'),
  t('nouvel-an-7', 'Nouvel An 7', 'Horloge', '/themes/nouvel-an/nouvel-an-7.jpg'),
  t('nouvel-an-8', 'Nouvel An 8', 'Lumières', '/themes/nouvel-an/nouvel-an-8.jpg'),
  t('nouvel-an-9', 'Nouvel An 9', 'Espoir 2026', '/themes/nouvel-an/nouvel-an-9.jpg'),
  t('nouvel-an-10', 'Nouvel An 10', 'Célébration', '/themes/nouvel-an/nouvel-an-10.jpg'),
]