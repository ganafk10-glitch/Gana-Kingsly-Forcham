/* Vanilla JavaScript: navigation, theme, reveal animations and minor UX enhancements. */
(() => {
  const root = document.documentElement;
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const themeToggle = document.querySelector('.theme-toggle');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');

  themeToggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
  });

  navToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
})();
