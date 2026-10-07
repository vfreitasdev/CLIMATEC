const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
if (menu && nav) {
  menu.hidden = false;
  document.documentElement.classList.add('js');
  const setMenu = open => { menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); };
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); } });
  document.addEventListener('click', event => { if (!nav.contains(event.target) && !menu.contains(event.target)) setMenu(false); });
  window.matchMedia('(min-width: 981px)').addEventListener('change', () => setMenu(false));
}
