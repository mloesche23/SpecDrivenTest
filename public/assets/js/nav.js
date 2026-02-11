// Highlight active nav link based on current path
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('[data-nav]');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach((a) => {
    const href = a.getAttribute('href');
    if (href && href.endsWith(path)) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });
});
