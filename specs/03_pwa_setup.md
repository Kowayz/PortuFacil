## ✅ Status: COMPLÉTÉ — critères vérifiés, commité

# Spec 03 — Progressive Web App (PWA)

## Priorité : MOYENNE

## Contexte

L'app tourne entièrement en client-side (Vite, vanilla JS, localStorage). La rendre
installable sur mobile/desktop comme une vraie app native est simple et très impactant.

## Travail à faire

### 1. Créer `public/manifest.json`

```json
{
  "name": "PortuFácil",
  "short_name": "PortuFácil",
  "description": "Apprenez le portugais brésilien de A1 à B2",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f8f4ef",
  "theme_color": "#1a3a5c",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["education", "lifestyle"],
  "lang": "fr"
}
```

### 2. Créer des icônes SVG de placeholder dans `public/`

Créer `public/icon.svg` — un carré vert avec "PF" en blanc (utilisé comme favicon fallback) :
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="80" fill="#2e7d32"/>
  <text x="256" y="320" font-family="Arial" font-size="220" font-weight="bold"
        fill="white" text-anchor="middle">PF</text>
</svg>
```

Créer `public/icon-192.png` et `public/icon-512.png` en utilisant le même SVG converti.
Si la conversion PNG n'est pas possible sans outil externe, créer les SVG et référencer
icon.svg dans le manifest à la place (avec `"type": "image/svg+xml"`).

### 3. Créer `public/sw.js` — Service Worker minimal

```js
const CACHE_NAME = 'portufacil-v1';
const ASSETS = [
  '/',
  '/index.html',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
```

### 4. Mettre à jour `index.html`

Ajouter dans `<head>` :
```html
<!-- PWA -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#1a3a5c">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="PortuFácil">
<link rel="apple-touch-icon" href="/icon.svg">
```

### 5. Enregistrer le Service Worker dans `src/main.js`

Ajouter à la fin du `DOMContentLoaded` listener :
```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
```

### 6. Mettre à jour `vite.config.js`

S'assurer que `public/` est bien configuré comme dossier statique (Vite le fait par défaut,
mais vérifier que `publicDir: 'public'` est présent ou que Vite utilise bien le défaut).

## Acceptance Criteria

- [ ] `public/manifest.json` existe avec les champs `name`, `short_name`, `icons`, `display: "standalone"`
- [ ] `public/sw.js` existe avec les handlers `install`, `activate`, `fetch`
- [ ] `index.html` contient `<link rel="manifest">` et `<meta name="theme-color">`
- [ ] `src/main.js` contient l'enregistrement du service worker
- [ ] `npm run build` passe sans erreur
- [ ] Le dossier `dist/` après build contient `manifest.json` et `sw.js`

**Output quand terminé :** `<promise>DONE</promise>`