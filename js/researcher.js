'use strict';
document.documentElement.classList.add('has-js');
const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
function closeMenu() { header.classList.remove('nav-open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  header.classList.toggle('nav-open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
const media = window.matchMedia('(min-width: 761px)');
media.addEventListener('change', () => { if (media.matches) closeMenu(); });
document.querySelector('.pub-filters').hidden = false;
const publications = [...document.querySelectorAll('.publication')];
const filters = [...document.querySelectorAll('[data-filter]')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(other => { const active = other === button; other.classList.toggle('selected', active); other.setAttribute('aria-pressed', String(active)); });
  publications.forEach(pub => { pub.hidden = button.dataset.filter !== 'all' && pub.dataset.kind !== button.dataset.filter; });
  const count = publications.filter(pub => !pub.hidden).length;
  document.querySelector('.filter-status').textContent = `${count} publications shown.`;
}));
document.querySelectorAll('.copy-citation').forEach(button => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const citation = button.closest('.publication').querySelector('.citation-copy');
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(citation.textContent);
      button.textContent = 'Copied';
      document.querySelector('#copy-status').textContent = 'Citation copied to clipboard.';
      window.setTimeout(() => { button.textContent = 'Copy citation'; }, 2000);
    } catch {
      citation.hidden = false;
      button.textContent = 'Citation shown below';
      document.querySelector('#copy-status').textContent = 'Select and copy the citation shown below.';
    }
  });
});
if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main section[id]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll('a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();
