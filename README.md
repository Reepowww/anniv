# ♡ anniversary-site

A handcrafted, cinematic anniversary website. Built with React + Vite + Tailwind.

---

## Quick start

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # → /dist (ready to deploy)
```

---

## Project structure

```
anniversary-site/
├── src/
│   ├── data/
│   │   └── siteData.js          ← YOUR CONTENT GOES HERE — start here
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Landing.jsx      # 01 — terminal typewriter intro
│   │   │   ├── Origin.jsx       # 02 — how you met + git log
│   │   │   ├── Timeline.jsx     # 03 — scrollable memory journey
│   │   │   ├── OurData.jsx      # 04 — DS charts + stats + funny metrics
│   │   │   ├── Gallery.jsx      # 05 — cinematic photo gallery
│   │   │   └── Letter.jsx       # 06 — the letter (scroll-locked)
│   │   │
│   │   ├── ui/
│   │   │   └── index.jsx        # Shared UI components (reusable)
│   │   │
│   │   └── layout/
│   │       └── Transitions.jsx  # Section dividers + scene breaks
│   │
│   ├── hooks/
│   │   └── index.js             # useReveal, useCountUp, useTypewriter, etc.
│   │
│   ├── styles/
│   │   └── globals.css          # Tailwind base + custom utilities
│   │
│   ├── assets/                  # Put photos here
│   │   ├── images/              # ← your photos go here
│   │   └── audio/               # ← optional background music
│   │
│   ├── App.jsx                  # Root — assembles all sections
│   └── main.jsx                 # Entry point
│
├── .github/workflows/
│   └── deploy.yml               # Auto-deploys to GitHub Pages on push
│
├── tailwind.config.js           # Design tokens (colors, fonts, animations)
├── vite.config.js               # Change `base` to your repo name
└── index.html                   # Font imports, tab title
```

---

## How to customize — in order of priority

### 1. Fill in siteData.js first
Everything is in `src/data/siteData.js`. This is the only file you need to edit
for content. Components pull from it automatically.

**Start with:**
- `NAMES` and `DATES` at the top
- `LANDING.typewriterLines` — rewrite these in your voice
- `ORIGIN.paragraphs` and `ORIGIN.commitLog`
- `TIMELINE.events` — fill in each memory
- `OUR_DATA` stats and funny metrics
- `GALLERY.memories` — add your photos (see below)
- `LETTER.body` — write this last; it's the most important part

### 2. Add photos

Place photos in `src/assets/images/`. Then reference them in siteData.js:

```js
// In TIMELINE.events:
image: '/images/first-date.jpg',  // note: no /src/assets prefix needed

// In GALLERY.memories:
image: '/images/memory-1.jpg',
```

Recommended sizes:
- Timeline photos: 800×500px (landscape)
- Gallery large: 1200×900px
- Gallery medium/small: 600×800px (portrait)

### 3. Adjust the color palette (optional)

Edit `tailwind.config.js` → `theme.extend.colors`. The whole site uses these tokens:
- `rose` — the main warm accent (default: a muted salmon)
- `sage` — secondary accent (default: muted green)
- `gold` — highlight color
- `bg` — background (default: near-black)
- `cream` — primary text

### 4. Change fonts (optional)

Edit `index.html` to swap Google Fonts links, then update `tailwind.config.js`:
- `font-display` — cinematic serif (current: Cormorant Garamond)
- `font-body` — clean body (current: DM Sans)
- `font-mono` — terminal DS style (current: JetBrains Mono)

---

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `our-year`)
2. In `vite.config.js`, change `base` to match your repo name:
   ```js
   base: '/our-year/',
   ```
3. Push to `main` branch
4. Go to repo Settings → Pages → Source: **GitHub Actions**
5. The workflow in `.github/workflows/deploy.yml` handles the rest automatically

Your site will be live at: `https://yourusername.github.io/our-year/`

---

## Development roadmap

### Phase 1 — Content (do this first)
- [ ] Fill in all content in `siteData.js`
- [ ] Write the letter (`LETTER.body`)
- [ ] Add real photos to timeline and gallery
- [ ] Test on mobile

### Phase 2 — Polish
- [ ] Tune typewriter timing in Landing (charDelay / lineDelay)
- [ ] Adjust scroll unlock threshold in Letter.jsx (UNLOCK_THRESHOLD)
- [ ] Customize the color palette to match her taste
- [ ] Add/remove timeline events to match your actual year

### Phase 3 — Extras (optional but fun)
- [ ] Add a subtle ambient soundtrack (see audio section below)
- [ ] Add a Leaflet.js map in Origin showing where you met
- [ ] Add a heatmap of your messages using a library like react-calendar-heatmap
- [ ] Add particle effects on the landing page (tsparticles)
- [ ] Add a "polaroid" scatter layout option for the gallery

### Phase 4 — Final delivery
- [ ] Deploy to GitHub Pages
- [ ] Test the full scroll-through on mobile
- [ ] Verify the letter unlocks correctly
- [ ] Share the URL ♡

---

## Adding background music (optional)

Place an audio file in `src/assets/audio/`. Then in `Landing.jsx`, add:

```jsx
// At the top of LandingSection, after isDone becomes true:
useEffect(() => {
  if (isDone) {
    const audio = new Audio('/audio/your-song.mp3')
    audio.volume = 0.15
    audio.loop = true
    // Only autoplay after a user interaction — browsers require it
    document.addEventListener('click', () => audio.play(), { once: true })
  }
}, [isDone])
```

---

## Key decisions & why

| Decision | Reason |
|---|---|
| Vite over CRA or Next.js | Faster dev server, simpler GH Pages config |
| Recharts for DS charts | Clean API, good defaults, responsive |
| Custom hooks over Framer Motion | Lighter bundle; Framer Motion still available if needed |
| Single siteData.js | One file to edit = easier to personalize later |
| Tailwind | Fast iteration on spacing/color tokens |
| Scroll-unlock for letter | Creates an earned emotional payoff |

---

*Made with too many late nights and a lot of love.*
