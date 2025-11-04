window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax__bg');
  const scrolled = window.pageYOffset;
  const rate = scrolled * 0.01; 
  parallax.style.transform = `translate3d(0px, ${rate}px, 0px)`;
});

let latestScrollY = 0;
let ticking = false;

function onScroll() {
  latestScrollY = window.pageYOffset;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  ticking = false;
  const parallax = document.querySelector('.parallax__bg');
  const rate = latestScrollY * 0.01;
  parallax.style.transform = `translate3d(0px, ${rate}px, 0px)`;
}

window.addEventListener('scroll', onScroll);
