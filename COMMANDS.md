# 🎬 Quick Commands Copy-Paste

## ⚡ Démarrer Rapidement (Copier-Coller)

### 1️⃣ Installation Initiale

```bash
cd /home/godefroid-kay/acasemia-nextjs
npm install
```

### 2️⃣ Développement Local

```bash
npm run dev
```

Puis ouvrir: http://localhost:3000

### 3️⃣ Build Production

```bash
npm run build
npm start
```

### 4️⃣ Vérifier TypeScript

```bash
npx tsc --noEmit
```

---

## 🌐 Déploiement sur Vercel

### Méthode 1: Via GitHub (Recommandé)

```bash
# 1. Initialiser git (si pas déjà fait)
git init
git add .
git commit -m \"Initial commit: A Casa Mia Next.js\"

# 2. Ajouter remote GitHub
git remote add origin https://github.com/YOUR_USERNAME/acasemia.git
git branch -M main
git push -u origin main

# 3. Aller sur vercel.com/import et sélectionner le repo
```

### Méthode 2: Via Vercel CLI

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
vercel

# Configuration: suivre les prompts
```

---

## 🔧 Utilitaires Système

### Nettoyer et Réinstaller

```bash
# Windows
rmdir /s /q node_modules .next
npm install

# macOS / Linux
rm -rf node_modules .next
npm install
```

### Libérer le Port 3000

```bash
# macOS / Linux
lsof -i :3000
kill -9 <PID>

# macOS avec Homebrew
npm i -g kill-port
kill-port 3000

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Vérifier les Versions

```bash
node --version      # doit être 18+ ou 20+
npm --version       # doit être 9+
git --version
```

### Definir la Version de Node

```bash
# Si vous avez nvm
nvm install 20
nvm use 20

# Vérifier
node --version      # devrait être v20.x.x
```

---

## 📊 Commandes de Diagnostic

### Analyser le Bundle

```bash
npm run build
bundle-analyze    # (après installation de l'analyseur)
```

### Checker la Performance

```bash
# Lighthouse en CLI
npm install -g lighthouse
lighthouse http://localhost:3000

# Ou dans DevTools (F12) → Lighthouse
```

### Vérifier les Dépendances

```bash
npm list              # Voir toutes les dépendances
npm outdated          # Voir les packages non mis à jour
npm audit            # Chercher les vulnérabilités
npm audit fix        # Fixer les problèmes de sécurité
```

---

## 🔄 Mise à Jour du Projet

### Mettre à Jour les Packages

```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour tous les packages
npm update

# Mettre à jour un package spécifique
npm install next@latest
npm install tailwindcss@latest
npm install typescript@latest
```

### Mettre à Jour depuis Main

```bash
git fetch origin
git pull origin main
npm install
npm run build
```

---

## 📁 Navigation Rapide

### Ouvrir dans VS Code

```bash
code /home/godefroid-kay/acasemia-nextjs
```

### Voir la Structure

```bash
# Arborescence simple
tree -L 2 -I 'node_modules|.next'

# Avec plus de détails
find . -type f -name '*.tsx' -o -name '*.ts' -o -name '*.json' | head -30
```

### Compter les Lignes de Code

```bash
find app -name '*.tsx' -o -name '*.ts' -o -name '*.css' | xargs wc -l
```

---

## 🚀 Optimisations Performance

### Générer Lighthouse Report

```bash
# Installation unique
npm install -g lighthouse

# Générer le rapport
lighthouse http://localhost:3000 --view

# Avec rapport HTML
lighthouse http://localhost:3000 --output=html --output-path=./report.html
```

### Analyser les Images

```bash
find public -type f \( -name '*.jpg' -o -name '*.png' \) -exec identify {} \;
```

### Minifier CSS Manual

```bash
npm install -g cleancss-cli
cleancss -o app/globals.min.css app/globals.css
```

---

## 🔐 Configuration Sécurité

### Vérifier les Secrets dans Git

```bash
# Vérifier que .env.local n'a pas été commité
git log --full-history -- .env.local

# Vérifier les fichiers sensibles
git ls-files | grep -E '\\.(env|key|secret)$'
```

### Nettoyer l'Historique Git

```bash
# Si .env.local a été accidentellement commité
git filter-branch --tree-filter 'rm -f .env.local' HEAD

# ⚠️ Attention: Cela réécrit l'historique!
```

---

## 🐛 Debugging

### Logs en Développement

```bash
# Mode verbose
DEBUG=* npm run dev

# Avec source maps
npm run dev -- --inspect
```

### Tester en Production Localement

```bash
npm run build
npm start

# Open http://localhost:3000 et vérifier
```

### Vérifier les erreurs de Build

```bash
npm run build 2>&1 | tee build.log

# Puis analyser build.log
cat build.log | grep -i error
```

---

## 📊 Statistiques du Projet

### Taille Totale

```bash
du -sh /home/godefroid-kay/acasemia-nextjs
du -sh node_modules
du -sh .next
```

### Nombre de Fichiers

```bash
find app -type f | wc -l              # React files
find public -type f | wc -l           # Public assets
find . -name '*.json' | wc -l         # Config files
```

### Lignes de Code

```bash
find app -name '*.tsx' -o -name '*.ts' | xargs wc -l
```

---

## 🔄 CI/CD avec GitHub Actions

### Créer Workflow Automatique

```bash
# Créer le fichier
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - run: npm run lint
EOF

git add .github
git commit -m "Add GitHub Actions CI/CD"
git push
```

---

## 🌍 Tester Depuis un Appareil Local

### Accéder depuis le réseau local

```bash
# Récupérer votre IP
ipconfig getifaddr en0    # macOS
ip addr show              # Linux
ipconfig                  # Windows

# Exemple: 192.168.1.100
# Tester sur un autre appareil: http://192.168.1.100:3000
```

### Utiliser ngrok pour exposer localement

```bash
# Installation unique
npm install -g ngrok

# Lancer
ngrok http 3000

# URL publique: https://xxx.ngrok.io
```

---

## 📱 Tester la Version Mobile

### DevTools Chrome

```
F12 → Toggle device toolbar (Ctrl+Shift+M) → Test
```

### Device Emulation CLI

```bash
# Lighthouse Mobile
lighthouse http://localhost:3000 --emulated-form-factor=mobile

# Avec rapport
lighthouse http://localhost:3000 --emulated-form-factor=mobile --view
```

---

## 🎯 Commandes Vercel CLI Utiles

```bash
# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod

# Voir les déploiements
vercel list

# Voir les logs
vercel logs

# Envoyer une variable d'env
vercel env add NEXT_PUBLIC_VAR

# Voir l'URL du projet
vercel projects list
```

---

## 📚 Documentation Ressources

```bash
# Documentation locale
open README.md            # Description générale
open QUICKSTART.md        # Démarrage rapide
open DEPLOYMENT.md        # Déploiement
open CONTRIBUTING.md      # Développement
open ARCHITECTURE.md      # Architecture détaillée

# Online
open https://nextjs.org/docs
open https://tailwindcss.com/docs
open https://vercel.com/docs
open https://react.dev
```

---

## 🆘 Commandes SOS

### Si Tout est Cassé

```bash
# 1. Supprimer tout le cache
rm -rf node_modules .next .eslintcache

# 2. Réinstaller
npm install

# 3. Vérifier les erreurs
npm run build

# 4. Relancer
npm run dev
```

### Si le Déploiement Échoue

```bash
# 1. Vérifier localement
npm run build

# 2. Voir les logs Vercel
vercel logs

# 3. Rédéployer
vercel --prod --force
```

### Si les Images ne Chargent Pas

```bash
# Vérifier les URLs
curl -I https://images.unsplash.com/photo-xxxxx

# Vérifier la configuration CORS dans next.config.js
```

---

## 🎓 Commandes Pédagogiques

### Apprendre TypeScript

```bash
npx ts-node -e \"console.log('Hello TypeScript')\"
```

### Tester Tailwind en Ligne

```bash
open https://play.tailwindcss.com
```

### Explorer les Dépendances

```bash
npm ls react            # React dependency tree
npm ls next             # Next.js dependency tree
npm ls tailwindcss      # Tailwind dependency tree
```

---

## 📋 Checklist Finale

```bash
# ✅ Installation
npm install

# ✅ Développement
npm run dev

# ✅ Build
npm run build

# ✅ TypeScript check
npx tsc --noEmit

# ✅ Linting
npm run lint

# ✅ Déployer sur Vercel
vercel

# ✅ Vérifier production
open https://acasemia.vercel.app
```

---

**Besoin d'aide?** Consultez les fichiers de documentation ou GitHub!
