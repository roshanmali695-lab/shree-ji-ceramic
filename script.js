document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('siteHeader');
const setHeaderState = () => {
  header.classList.toggle('solid', window.scrollY > 40);
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});
