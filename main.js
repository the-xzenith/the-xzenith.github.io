// CURSOR
const cur = document.getElementById('cur');
const ring = document.getElementById('curRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.classList.add('big'); ring.classList.add('big'); });
  el.addEventListener('mouseleave', () => { cur.classList.remove('big'); ring.classList.remove('big'); });
});

// SCROLL REVEAL
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('in'), i * 75);
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// NAV ACTIVE STATE
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(11,11,11,0.97)';
  } else {
    nav.style.background = 'linear-gradient(to bottom, rgba(11,11,11,.96) 0%, transparent 100%)';
  }
});
