/* ================================================
   RAM PORTFOLIO — Interactions & Animations
================================================ */

'use strict';

/* ── CUSTOM CURSOR ───────────────────────────── */

const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', (e) => {

  mouseX = e.clientX;
  mouseY = e.clientY;

  if (cursor) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  }

});

function animateRing() {

  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;

  if (cursorRing) {
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
  }

  requestAnimationFrame(animateRing);

}

animateRing();

/* ── CURSOR HOVER EFFECT ─────────────────────── */

document.querySelectorAll('a, button, .project-card').forEach(el => {

  el.addEventListener('mouseenter', () => {

    if (cursor) {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.opacity = '0.6';
    }

  });

  el.addEventListener('mouseleave', () => {

    if (cursor) {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = '1';
    }

  });

});

const loader = document.querySelector('.page-loader');

/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener('load', () => {

  setTimeout(() => {
    loader.classList.add('loader-hidden');
  }, 600);

});

/* =========================================
   PAGE TRANSITIONS
========================================= */

document.querySelectorAll('a').forEach(link => {

  const href = link.getAttribute('href');

  // ignore anchors, empty links, mail links
  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith('mailto') ||
    link.target === '_blank'
  ) {
    return;
  }

  link.addEventListener('click', e => {

    e.preventDefault();

    loader.classList.remove('loader-hidden');

    setTimeout(() => {
      window.location.href = href;
    }, 500);

  });

});
/* ── MOBILE NAV ──────────────────────────────── */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
console.log("menuToggle:", menuToggle);
console.log("navLinks:", navLinks);
let menuOpen = false;

if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {

    menuOpen = !menuOpen;

    navLinks.classList.toggle('active', menuOpen);

    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const spans = menuToggle.querySelectorAll('span');

    if (menuOpen) {

      spans[0].style.transform =
        'rotate(45deg) translate(5px, 5px)';

      spans[1].style.opacity = '0';

      spans[2].style.transform =
        'rotate(-45deg) translate(5px, -5px)';

    } else {

      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';

    }

  });

  navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      menuOpen = false;

      navLinks.classList.remove('active');

      document.body.style.overflow = '';

      const spans = menuToggle.querySelectorAll('span');

      spans.forEach(span => {

        span.style.transform = '';
        span.style.opacity = '';

      });

    });

  });

}

/* ── SCROLL REVEAL ───────────────────────────── */

const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('visible');

      revealObserver.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

/* ── NAV SCROLL EFFECT ───────────────────────── */

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {

  if (!nav) return;

  if (window.scrollY > 60) {


  } else {

    nav.style.background = '';
    nav.style.backdropFilter = '';
    nav.style.webkitBackdropFilter = '';

  }

}, { passive: true });

/*logo scroll*/
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('nav-scrolled');
  } else {
    header.classList.remove('nav-scrolled');
  }
});

/* ── HERO TYPEWRITER ─────────────────────────── */

function typewriterEffect(el, text, speed = 35) {

  el.textContent = '';

  let i = 0;

  const timer = setInterval(() => {

    el.textContent += text[i];

    i++;

    if (i >= text.length) {
      clearInterval(timer);
    }

  }, speed);

}

const typedTarget = document.querySelector('.typed-text');

if (typedTarget) {

  setTimeout(() => {

    typewriterEffect(
      typedTarget,
      'good story teller'
    );

  }, 600);

}

/* ── PROJECT CARD GLOW ───────────────────────── */

document.querySelectorAll('.project-card').forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--mouse-x', x + '%');
    card.style.setProperty('--mouse-y', y + '%');

  });

});

/* ── SMOOTH SCROLL ───────────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', (e) => {

    const target =
      document.querySelector(link.getAttribute('href'));

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  });

});

/* ── STATS COUNTER ───────────────────────────── */

function animateCounter(el, target, suffix = '') {

  const duration = 1800;

  const start = performance.now();

  function update(now) {

    const elapsed = now - start;

    const progress =
      Math.min(elapsed / duration, 1);

    const eased =
      1 - Math.pow(1 - progress, 3);

    const value =
      Math.round(eased * target);

    el.textContent = value + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }

  }

  requestAnimationFrame(update);

}

const statNumbers =
  document.querySelectorAll('[data-count]');

const statsObserver =
  new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const el = entry.target;

        const target =
          parseInt(el.dataset.count);

        const suffix =
          el.dataset.suffix || '';

        animateCounter(el, target, suffix);

        statsObserver.unobserve(el);

      }

    });

  }, {
    threshold: 0.5
  });

statNumbers.forEach(el =>
  statsObserver.observe(el)
);

/* ── PAGE LOAD FADE ──────────────────────────── */

window.addEventListener('load', () => {

  document.body.style.opacity = '0';

  document.body.style.transition =
    'opacity 0.5s ease';

  requestAnimationFrame(() => {

    document.body.style.opacity = '1';

  });

});