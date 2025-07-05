// Theme Toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});

// Page transition animation (optional enhancement)
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    link.querySelector('img').style.transform = 'scale(1.2)';
    setTimeout(() => {
      window.location = link.href;
    }, 500);
  });
});
const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  nav.classList.toggle('show');
});
