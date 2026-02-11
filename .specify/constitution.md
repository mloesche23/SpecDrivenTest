# TestSite Constitution

## Core Principles

### I. Static-First
The application consists solely of static assets (HTML, CSS, and JavaScript) served over HTTPS. No server-side code, databases, or dynamic rendering at runtime. Client-side enhancements are progressive and optional; the core content remains fully accessible without JavaScript.

### II. Accessibility & Performance Basics
Adopt semantic HTML, meaningful alt text for images, and a logical focus order. Optimize for fast initial load: compress and properly size images, defer non-critical JavaScript, and keep critical JS under 100KB. Aim for Core Web Vitals baselines suitable for a 4G connection.

### III. Content-Driven
Structure pages so content changes rarely require code changes. Keep content and presentation separated where practical. Prefer simple layouts and avoid complex frameworks unless clearly justified.

### IV. Build & Deploy Simplicity
Keep the build minimal (optional minification/optimization). Deploy to static hosting (e.g., GitHub Pages, Netlify, or Vercel). No runtime dependencies on servers or services are required for page rendering. Configure sensible caching for assets.

### V. Versioning & Simplicity
Use semantic versioning (MAJOR.MINOR.PATCH). Favor the simplest approach; avoid introducing tools, frameworks, or pipelines unless necessary (YAGNI).

## Additional Constraints

**Technology Stack**: HTML5, CSS3, and vanilla JavaScript. A static site generator is optional; any dependencies should be dev-only.

**Security**: Serve over HTTPS; avoid collecting or storing personal data. Audit third-party scripts and only include trusted sources.

**Performance Standards**: Target LCP < 2.5s on a typical 4G device; lazy-load non-critical images; ship optimized assets; avoid blocking scripts/styles above the fold.

## Development Workflow

- Keep changes small and reviewable. A lightweight review is preferred before release.
- Pre-release checks: validate HTML, scan for broken links, and run a Lighthouse check aiming for >90 in Performance and Accessibility.
- If a build step exists, ensure `build` completes without errors. If linting exists, ensure `lint` passes.

## Governance
This constitution governs the static site’s practices and supersedes ad-hoc approaches. Amendments require a documented PR, rationale, and a version bump. All changes must confirm compliance with Accessibility, Performance, and Security basics. Use `README.md` for runtime guidance and project-specific details.

**Version**: 1.0.0 | **Ratified**: 2026-02-11 | **Last Amended**: 2026-02-11
