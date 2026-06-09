# Wave Clone — Vue 3 + Atomic Design

Projet pédagogique pour apprendre à **décomposer une maquette Figma** en composants
selon la méthode **Atomic Design**, puis à la coder en **Vue 3**.

Il reproduit **une page d'accueil Wave complète** :
1. Bandeau « We're hiring » + navbar (logo + menus)
2. Hero (titre + sous-titre + badges stores + mockup téléphone)
3. Section « What you can do with Wave » (grille de 6 cartes)
4. Section témoignages clients (carrousel)
5. Footer (liens + badges stores)

---

## 🚀 Démarrer le projet (Linux / macOS / Windows)

Il faut **Node.js 18+** installé (`node -v` pour vérifier).

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvre ensuite l'URL affichée dans le terminal (par défaut **http://localhost:5173**).

```bash
# Construire la version de production
npm run build

# Prévisualiser la version de production
npm run preview
```

---

## 🧱 Structure Atomic Design

```
src/
├─ assets/
│  ├─ images/             → vrais assets : logo, badges stores, photos clients
│  └─ styles/             → tokens.css (variables) + main.css (reset/base)
├─ data/                 → contenu séparé du code
│   features.js, navigation.js, transactions.js, testimonials.js, footer.js
├─ components/
│  ├─ atoms/             → briques indivisibles
│  │   BaseIcon, BaseHeading, BaseText, BaseButton, NavLink, StoreBadge, TheLogo
│  ├─ molecules/         → petits groupes d'atomes
│  │   FeatureCard, NavMenu, StoreButtons, ActionButton, TransactionRow, TestimonialCard
│  ├─ organisms/         → grandes sections autonomes
│  │   TheAnnouncementBar, TheNavbar, HeroSection, PhoneMockup,
│  │   FeaturesSection, TestimonialsSection, TheFooter
│  └─ templates/         → squelette de page (chrome + slot)
│      DefaultLayout
├─ pages/                → templates remplis de contenu
│   HomePage
├─ App.vue               → assemble template + page
└─ main.js               → point d'entrée
```

**Sens de lecture du code (de bas en haut) :**
`atoms → molecules → organisms → templates → pages`

---

## 🎓 Conventions à transmettre aux apprenants

| Convention | Exemple |
|---|---|
| `PascalCase` pour tous les composants | `FeatureCard.vue` |
| Préfixe `Base*` pour les atomes génériques | `BaseIcon`, `BaseButton` |
| Préfixe `The*` pour les composants uniques sur la page | `TheNavbar`, `TheLogo` |
| Les **données** vivent dans `src/data/`, jamais en dur dans un composant | `features.js` |
| Une répétition visuelle = **un composant + une boucle `v-for`** | la grille de features |

---

## 🔎 Points de cours

- **`FeatureCard`** est la démonstration parfaite d'une molécule :
  `1 icône (atome) + 1 titre (atome)`, répétée 6 fois via `v-for`.
- **`DefaultLayout`** (template) contient le `<slot>` : c'est le contenant ;
  **`HomePage`** (page) est le contenu. On sépare la structure des données.
- **`tokens.css`** centralise toutes les couleurs/espacements : aucun composant
  ne doit coder une couleur en dur.
