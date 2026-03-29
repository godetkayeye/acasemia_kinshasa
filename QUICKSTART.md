# ⚡ Quick Start Guide

Démarrez rapidement avec A Casa Mia Next.js!

## 🚀 Installation Rapide (5 minutes)

### 1. Cloner et Installer

```bash
cd acasemia-nextjs
npm install
```

### 2. Configurer les Variables d'Environnement

```bash
# Copier le fichier exemple
cp .env.example .env.local

# Les valeurs par défaut sont déjà configurées
```

### 3. Lancer en Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) ✨

## 🌐 Déployer sur Vercel (3 minutes)

### Méthode Simple

```bash
npm i -g vercel
vercel
```

Ou visitez [vercel.com/import](https://vercel.com/import) et sélectionnez votre dépôt GitHub.

## 📁 Navigation Rapide

- 📱 **Components**: `app/components/`
- 🎨 **Styles**: `app/globals.css`
- 📄 **Main Page**: `app/page.tsx`
- ⚙️ **Config**: `tailwind.config.ts`, `next.config.js`
- 📚 **Docs**: 
  - `README.md` - Vue d'ensemble
  - `DEPLOYMENT.md` - Guide de déploiement détaillé
  - `CONTRIBUTING.md` - Guide de développement

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Build pour production
npm run build

# Démarrer le serveur de production
npm start

# Linting
npm run lint

# Nettoyer le cache
rm -rf .next node_modules
npm install
```

## 📋 Checklist de Développement

- [ ] Site lancé en local
- [ ] Images chargées correctement
- [ ] Animations fluides
- [ ] Formulaire WhatsApp fonctionne
- [ ] Responsive sur mobile
- [ ] Pas d'erreurs console

## 📋 Checklist de Déploiement

- [ ] Variables d'env configurées dans Vercel
- [ ] Domain configuré (optionnel)
- [ ] Site accessible en HTTPS
- [ ] Images chargées sur production
- [ ] Lighthouse score > 90
- [ ] Formulaire fonctionne

## 🆘 Problèmes Courants

| Problème | Solution |
|----------|----------|
| Port 3000 déjà utilisé | `lsof -i :3000` puis `kill -9 <PID>` |
| Images ne se chargent pas | Vérifier URLs et configuration CORS |
| Build échoue | Vérifier TypeScript: `npx tsc --noEmit` |
| WhatsApp ne fonctionne pas | Vérifier variable `NEXT_PUBLIC_WHATSAPP_NUMBER` |

## 📞 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [GitHub Issues](#) - Signaler les bugs

---

**C'est parti!** Profitez de votre nouveau site moderne 🚀
