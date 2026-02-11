// Library logic placeholder; actual rendering in Phase 4 (US2)
(function () {
  function getQuery() {
    const q = new URLSearchParams(location.search);
    return { console: q.get('console') };
  }
  function card(game) {
    const href = `game.html?title=${encodeURIComponent(game.title)}`;
    const cls = consoleClass(game.console);
    const icon = iconForConsole(game.console);
    const alt = `${game.console} icon`;
    return `<a class="card ${cls}" href="${href}" aria-label="View ${game.title} details">
      <img class="console-icon" src="${icon}" alt="${alt}" loading="lazy" />
      <span class="dot" aria-hidden="true"></span>
      <strong>${game.title}</strong><br/>
      <span class="muted">${game.console}${game.year ? ` • ${game.year}` : ''}</span>
    </a>`;
  }
  function consoleClass(name) {
    const n = (name || '').toLowerCase();
    if (n === 'nes') return 'console-nes';
    if (n === 'snes') return 'console-snes';
    if (n === 'game boy') return 'console-gameboy';
    if (n === 'sega genesis') return 'console-genesis';
    if (n === 'playstation') return 'console-ps1';
    if (n === 'nintendo 64') return 'console-n64';
    return '';
  }
  function iconForConsole(name) {
    const n = (name || '').toLowerCase();
    if (n === 'nes') return 'assets/img/console-nes.svg';
    if (n === 'snes') return 'assets/img/console-snes.svg';
    if (n === 'game boy') return 'assets/img/console-gameboy.svg';
    if (n === 'sega genesis') return 'assets/img/console-genesis.svg';
    if (n === 'playstation') return 'assets/img/console-ps1.svg';
    if (n === 'nintendo 64') return 'assets/img/console-n64.svg';
    return 'assets/img/placeholder.svg';
  }
  async function loadGames() {
    const res = await fetch('assets/data/games.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error('Failed to load games.json');
    return res.json();
  }
  function render(target, games, filterConsole) {
    const list = target;
    list.innerHTML = '';
    let items = games;
    if (filterConsole) {
      const norm = filterConsole.toLowerCase();
      items = games.filter((g) => g.console.toLowerCase() === norm);
    }
    if (!items.length) {
      list.innerHTML = `<div class="card placeholder">No titles found${filterConsole ? ` for ${filterConsole}` : ''}.</div>`;
      return;
    }
    const html = items.map(card).join('');
    const note = filterConsole ? `<div class="filter-note">Filtered by: ${filterConsole}</div>` : '';
    list.insertAdjacentHTML('afterbegin', note + html);
  }
  async function init() {
    const target = document.getElementById('library-list');
    if (!target) return;
    const { console: filter } = getQuery();
    try {
      const games = await loadGames();
      render(target, games, filter);
    } catch (err) {
      target.innerHTML = `<div class="card placeholder">Unable to load library.</div>`;
    }
  }
  document.addEventListener('DOMContentLoaded', init);
})();
