//burger bar

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// Navbar movement
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll on click
function slowScrollToElement(elementId) {
  if (elementId === 'aboutarea') {
    var element = document.getElementById('aboutarea');
    var elementPosition = element.offsetTop;
  } else if (elementId === 'servicesarea') {
    var element = document.getElementById('servicesarea');
    var elementPosition = element.offsetTop;
  } else if (elementId === 'events') {
    var element = document.getElementById('events');
    var elementPosition = element.offsetTop;
  } else if (elementId === 'clientarea') {
    var element = document.getElementById('clientarea');
    var elementPosition = element.offsetTop;
  } else if (elementId === 'contactarea') {
    var element = document.getElementById('contactarea');
    var elementPosition = element.offsetTop;
  } else if (elementId === 'home') {
    var element = document.getElementById('home');
    var elementPosition = element.offsetTop;
  }
    var startPosition = window.pageYOffset;
    var distance = elementPosition - startPosition;
    var duration = 1200;
    var start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}
function easeInOutCubic(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};

// SCROLL INTO VIEW

AOS.init({
  duration: 1200,
})

