(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (!button || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  };

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
})();
