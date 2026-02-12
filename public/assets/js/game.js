// Game details placeholder; actual rendering in Phase 4 (US2)
(function () {
  function getQuery() {
    const q = new URLSearchParams(location.search);
    return { title: q.get('title') };
  }
  async function loadGames() {
    const res = await fetch('assets/data/games.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error('Failed to load games.json');
    return res.json();
  }
  function slugify(text) {
    return String(text || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  function notFound(el, title) {
    el.innerHTML = `<h2>Not found</h2><p class="muted">No details for ${title || 'this game'}.</p>`;
  }
  async function init() {
    const el = document.getElementById('game-details');
    if (!el) return;
    const { title } = getQuery();
    if (!title) {
      notFound(el);
      return;
    }
    try {
      const games = await loadGames();
      const decoded = decodeURIComponent(title);
      const game = games.find((g) => g.title === decoded);
      if (!game) return notFound(el, decoded);
      const slug = slugify(game.title);
      const cover = `assets/img/covers/${slug}.jpg`;
      el.innerHTML = `
        <img class="cover cover-large" src="${cover}" alt="Cover art for ${game.title}" loading="lazy" onerror="this.src='assets/img/cover-placeholder.svg'" />
        <h2>${game.title}</h2>
        <p><strong>Console:</strong> ${game.console}${game.year ? ` • ${game.year}` : ''}</p>
        <p class="muted">Informational only. No emulation or downloads.</p>
      `;
    } catch (err) {
      notFound(el, title);
    }
  }
  document.addEventListener('DOMContentLoaded', init);
})();
