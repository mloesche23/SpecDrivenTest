// Highlight active nav link based on current path
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('[data-nav]');
  const currentPath = (location.pathname || '/').replace(/\/+$/, '') || '/';
  links.forEach((a) => {
    const href = a.getAttribute('href') || '/';
    const linkPath = new URL(href, location.origin).pathname.replace(/\/+$/, '') || '/';
    if (linkPath === currentPath) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    } else {
      a.classList.remove('active');
      a.removeAttribute('aria-current');
    }
  });
});
