const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const dots = document.querySelectorAll('.slide-dot');
// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
dots[counter - 1].style.backgroundColor = '#fff';

// Button listeners

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 1s ease-in-out';
  counter++;
  hoverDots();
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 1s ease-in-out';
  counter--;
  hoverDots();
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

let hoverDots = (hoveredDot) => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "transparent";
  };

  if (hoveredDot === 1) {
    dots[hoveredDot - 1].style.backgroundColor = '#fff';
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * hoveredDot) + 'px)';
    counter = 1;
  };
  if (hoveredDot === 2) {
    dots[hoveredDot - 1].style.backgroundColor = '#fff';
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * hoveredDot) + 'px)';
    counter = 2;
  };
  if (hoveredDot === 3) {
    dots[hoveredDot - 1].style.backgroundColor = '#fff';
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * hoveredDot) + 'px)';
    counter = 3;
  };

  if (hoveredDot) return;

  if (counter === 0) {dots[counter + 2].style.backgroundColor = '#fff';}
  if (counter === 4) {dots[counter - 4].style.backgroundColor = '#fff';}
  if (counter > 0 && counter < 4) {dots[counter - 1].style.backgroundColor = '#fff';}
}
