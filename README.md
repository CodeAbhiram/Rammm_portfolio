# Ram — Sr. UI/UX Designer Portfolio

Production-quality portfolio website built from the Figma design file

## Tech Stack

**Pure HTML5 + CSS3 + Vanilla JS** — chosen because:
- The design is a static portfolio (no dynamic data)
- Zero build tooling needed; opens directly in browser
- Maximum performance (no framework overhead)
- Easy to deploy anywhere (Netlify, Vercel, GitHub Pages)

## Project Structure

```
portfolio/
├── index.html              # Single-page application
├── css/
│   └── style.css           # ~600 lines, full responsive design
├── js/
│   └── main.js             # Interactions, cursor, animations
├── assets/
│   └── images/             # All project screenshots + logos from Figma
│       ├── avatar.jpg      # Profile photo
│       ├── project-*.png   # Project case study images
│       ├── logo-*.png      # Client/employer logos
│       └── basic-dark.png  # Dark brand assets
└── README.md
```

## Features Implemented

- **Two-column sticky layout** matching Figma exactly
- **Custom animated cursor** with ring follow effect
- **Scroll reveal animations** (IntersectionObserver)
- **Animated stat counters** on scroll into view
- **Typewriter effect** on hero tagline
- **Project card hover** with lift + glow
- **Sticky right column** (About/Profile scrolls independently)
- **Mobile responsive** — stacks at 1024px, mobile nav at 768px
- **Animated avatar ring** (CSS conic-gradient rotation)
- **Noise texture overlay** for premium feel
- **Glassmorphism nav** on scroll
- **Smooth scroll** for all anchor links

## Running Locally

No build step needed. Just open in browser:

```bash
# Option 1: Double-click index.html
open index.html

# Option 2: Local server (recommended for full asset loading)
python3 -m http.server 3000
# then visit http://localhost:3000

# Option 3: npx serve
npx serve .
```

## Deployment

### Netlify (drag & drop)
1. Go to https://netlify.com
2. Drag the entire `portfolio/` folder onto the deploy area
3. Live in ~10 seconds

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create ram-portfolio --public
git push -u origin main
# Enable Pages in repo Settings → Pages → main branch
```

### Vercel
```bash
npx vercel deploy
```

## Customisation

All design tokens are CSS variables in `:root` inside `style.css`:
- `--accent` — orange highlight colour (#e8883a)
- `--bg` — page background (#1c1c1c)
- `--font-display` — Playfair Display (headings)
- `--font-body` — DM Sans (body text)

Update `index.html` with real email, social links, and project URLs.

## Design Assumptions

1. **Name**: "Ram" (from "Hello, I'm ram" in Figma)
2. **Tagline**: "good story teller" (visible in Figma right column)
3. **Role**: Sr. UI/UX Consultant at Stellar Innovations (logo visible in Figma)
4. **Projects**: BASIC Home Loan, Scre-nate/IDA, Oiot (all confirmed from project screenshots in Figma)
5. **Tone**: Editorial + dark, matching `#1e1e1e` background from Figma meta.json
6. **Emoji accents** (✦, 🤎, 🤩) used in Figma headlines — preserved where readable
7. **Two-column layout** preserved from Figma: left = projects, right = sticky about

## Reusable Components

- `.project-card` + modifiers (`.dark-card`, `.ida-card`) — drop in any project
- `.skill-item` — add to `.skills-grid` for new skills
- `.exp-item` — add to experience section
- `.social-link` — add to contact section
- `.reveal` + `.reveal-delay-N` — apply to any element for scroll animation
