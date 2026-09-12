# Portfolio — Cédric Ngouné

Portfolio en Next.js 16, TypeScript et Tailwind CSS v4, sur la palette violette `#4D2FB2`.
Thème clair et sombre au choix, une seule page, cinq sections.

## Démarrer

```bash
npm install
npm run dev
```

## Ce qui a changé par rapport à la base livrée

Trois corrections étaient nécessaires pour que le projet compile :

1. **Tailwind v4.** Le `package.json` demandait Tailwind 4 mais la configuration était celle
   de la v3 (`@tailwind base/components/utilities`, `tailwind.config.ts`, plugin PostCSS
   `tailwindcss`). Le projet est passé en v4 : `@import "tailwindcss"` dans
   `app/globals.css`, thème déclaré en CSS avec `@theme inline`, plugin
   `@tailwindcss/postcss` dans `postcss.config.js`. `tailwind.config.ts` a été supprimé,
   il n’a plus lieu d’être — et `autoprefixer` non plus, la v4 l’intègre.
2. **`@apply border-border`** dans `globals.css` référençait une couleur `border`
   inexistante, ce qui faisait échouer la compilation. La règle a été retirée.
3. **Avenir Next.** `next/font/local` échoue si les `.woff2` sont absents, et ils l’étaient.
   Le layout utilise **Montserrat** (Google Fonts) sous la même variable `--font-avenir`,
   comme votre README le suggérait. Pour revenir à Avenir Next, voir `public/fonts/README.md`.

## Structure

```
app/
  layout.tsx          polices, métadonnées, amorçage du thème
  page.tsx            assemble les sections
  globals.css         jetons de couleur, animations, thème Tailwind
components/
  header.tsx          en-tête collant, navigation, bascule de thème
  footer.tsx          pied de page à trois colonnes
  theme-toggle.tsx    bouton ☀️ / 🌙
  effects.tsx         apparitions au défilement, lien actif (aucun rendu)
  sections/           hero, about, services, projects, stack, contact
  ui/button.tsx       bouton shadcn, variantes adaptées au thème
content/site.ts       tout le contenu éditorial
```

## Couleurs

Les jetons sont définis en haut de `app/globals.css`, en deux blocs : `:root` pour le
thème clair, `[data-theme="dark"]` pour le sombre. Ils sont exposés à Tailwind par
`@theme inline`, ce qui donne des classes comme `bg-surface`, `text-encre-douce`,
`border-bord`, `text-brand`.

Le violet `#4D2FB2` reste la couleur de marque : dégradé `.degrade-marque` pour le héros,
les en-têtes de cartes projet et le bloc contact ; `--brand` pour les accents. En thème
sombre, `--brand` passe à `#8B5CF6` pour rester lisible sur fond foncé — le dégradé, lui,
garde le violet d’origine.

## Thème clair / sombre

Le bouton ☀️ / 🌙 mémorise le choix dans `localStorage`. Au premier chargement, le site
suit le réglage du système. Un script dans le `<head>` de `layout.tsx` applique le thème
avant le premier rendu, ce qui évite l’éclair blanc.

## Animations

Levée des lignes du titre au chargement, apparition des blocs au défilement, halos qui
dérivent lentement, élévation des cartes au survol, onde autour de la pastille de
disponibilité. Tout est neutralisé sous `prefers-reduced-motion`.

## À compléter avant la mise en ligne

Dans `content/site.ts` :

- `photo` — vide pour l’instant, le héros affiche vos initiales. Déposez une photo dans
  `/public` et mettez son chemin ici.
- `liens.github` et `liens.linkedin` — encore des placeholders.
- `email` — une adresse sur votre domaine ferait plus sérieux que celle du CV.
- `telephone` — chaîne vide pour ne pas le publier sur une page publique.
- `realisations` — vérifiez que votre contrat avec GoMind vous autorise à citer Hermès et
  PMU nommément. Sinon : « maison de luxe », « opérateur de paris hippiques ».

Ajoutez aussi `app/icon.png` (favicon) et `app/opengraph-image.png` (1200×630) : Next les
prend en compte automatiquement.

## Mise en ligne

Import du dépôt sur Vercel, puis *Settings → Domains* : ajoutez `c-ngoune.com` et
`www.c-ngoune.com`, et reportez chez votre registrar les enregistrements affichés (`A` sur
l’apex, `CNAME` sur `www`). HTTPS automatique.
