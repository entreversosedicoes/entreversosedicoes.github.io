const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.publication-card').forEach(card => {
  const image = card.querySelector('.book-cover');
  const label = card.querySelector('.color-label strong');
  const buttons = card.querySelectorAll('.swatch');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const source = button.dataset.src;
      const name = button.dataset.name;

      buttons.forEach(item => item.classList.remove('active'));
      button.classList.add('active');

      image.classList.add('changing');
      setTimeout(() => {
        image.src = source;
        image.alt = `Capa ${name} de ${card.querySelector('h3').textContent}`;
        label.textContent = name;
        image.classList.remove('changing');
      }, 140);
    });
  });
});
