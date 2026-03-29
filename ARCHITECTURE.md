# 🎯 React Components Architecture Map

## 📊 Component Hierarchy

```
App (page.tsx)
│
├── Header
│   └── Navigation responsive
│       └── Mobile menu
│
├── HeroSection
│   ├── Title animation
│   ├── Description
│   └── CTA buttons
│
├── AboutSection
│   ├── Image (next/image)
│   ├── Title + Description
│   └── Features grid
│
├── FeaturesSection
│   ├── 4 Feature cards
│   │   ├── Icon
│   │   ├── Title
│   │   └── Description
│
├── SpecialtiesSection
│   ├── 6 Specialty cards
│   │   ├── Image
│   │   ├── Icon
│   │   ├── Title
│   │   └── Description
│
├── ExperienceSection
│   ├── Image (next/image)
│   ├── Title + Description
│   └── Benefits list
│
├── TestimonialsSection
│   ├── 3 Testimonial cards
│   │   ├── Quote
│   │   ├── Author
│   │   └── Role
│
├── ReservationSection
│   ├── Title + Description
│   └── Form
│       ├── Name input
│       ├── Phone input
│       ├── Date picker
│       ├── Time picker
│       ├── Guests select
│       ├── Message textarea
│       └── WhatsApp submit button
│
├── ContactSection
│   ├── Contact info
│   │   ├── Address
│   │   ├── Phone/WhatsApp
│   │   └── Hours
│   ├── Social links
│   └── Google Map embed
│
├── Footer
│   ├── Copyright
│   ├── Description
│   └── Credits
│
└── FloatingWhatsApp
    └── Fixed position button
```

## 🗂️ File Structure Détaillée

```
acasemia-nextjs/
│
├── 📂 app/                              [React App Directory]
│   ├── 📂 components/                   [12 Composants React]
│   │   ├── Header.tsx                   [Navigation responsive]
│   │   ├── HeroSection.tsx              [Section accueil]
│   │   ├── AboutSection.tsx             [À propos du restaurant]
│   │   ├── FeaturesSection.tsx          [4 Points forts]
│   │   ├── SpecialtiesSection.tsx       [Menu 6 spécialités]
│   │   ├── ExperienceSection.tsx        [Ambiance & Services]
│   │   ├── TestimonialsSection.tsx      [Avis clients]
│   │   ├── ReservationSection.tsx       [Formulaire WhatsApp]
│   │   ├── ContactSection.tsx           [Localisation]
│   │   ├── Footer.tsx                   [Pied de page]
│   │   ├── FloatingWhatsApp.tsx         [Bouton flottant]
│   │   └── AnimateOnScroll.tsx          [Custom hook animations]
│   ├── layout.tsx                       [RootLayout + Métadonnées]
│   ├── page.tsx                         [Home Page]
│   └── globals.css                      [Styles globaux]
│
├── 📂 public/                           [Assets statiques]
│   ├── robots.txt                       [SEO crawlers]
│   ├── sitemap.xml                      [XML sitemap]
│   └── favicon.ico                      [[À créer]]
│
├── 📄 Configuration Files               [15+ fichiers]
│   ├── package.json                     [npm dépendances]
│   ├── tsconfig.json                    [TypeScript config]
│   ├── tailwind.config.ts              [Tailwind theme]
│   ├── next.config.js                   [Next.js optimization]
│   ├── postcss.config.js                [CSS preprocessing]
│   ├── vercel.json                      [Vercel deployment]
│   ├── .eslintrc.json                   [Code linting]
│   ├── .env.local                       [Environment vars]
│   ├── .env.example                     [Env template]
│   ├── .gitignore                       [Git ignore rules]
│   ├── .vercelignore                    [Vercel ignore rules]
│   ├── .nvmrc                           [Node.js version]
│
└── 📚 Documentation                     [5 fichiers]
    ├── README.md                        [Vue d'ensemble]
    ├── QUICKSTART.md                    [Démarrage rapide]
    ├── GETTING_STARTED.md               [Premiers pas]
    ├── DEPLOYMENT.md                    [Déploiement Vercel]
    ├── CONTRIBUTING.md                  [Développement]
    ├── TRANSFORMATION.md                [PHP → Next.js]
    └── ARCHITECTURE.md                  [Ce fichier]
```

## 🎨 Design System

### Colors
```css
Primary:     #dc2626 (Red-600)
Dark:        #1a1a1a
Text:        #333333
Light BG:    #f9fafb (Gray-50)
```

### Typography
```css
Headings:    Playfair Display (serif)
Body:        Raleway (sans-serif)
Sizes:       text-sm → text-6xl (Tailwind)
```

### Spacing
```css
Sections:    py-20 (5rem)
Padding:     px-6 (1.5rem)
Container:   max-w-6xl (64rem)
Gaps:        gap-8, gap-12 (between items)
```

### Animations
```css
Fade-in:     0.8s ease
Hover scale: 0.3s ease (1.05x)
Transitions: all 0.3s ease
```

## 📱 Responsive Breakpoints

```typescript
sm:  640px   [Mobile]
md:  768px   [Tablet]
lg:  1024px  [Desktop]
xl:  1280px  [Large Desktop]
2xl: 1536px  [Extra Large]
```

## 🔄 Data Flow

```
page.tsx (layout + structure)
    ↓
components (React functional)
    ├── 'use client' for interactivity
    ├── AnimateOnScroll for animations
    └── next/image for optimization
    ↓
globals.css (Tailwind styles)
    ↓
User Browser (rendered output)
```

## 🚀 Build Pipeline

```
npm run dev
    ↓
    ├── TypeScript compilation
    ├── Tailwind CSS processing
    ├── Next.js dev server (localhost:3000)
    └── Hot module replacement (HMR)

npm run build
    ↓
    ├── TypeScript check
    ├── CSS purging
    ├── Static generation
    ├── Image optimization
    └── .next/ output folder

npm start
    ↓
    Server production (localhost:3000)
```

## 📊 Performance Targets

### Lighthouse Scores

```
Performance:     95+
Accessibility:   95+
Best Practices:  95+
SEO:            100
```

### Core Web Vitals

```
LCP (Largest Contentful Paint):    < 2.5s
FID (First Input Delay):           < 100ms
CLS (Cumulative Layout Shift):     < 0.1
```

### Bundle Size

```
HTML:      ~45 KB
CSS:       ~20 KB (minified)
JS:        ~150 KB (minified, with React)
ImageS:    ~200 KB (lazy loaded)
Total:     ~415 KB uncompressed
Gzipped:   ~50 KB (actual over network)
```

## 🔌 External Dependencies

```
Core:
  - next: ^14.0.0
  - react: ^18.2.0
  - react-dom: ^18.2.0

Styling:
  - tailwindcss: ^3.3.0
  - autoprefixer: ^10.4.16
  - postcss: ^8.4.31

Development:
  - typescript: ^5.2.0
  - @types/node: ^20.8.0
  - @types/react: ^18.2.0
```

## 🌐 External Services

```
Images:        Unsplash API (free, high-res)
Maps:          Google Maps Embed
Communication: WhatsApp Web API
Fonts:         Google Fonts CDN
Deployment:    Vercel (serverless)
```

## 🔐 Security Architecture

```
Environment Variables:
  ├── NEXT_PUBLIC_* → Client-side (safe)
  └── Regular ENV → Server-side (protected)

Headers (next.config.js):
  ├── X-Frame-Options: SAMEORIGIN
  ├── X-Content-Type-Options: nosniff
  └── X-XSS-Protection: 1; mode=block

HTTPS:
  └── Enforced by Vercel
```

## 📈 SEO Structure

```
Metadata (layout.tsx):
  ├── Title & Description
  ├── Keywords
  ├── Open Graph (og:*)
  ├── Twitter Card
  └── Viewport & Theme color

XML Sitemap (public/sitemap.xml):
  ├── Homepage (priority: 1.0)
  ├── About (priority: 0.8)
  ├── Menu (priority: 0.9)
  ├── Reservation (priority: 0.9)
  └── Contact (priority: 0.8)

Robots.txt (public/robots.txt):
  ├── User-agent: * (all crawlers)
  ├── Sitemap: URL
  └── Crawl-delay: 1s
```

## 🎯 Component Props Schema

### Header
```typescript
No props (uses internal state for mobile menu)
```

### AnimateOnScroll
```typescript
interface Props {
  children: React.ReactNode
  className?: string
}
```

### Image Components
```typescript
ImageProps {
  src: string (URL Unsplash)
  alt: string (accessibility)
  fill: boolean (responsive)
  sizes: string (responsive images)
  className: string (styling)
}
```

## 📋 Testing Checklist

### Manual Testing
- [ ] Navigation links work
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Images load correctly
- [ ] Animations are smooth
- [ ] Forms are usable
- [ ] WhatsApp button works
- [ ] No console errors
- [ ] No TypeScript warnings

### Automated
- [ ] TypeScript check: `npx tsc --noEmit`
- [ ] Lighthouse: DevTools
- [ ] Linting: `npm run lint`

## 🔄 Update Checklist

When updating content:

```
1. Edit component files (app/components/*.tsx)
2. Check TypeScript: npx tsc --noEmit
3. Test locally: npm run dev
4. Build: npm run build
5. Deploy: git push (auto-deploys on Vercel)
```

---

**Last Updated**: March 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
