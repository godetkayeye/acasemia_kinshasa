# 🚀 Guide de Déploiement sur Vercel

Ce guide vous aidera à déployer votre application A Casa Mia sur Vercel.

## ✅ Prérequis

- Compte GitHub (recommandé)
- Compte Vercel gratuit (https://vercel.com)
- Node.js 18.x ou 20.x installé localement
- Git configuré

## 📋 Étape 1: Préparer le Projet Localement

### 1.1 Vérifier que le projet fonctionne en local

```bash
cd acasemia-nextjs

# Installer les dépendances
npm install

# Tester en développement
npm run dev
```

Visitez `http://localhost:3000` pour vérifier que le site fonctionne.

### 1.2 Vérifier la build en production

```bash
# Build le projet
npm run build

# Démarrer le serveur de production
npm start
```

### 1.3 Configurer Git

```bash
git init
git add .
git commit -m "Initial commit: A Casa Mia Next.js website"
```

## 🔗 Étape 2: Pousser sur GitHub

### 2.1 Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com/new)
2. Créez un nouveau dépôt nommé `acasemia`
3. NE cochez pas "Initialize with README" (vous avez déjà un README.md)
4. Cliquez sur "Create repository"

### 2.2 Pousser le code

```bash
git remote add origin https://github.com/VOTRE_PSEUDO/acasemia.git
git branch -M main
git push -u origin main
```

⚠️ **Important**: Assurez-vous que `.env.local` est dans `.gitignore`

Vérifiez:
```bash
cat .gitignore | grep "env"
# Doit contenir ".env.local"
```

## 🌐 Étape 3: Déployer sur Vercel

### Méthode 1: Déploiement Facile (Recommandé)

#### 3.1 Aller sur Vercel

1. Visitez [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up" et inscrivez-vous avec GitHub
3. Autorisez Vercel à accéder à vos dépôts

#### 3.2 Importer le Projet

1. Une fois connecté, cliquez sur "New Project"
2. Sélectionnez votre dépôt `acasemia`
3. Vercel détecte automatiquement que c'est un Next.js
4. Cliquez sur "Import"

#### 3.3 Configurer les Variables d'Environnement

Dans la page "Configure Project":

1. Allez à l'onglet "Environment Variables"
2. Ajoutez les variables suivantes:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=243840355657
NEXT_PUBLIC_RESTAURANT_NAME=A Casa Mia
NEXT_PUBLIC_RESTAURANT_ADDRESS=70B Avenue Uvira, Gombe, Kinshasa
NEXT_PUBLIC_RESTAURANT_PHONE=+243 840 355 657
```

⚠️ **Important**: Le préfixe `NEXT_PUBLIC_` rend ces variables accessibles au client (c'est intentionnel)

#### 3.4 Déployer

Cliquez sur "Deploy" et attendez 2-3 minutes.

Votre site sera disponible à: `https://acasemia.vercel.app`

### Méthode 2: Déploiement via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Suivre les instructions
```

## 🎯 Étape 4: Vérifier le Déploiement

### 4.1 Vérifier que le site est online

```bash
# Tester la requête
curl https://acasemia.vercel.app

# Ou ouvrir dans le navigateur
open https://acasemia.vercel.app
```

### 4.2 Tester les Fonctionnalités

- [ ] Testez la navigation responsive (mobile, tablet, desktop)
- [ ] Cliquez sur le bouton WhatsApp flottant
- [ ] Remplissez le formulaire de réservation
- [ ] Vérifiez le chargement des images
- [ ] Testez les animations de scroll
- [ ] Vérifiez les liens de navigation (À propos, Menu, etc.)

### 4.3 Vérifier le SEO

```bash
# Tester les métadonnées Open Graph
curl -I https://acasemia.vercel.app

# Vérifier le sitemap
open https://acasemia.vercel.app/sitemap.xml

# Vérifier robots.txt
open https://acasemia.vercel.app/robots.txt
```

### 4.4 Lighthouse Audit (DevTools)

1. Ouvrez Chrome DevTools (F12)
2. Allez à l'onglet "Lighthouse"
3. Générez un rapport
4. Objectif: Score > 90 sur Performance, Accessibility, Best Practices

## 🔒 Étape 5: Configuration Avancée (Optionnel)

### 5.1 Domaine Personnalisé

1. Dans le dashboard Vercel, allez à "Settings"
2. Allez à "Domains"
3. Entrez votre domaine (ex: acasemia.cd)
4. Suivez les instructions pour configurer les DNS
5. Vercel fournira les nameservers à ajouter chez votre registrar

### 5.2 Analytics

1. Dans le dashboard Vercel, allez à "Integrations"
2. Activez "Analytics"
3. Les données seront collectées automatiquement

### 5.3 Monitoring

1. Allez à "Monitoring" dans le dashboard
2. Vérifiez les Core Web Vitals
3. Vérifiez les erreurs

## 🔄 Étape 6: Mises à Jour Futures

Après chaque modification:

```bash
# Commit et push les changements
git add .
git commit -m "Description des changements"
git push origin main

# Vercel déploiera automatiquement!
```

Vous verrez une notification sur le dashboard Vercel.

## 📊 Monitoring en Production

### Vérifier les Logs

```bash
# Via Vercel CLI
vercel logs

# Ou dans le dashboard Vercel
# Projects > acasemia > Deployments > Logs
```

### Vérifier la Performance

Utilisez les outils:
- Google PageSpeed Insights
- GTMetrix
- WebPageTest

## 🆘 Dépannage

### Le site retourne une erreur 500

```bash
# Vérifiez les variables d'environnement dans Vercel
# Vérifiez que .env.local n'a pas été commité

# Redéployez
vercel --prod
```

### Les images ne se chargent pas

- Vérifiez que les URLs Unsplash sont correctes
- Vérifiez la configuration CORS dans `next.config.js`
- Vérifiez les permissions d'accès aux images

### Le formulaire WhatsApp ne fonctionne pas

- Vérifiez la variable `NEXT_PUBLIC_WHATSAPP_NUMBER`
- Testez le lien WhatsApp directement: `https://wa.me/243840355657`

### Performance lente

- Vérifiez Lighthouse en local: `npm run build && npm start`
- Vérifiez la size du bundle: `npm run build`
- Vérifiez les images (format, compression)

## 📞 Support

- Documentation Next.js: https://nextjs.org/docs
- Documentation Vercel: https://vercel.com/docs
- Communauté Next.js: https://github.com/vercel/next.js

---

**Félicitations!** Votre A Casa Mia est maintenant en ligne! 🎉
