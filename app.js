import { videos } from './videos.js';

const grid = document.querySelector('#grid');
const search = document.querySelector('#s');
const statLine = document.querySelector('#stat');
const heroInner = document.querySelector('#heroInner');

const classNumbers = Object.keys(videos).sort((a, b) => Number(a) - Number(b));
const readyCount = classNumbers.filter(n => videos[n]).length;

statLine.textContent = `${classNumbers.length}টি ক্লাসের মধ্যে ${readyCount}টি এখন দেখা যাচ্ছে`;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = window.matchMedia('(hover: hover)').matches;

/* subtle hero parallax, following the pointer */
if (!reduceMotion && canHover && heroInner) {
  window.addEventListener('pointermove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * -10;
    heroInner.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
}

let observer;
if (!reduceMotion) {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
}

/* 3D pointer-tilt + spotlight glow for a card */
function attachTilt(card) {
  if (!canHover || reduceMotion) return;
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 16;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

function render() {
  const query = search.value.trim().toLowerCase();
  const matches = classNumbers.filter(n => `class ${n}`.includes(query));

  grid.innerHTML = '';

  if (matches.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty-msg';
    empty.textContent = 'কোনো ক্লাস পাওয়া যায়নি। অন্য কিছু লিখে দেখো।';
    grid.appendChild(empty);
    return;
  }

  matches.forEach((n, i) => {
    const ready = Boolean(videos[n]);
    const card = document.createElement('a');
    card.href = `class.html?class=${n}`;
    card.className = 'card';
    card.style.transitionDelay = reduceMotion ? '0ms' : `${Math.min(i, 14) * 45}ms`;
    card.innerHTML = `
      <span class="card-num">${String(n).padStart(2, '0')}</span>
      <span class="card-title">Class ${n}</span>
      <span class="status ${ready ? 'ready' : 'soon'}">${ready ? 'Watch Video' : 'Coming Soon'}</span>
    `;
    grid.appendChild(card);
    attachTilt(card);
    if (reduceMotion) {
      card.classList.add('in');
    } else {
      observer.observe(card);
    }
  });
}

search.addEventListener('input', render);
render();
