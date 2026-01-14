# 🌟 Étoile du Matin Recycle

**Une nouvelle vie pour vos trouvailles**

## 📋 Description

Site one-page moderne et engageant pour **Étoile du Matin Recycle**, entreprise spécialisée dans la revente d'objets recyclés et reconditionnés (drones testés, vêtements, jouets, bons plans).

## ✨ Caractéristiques

### Design
- 🎨 **Style éco-moderne** avec palette de couleurs vert sauge, blanc et beige
- 📱 **Responsive mobile-first** - optimisé pour Instagram
- 🌊 **Animations fluides** au scroll et au hover
- ⚡ **Performance optimisée** pour un chargement rapide

### Sections
1. **Hero** - Message principal avec CTA
2. **Concept** - Présentation de la démarche
3. **Produits** - 4 catégories de produits (Drones, Vêtements, Jouets, Bons plans)
4. **Pourquoi nous choisir** - 4 arguments clés
5. **Instagram** - Lien vers le compte social
6. **Engagement** - Message éco-responsable
7. **CTA Final** - Appel à l'action
8. **Footer** - Informations légales et liens

### Technologies
- ✅ HTML5 sémantique
- ✅ CSS3 avec variables CSS et animations
- ✅ JavaScript vanilla (pas de dépendances)
- ✅ Google Fonts (Poppins, Inter)
- ✅ SEO optimisé

## 🚀 Installation & Lancement

### Option 1 : Serveur Python
```bash
# Naviguer dans le dossier
cd edm-main

# Lancer le serveur (Python 3)
python3 -m http.server 8000

# Ouvrir dans le navigateur
# http://localhost:8000
```

### Option 2 : Serveur Node.js
```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
http-server -p 8000

# Ouvrir dans le navigateur
# http://localhost:8000
```

### Option 3 : Ouvrir directement
Simplement double-cliquer sur `index.html` pour l'ouvrir dans votre navigateur.

## 📁 Structure du Projet

```
edm-main/
├── index.html          # Structure HTML du site
├── styles.css          # Styles CSS avec animations
├── script.js           # Interactions JavaScript
└── README.md           # Documentation
```

## 🎨 Palette de Couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Vert principal | `#7FA68E` | Boutons, accents |
| Vert foncé | `#6B8F7A` | Hover états |
| Vert clair | `#A8C5B3` | Backgrounds subtils |
| Blanc | `#FFFFFF` | Backgrounds principaux |
| Beige | `#F5F3EF` | Sections alternées |
| Gris clair | `#E8E8E8` | Bordures |
| Noir | `#1A1A1A` | Textes principaux |

## 🔧 Fonctionnalités JavaScript

- ✅ Navigation sticky avec effet au scroll
- ✅ Menu mobile hamburger responsive
- ✅ Smooth scroll pour les ancres
- ✅ Animations au scroll (fade-in)
- ✅ Effet parallax sur le hero
- ✅ Hover effects sur les cartes
- ✅ Tracking analytics (prêt pour GA)
- ✅ Accessibilité améliorée

## 📱 Responsive Design

Le site s'adapte parfaitement à toutes les tailles d'écran :

- 📱 **Mobile** : < 768px
- 📱 **Tablet** : 768px - 1024px
- 💻 **Desktop** : > 1024px

## 🔗 Liens Importants

- **Instagram** : [@edm.recycle](https://instagram.com/edm.recycle)
- Tous les liens sont configurés pour pointer vers le compte Instagram

## 🎯 Optimisations SEO

- ✅ Balises meta description et keywords
- ✅ Titres hiérarchisés (H1-H3)
- ✅ Attributs alt pour accessibilité
- ✅ Structured data ready
- ✅ Performance optimisée

## 📊 Performance

- ⚡ Chargement rapide (< 2s)
- ⚡ Aucune dépendance externe lourde
- ⚡ Images optimisées (emojis utilisés)
- ⚡ CSS et JS minifiables

## 🔄 Personnalisation

### Changer les couleurs
Modifier les variables CSS dans `styles.css` :
```css
:root {
    --color-primary: #7FA68E;  /* Votre couleur */
    --color-secondary: #...;
}
```

### Modifier le contenu
Éditer directement `index.html` pour changer :
- Les textes
- Les liens Instagram
- Les sections

### Ajouter des images
Remplacer les emojis dans les cartes produits par des vraies images :
```html
<div class="product-icon">
    <img src="votre-image.jpg" alt="Description">
</div>
```

## 🌐 Déploiement

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [votre-repo]
git push -u origin main
```
Puis activer GitHub Pages dans les settings du repo.

### Netlify / Vercel
1. Créer un compte
2. Connecter votre repo GitHub
3. Deploy automatique !

## 📝 License

© 2026 Étoile du Matin Recycle. Tous droits réservés.

## 👨‍💻 Support

Pour toute question ou personnalisation, contactez via Instagram : [@edm.recycle](https://instagram.com/edm.recycle)

---

**Made with 💚 for a better planet**