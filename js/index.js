const hamburger = document.querySelector('#hamburger');
const navItems = document.querySelector('#nav-items');

hamburger.addEventListener('click', function (e) {
  hamburger.classList.toggle('open');
  navItems.classList.toggle('active');
  navItems.classList.toggle('hidden');
  console.log(navItems)
})

let slideIndex = 1;
showSlides(slideIndex)

//dots functionality
function currentSlide(index) {
  showSlides(slideIndex = index);
}

function showSlides(index) {
  const reviews = document.querySelectorAll('.review');
  const dots = document.querySelectorAll('.dot');
  if (index > reviews.length) { slideIndex = 1 }
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }
  reviews[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';
}

setInterval(() => {
  showSlides(slideIndex += 1)
}, 3000)