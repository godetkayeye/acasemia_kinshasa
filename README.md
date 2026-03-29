# A Casa Mia - Restaurant Italien à Kinshasa

Application web moderne pour un restaurant italien authentique situé à Kinshasa, en République Démocratique du Congo.

## 🎯 Caractéristiques

- ✅ **Modern Stack**: Next.js 14 avec TypeScript et Tailwind CSS
- ✅ **Performance Optimisée**: Image optimization, lazy loading, code splitting
- ✅ **SEO-Friendly**: Métadonnées, Open Graph, sitemap.xml, robots.txt
- ✅ **Responsive Design**: Entièrement adapté mobile, tablette et desktop
- ✅ **Animations Fluides**: Fade-in animations au scroll, transitions douces
- ✅ **Accessibilité**: WCAG 2.1 compliant, navigation au clavier
- ✅ **WhatsApp Integration**: Bouton flottant et formulaire de réservation WhatsApp
- ✅ **Prêt pour Vercel**: Configuration optimisée pour déploiement sur Vercel

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Playfair Display, Raleway)
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: Compatible avec Vercel Analytics

## 📁 Structure du Projet

```
acasemia-nextjs/
├── app/
│   ├── components/          # Composants React réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── SpecialtiesSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ReservationSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── AnimateOnScroll.tsx
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout racine avec métadonnées
│   └── page.tsx             # Page d'accueil
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── vercel.json
├── .env.local
├── .gitignore
└── .vercelignore
```

## 🛠️ Installation & Développement

### Prérequis
- Node.js 18.x ou 20.x
- npm ou yarn

### Installation

```bash
cd acasemia-nextjs
npm install
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build pour Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🌐 Déploiement sur Vercel

### Méthode 1: Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Méthode 2: Via GitHub (Recommandé)

1. Poussez le projet sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre dépôt GitHub
4. Configurez les variables d'environnement:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: 243840355657
   - `NEXT_PUBLIC_RESTAURANT_NAME`: A Casa Mia
   - `NEXT_PUBLIC_RESTAURANT_ADDRESS`: 70B Avenue Uvira, Gombe, Kinshasa
   - `NEXT_PUBLIC_RESTAURANT_PHONE`: +243 840 355 657
5. Cliquez sur "Deploy"

### Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=243840355657
NEXT_PUBLIC_RESTAURANT_NAME=A Casa Mia
NEXT_PUBLIC_RESTAURANT_ADDRESS=70B Avenue Uvira, Gombe, Kinshasa
NEXT_PUBLIC_RESTAURANT_PHONE=+243 840 355 657
```

## 📊 Optimisations de Performance

- **Image Optimization**: Utilise `next/image` avec lazy loading et format AVIF
- **Code Splitting**: Chaque composant est chargé indépendamment
- **CSS-in-JS**: Tailwind CSS avec purging automatique
- **Fonts Optimization**: Google Fonts avec preload et font-display: swap
- **Static Generation**: Pages générées statiquement pour performance maximale
- **CDN**: Automatique avec Vercel

## 🔍 SEO

- ✅ Meta tags complets (title, description, keywords)
- ✅ Open Graph pour partage social
- ✅ Twitter Card
- ✅ Structured data (Schema.org)
- ✅ Mobile-friendly viewport
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Hreflang pour multilingue (futur)

## ♿ Accessibilité

- ✅ WCAG 2.1 Level AA compliant
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus visible styles
- ✅ Alt text sur images
- ✅ Color contrast ratio 4.5:1+

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly buttons (min 48px)
- Optimized for all devices

## 🔐 Sécurité

- ✅ Security Headers (X-Frame-Options, X-Content-Type-Options, etc.)
- ✅ No sensitive data in client-side code
- ✅ Environment variables pour données sensibles
- ✅ Content Security Policy ready
- ✅ HTTPS enforced on Vercel

## 📞 Fonctionnalités Clés

### Formulaire de Réservation
- Intégration WhatsApp directe
- Validation en temps réel
- Messages automatiques formatés
- Responsive et accessible

### Bouton WhatsApp Flottant
- Positionnement fixe bottom-right
- Hover animations
- Accessible au clavier
- Mobile-optimisé

### Sections Principales
1. **Hero**: Image d'accueil avec call-to-action
2. **About**: Présentation du restaurant
3. **Features**: Points forts du restaurant
4. **Specialties**: Menu avec images
5. **Experience**: Ambiance et services
6. **Testimonials**: Avis clients
7. **Reservation**: Formulaire WhatsApp
8. **Contact**: Localisation et horaires

## 🎨 Personnalisation

### Changer les Couleurs
Modifiez `tailwind.config.ts`:

```typescript
colors: {
  'acasemia-red': '#dc2626',
  'acasemia-dark': '#1a1a1a',
}
```

### Changer les Images
Remplacez les URLs Unsplash dans les composants par vos propres images.

### Changer les Textes
Modifiez directement le contenu dans les fichiers des composants.

## 📈 Analytics (Optionnel)

Pour activer Vercel Analytics:

1. Allez dans les settings Vercel du projet
2. Activez "Analytics"
3. Les données seront collectées automatiquement

## 🐛 Troubleshooting

### Le projet ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules .next
npm install
npm run dev
```

### Erreurs TypeScript
```bash
# Compiler TypeScript
npx tsc --noEmit
```

### Vercel deployment fails
- Vérifiez que `.env.local` n'est pas commité
- Assurez-vous que les variables d'env sont dans Vercel dashboard
- Vérifiez la version de Node.js

## 📄 License

Ce projet est sous license [MIT](LICENSE).

## 👨‍💼 Support

Pour toute question ou support:
- Email: contact@acasemia.cd
- WhatsApp: +243 840 355 657
- Adresse: 70B Avenue Uvira, Gombe, Kinshasa

---

**A Casa Mia** - _Un coin d'Italie au cœur de Kinshasa_ 🇮🇹
