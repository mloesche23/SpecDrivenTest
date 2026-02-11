# Retro Emulation Hub (Static Site)

A simple, static web app showcasing retro console options, a curated game library (titles only, no downloads/emulation), and a settings page to toggle Light/Dark themes.

## Quickstart

```sh
# Serve the static site locally (macOS default Python)
cd public
python3 -m http.server 8000
# Then open http://localhost:8000/
```

## Pages

- `index.html`: Landing page with console options
- `library.html`: Game library (Phase 4 will populate from JSON)
- `game.html`: Game details view (uses `?title=`)
- `settings.html`: Theme toggle (Light/Dark)

## Pre-Release Checklist

- Validate HTML (planned via dev script)
- Check internal links (planned via dev script)
- Lighthouse check ≥90 for Performance & Accessibility
- Ensure images are optimized and non-critical images use `loading="lazy"`

### Hosting & HTTPS

- Deploy to static hosting (e.g., GitHub Pages, Netlify, Vercel)
- Ensure HTTPS is enabled and redirects from HTTP
- Configure sensible caching for assets (CSS/JS/images)

## Notes
-
## Deploy to GitHub + Vercel

### 1) Save to GitHub

```sh
cd /Users/loescher/testSite
# Initialize repo if not already
git init
git add -A
git commit -m "Initial static site: landing, library, settings"

# Create a new GitHub repo (via website) named e.g. retro-emulation-hub
# Then set the remote here (replace USERNAME/REPO as appropriate):
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

If you use SSH remotes:

```sh
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

### 2) Deploy on Vercel

- Sign in at vercel.com → New Project → Import your GitHub repo
- Root Directory: the repo root (contains `public/`)
- Framework Preset: Other
- Output Directory: `public`
- Alternatively, this repo includes `vercel.json` with static builds and routes for clean URLs
- Click Deploy

### Optional: Clean URLs locally

`vercel.json` maps:

- `/` → `public/index.html`
- `/library` → `public/library.html`
- `/settings` → `public/settings.html`
- `/game` → `public/game.html`
- `/assets/*` → `public/assets/*`


- Informational only: No emulation functionality or downloads
- Accessibility-first: Semantic HTML, visible focus, alt text, skip link
- Progressive enhancement: Content readable without JavaScript
- Third-party scripts: Avoid unless necessary; audit sources and load asynchronously