const hamburger = document.querySelector('#hamburger');
const navItems = document.querySelector('#nav-items');

hamburger.addEventListener('click', function (e) {
  hamburger.classList.toggle('open');
  navItems.classList.toggle('active');
  navItems.classList.toggle('hidden');
  console.log(navItems)
})