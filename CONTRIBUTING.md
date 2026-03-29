# 📱 Guide de Développement et Optimisations

## 🏗️ Architecture du Projet

### Principes de Base

- **Component-Driven**: Chaque section est un composant réutilisable
- **Server Components par défaut**: Utilise React Server Components (Next.js 14+)
- **Client Components quand nécessaire**: Marqués avec `'use client'`
- **Image Optimization**: Toutes les images passent par `next/image`
- **Type Safety**: TypeScript complètement typé

### Structure des Composants

```
Component.tsx
├── 'use client' (si interactif)
├── Imports
├── Interfaces/Types
├── Composant
├── Export default
```

## 🎨 Guidelines de Style

### Couleurs

- **Primary**: `text-red-600`, `bg-red-600`, `hover:bg-red-700`
- **Secondary**: `text-gray-800`, `bg-gray-50`
- **Accent**: `text-green-500`, `text-yellow-400`

### Espacements

Utilisez les utilitaires Tailwind:
- Vertical sections: `py-20` (espacements grands)
- Horizontal padding: `px-6` (réactif)
- Container: `container mx-auto max-w-6xl`

### Typographie

- **Headings**: `font-playfair` + `font-bold`
- **Body**: `font-raleway` (défaut)
- **Tailles**: Responsive (text-sm → text-4xl)

### Animations

- **Scroll**: Utiliser `AnimateOnScroll` component
- **Hover**: `hover-scale`, `hover:scale-105`
- **Transitions**: `transition-all duration-300`

## 🔧 Bonnes Pratiques

### Images

```typescript
// ✅ BON: Utilise next/image
<Image
  src="url"
  alt="description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// ❌ MAUVAIS: Utilise HTML img
<img src="url" alt="description" />
```

### Composants Client vs Server

```typescript
// ✅ Server Component (par défaut)
export default function About() {
  return <div>Contenu statique</div>
}

// ✅ Client Component (si state/event)
'use client';

export default function Button() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Animations au Scroll

```typescript
// Utilise AnimateOnScroll du composant centralisé
<AnimateOnScroll className="card">
  <h2>Titre</h2>
  <p>Contenu animé</p>
</AnimateOnScroll>
```

### Navigation Lisse

```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

## 📈 Performance Tips

### 1. Image Optimization

```typescript
// Utiliser sizes prop
<Image
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  // ...
/>

// Utiliser priority sur above-the-fold
<Image priority // .../>

// Utiliser placeholder BLIP
<Image placeholder="blur" // .../>
```

### 2. Code Splitting

Les composants sont automatiquement code-splittés par Next.js.

### 3. Lazy Loading

```typescript
// Components avec dynamic import (optionnel)
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Chargement...</div>
});
```

### 4. Caching

Les pages sont pré-générées et cachées pour Performance max. Pour purger le cache:

```bash
vercel --prod
```

## 🔐 Sécurité

### Variables Sensibles

- ✅ Les variables `NEXT_PUBLIC_*` sont publiques (client-side)
- ✅ Les variables sans `NEXT_PUBLIC_` sont privées (server-side)

### CORS & Headers

Configuration dans `next.config.js`:
```typescript
headers: async () => {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        // ...
      ]
    }
  ]
}
```

### Sanitization

Les inputs du formulaire sont automatiquement échappés par React.

## 🧪 Testing (Optionnel)

Pour ajouter des tests:

```bash
npm install --save-dev jest @testing-library/react
```

Exemple:
```typescript
// components/__tests__/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByText('A Casa Mia')).toBeInTheDocument();
  });
});
```

## 📝 Ajouter de Nouvelles Sections

### Template

```typescript
// app/components/NewSection.tsx
'use client';

import { AnimateOnScroll } from './AnimateOnScroll';

export default function NewSection() {
  return (
    <section id="new-section" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
            Titre de la Section
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p className="text-gray-600">Contenu</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
```

### Ajouter à la Main Page

```typescript
// app/page.tsx
import NewSection from './components/NewSection';

export default function Home() {
  return (
    <main>
      {/* ... autres sections */}
      <NewSection />
      {/* ... */}
    </main>
  );
}
```

## 🌍 Multilingue (Futur)

Structure pour support multilingue:

```
app/
├── [lang]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── components/ (shared)
├── middleware.ts (redirection)
```

## 📊 Analytics

### Implémenter Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🐛 Debugging

### DevTools

```bash
# Activer source maps
NEXT_PUBLIC_DEBUG=true npm run dev
```

### Logs

```typescript
// Logs serveur (visible dans terminal)
console.log('Server log'); // ✅ visible

// Logs client (visible en DevTools)
'use client';
console.log('Client log'); // ✅ visible
```

## 🚀 Performance Checklist

- [ ] Lighthouse Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Images optimisées avec next/image
- [ ] Fonts pré-chargés
- [ ] CSS Minified automatiquement
- [ ] JavaScript Minified
- [ ] No console errors
- [ ] No console warnings

## 📚 Ressources Utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Best Practices](https://react.dev)
- [Web Vitals](https://web.dev/vitals/)
- [Vercel Docs](https://vercel.com/docs)

---

**Besoin d'aide?** Consultez la documentation ou lancez GitHub Issues.
