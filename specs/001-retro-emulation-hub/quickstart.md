# Quickstart: Retro Emulation Hub

This feature delivers a static site with a landing page (consoles), a library (retro titles), and settings (Light/Dark theme). No emulation or downloads.

## Local Development

```sh
# Serve the static site locally
cd public
python3 -m http.server 8000
# Open http://localhost:8000/
```

## Pre-Release Checks

1. Validate HTML structure
   ```sh
   npm run html:lint
   ```
2. Check internal links
   ```sh
   npm run links:check
   ```
3. Lighthouse audit (browser devtools)
   - Accessibility ≥ 90
   - Performance ≥ 90
   - Ensure first content visible ≤ 3s on typical 4G
4. Image optimization
   - Compress large assets
   - Use `loading="lazy"` for non-critical images
5. Accessibility basics
   - Semantic landmarks (`header`, `main`, `footer`)
   - Visible focus styles
   - Alt text for images
   - Skip-to-content link present

## Structure

- `public/`
  - `index.html` (landing)
  - `library.html` (library)
  - `game.html` (details)
  - `settings.html` (theme)
  - `assets/css/styles.css`
  - `assets/js/{theme,nav,library,game}.js`
  - `assets/img/placeholder.svg`

## Notes

- Informational only — no ROMs or emulation functionality
- Progressive enhancement — site readable without JS
