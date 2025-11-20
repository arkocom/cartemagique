# CarteMagique.io ✨

Une application web premium pour créer des cartes de vœux personnalisées avec des animations magiques, de la musique et des effets spéciaux.

## 🌟 Fonctionnalités

- **Design Glassmorphism 2025** - Interface moderne avec effets de verre
- **6 Thèmes Magiques** - Chaque thème avec ses propres animations et particules
- **Éditeur Visuel** - Interface intuitive avec glisser-déposer
- **Assistant IA** - Génération automatique de messages personnalisés
- **Audio & Musique** - Playlists thématiques et effets sonores
- **Export Multiple** - PNG, JPG, GIF, MP4 avec qualité professionnelle
- **Mode Surprise** - Programmation d'envoi par email/WhatsApp
- **Galerie Communautaire** - Partagez et remixez des créations
- **Application PWA** - Installable avec support offline
- **Performance Optimisée** - Chargement < 1.8 secondes

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/arkocom/cartemagique.git
cd cartemagique

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

L'application sera accessible à : `http://localhost:3000`

## 🎨 Thèmes disponibles

1. **Celestial Dreams** 🌟 - Étoiles scintillantes et cosmos mystérieux
2. **Enchanted Garden** 🌸 - Pétales colorés et nature féerique
3. **Ocean Whispers** 🌊 - Vagues océaniques et bulles aquatiques
4. **Fireside Warmth** 🔥 - Braises chaleureuses et ambiance cozy
5. **Crystal Frost** ❄️ - Flocons de neige et hiver magique
6. **Golden Sunset** 🌅 - Rayons dorés et couchers de soleil

## 📁 Structure du projet

```
cartemagique/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── complete/page.tsx  # Application complète
│   ├── demo/page.tsx      # Page de démonstration
│   ├── gallery/page.tsx   # Galerie communautaire
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── theme-carousel.tsx # Sélecteur de thèmes
│   ├── hero-section.tsx   # Section hero
│   ├── canvas-editor.tsx  # Éditeur de cartes
│   ├── ai-assistant.tsx   # Assistant IA
│   └── export-modal.tsx   # Modal d'export
├── lib/                  # Utilitaires et configurations
│   ├── themes.ts         # Définitions des thèmes
│   └── utils.ts          # Fonctions utilitaires
├── stores/               # État global avec Zustand
│   └── appStore.ts       # Store principal
├── types/                # Types TypeScript
│   └── index.ts          # Définitions de types
├── public/               # Assets statiques
├── package.json          # Dépendances et scripts
├── next.config.js        # Configuration Next.js
├── tailwind.config.js    # Configuration Tailwind CSS
└── vercel.json          # Configuration Vercel
```

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React moderne avec App Router
- **TypeScript** - Type safety et meilleure DX
- **Tailwind CSS** - Styles utilitaires et design system
- **Framer Motion** - Animations fluides et interactions
- **Zustand** - Gestion d'état légère et performante
- **Konva.js** - Canvas 2D pour l'éditeur
- **React Konva** - Wrapper React pour Konva.js

## 🎯 Pages principales

- `/` - Redirection vers l'application complète
- `/complete` - Application principale avec toutes les fonctionnalités
- `/demo` - Démonstration des fonctionnalités clés
- `/gallery` - Galerie communautaire de cartes

## 🎮 Utilisation

### Créer une carte

1. **Sélectionner un thème** : Choisissez parmi les 6 thèmes disponibles
2. **Utiliser l'assistant IA** : Générez un message personnalisé
3. **Personnaliser** : Modifiez textes, couleurs et effets
4. **Ajouter de la musique** : Sélectionnez une ambiance sonore
5. **Exporter** : Téléchargez dans le format de votre choix

### Fonctionnalités avancées

- **Mode Surprise** : Programmez l'envoi de vos cartes
- **Galerie Communautaire** : Partagez vos créations
- **Remix** : Inspirez-vous des cartes de la communauté
- **Templates** : Utilisez des modèles préconçus

## 🚀 Déploiement

### Sur Vercel (recommandé)

1. Connectez votre dépôt GitHub à Vercel
2. Importez le projet `cartemagique`
3. Les paramètres sont automatiquement détectés
4. Cliquez sur "Deploy"

### Sur d'autres plateformes

```bash
# Build de production
npm run build

# Lancer en production
npm start
```

## 📱 Responsive Design

L'application est entièrement responsive et optimisée pour :
- **Mobile** : Interface tactile optimisée
- **Tablette** : Layout adaptatif
- **Desktop** : Expérience complète avec effets avancés

## 🎨 Design System

- **Glassmorphism** : Effets de verre modernes
- **Animations** : Transitions fluides (300ms)
- **Typographie** : Playfair Display + Inter
- **Couleurs** : Palettes harmonieuses par thème
- **Espacement** : Système cohérent basé sur 8px

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_API_URL=https://api.cartemagique.io
NEXT_PUBLIC_APP_URL=https://cartemagique.vercel.app
```

### Personnalisation

Les thèmes peuvent être modifiés dans `lib/themes.ts` :

```typescript
export const customTheme: Theme = {
  id: 'custom',
  name: 'Custom Theme',
  colors: {
    primary: '#your-color',
    // ... autres couleurs
  },
  // ... autres propriétés
}
```

## 📊 Performance

- **Lighthouse Score** : 95+
- **Core Web Vitals** : Excellents
- **Images optimisées** : WebP/AVIF
- **Code splitting** : Lazy loading automatique
- **Service Worker** : Support offline

## 🤝 Contribution

1. Fork le dépôt
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.

## 🆘 Support

- **Documentation** : Ce README et les commentaires dans le code
- **Issues** : Ouvrez une issue sur GitHub
- **Email** : support@cartemagique.io

## 🎉 Remerciements

- Inspiré par les designs modernes et l'art du papier
- Animations powered by Framer Motion
- Polices de caractères : Google Fonts (Playfair Display, Inter)
- Icônes : Emoji et créations originales

---

**CarteMagique.io - Créez des cartes magiques en un clic !** ✨

**🌐 Site officiel** : [https://cartemagique.vercel.app](https://cartemagique.vercel.app)

**⭐ Si ce projet vous plaît, n'oubliez pas de mettre une étoile !**