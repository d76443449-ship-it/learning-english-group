import { classes } from './classes.js';
const grid = document.querySelector('#classGrid');
const search = document.querySelector('#search');
function render(filter = '') {
  grid.innerHTML = '';
  Object.keys(classes).forEach((n) => {
    const label = `Class ${n}`;
    if (!label.toLowerCase().includes(filter.toLowerCase())) return;
    const card = document.createElement('a');
    card.className = 'class-card';
    card.href = `class.html?class=${n}`;
    card.innerHTML = `<span class="folder-icon">📁</span><span><strong>${label}</strong><small>Open class videos</small></span><b>→</b>`;
    grid.appendChild(card);
  });
}
render();
search.addEventListener('input', e => render(e.target.value));
document.querySelector('#year').textContent = new Date().getFullYear();
