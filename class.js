import { videos } from './videos.js';

const params = new URLSearchParams(location.search);
const n = params.get('class');
const id = videos[n];

const classNumbers = Object.keys(videos).sort((a, b) => Number(a) - Number(b));
const index = classNumbers.indexOf(n);

const badge = document.querySelector('#badge');
const title = document.querySelector('#title');
const msg = document.querySelector('#msg');
const videoWrap = document.querySelector('.video');
const frame = document.querySelector('#frame');
const pager = document.querySelector('#pager');

badge.textContent = n ?? '?';
title.textContent = n ? `Class ${n}` : 'Class not found';

if (id) {
  frame.src = `https://drive.google.com/file/d/${id}/preview`;
  msg.textContent = '';
} else {
  videoWrap.style.display = 'none';
  msg.textContent = n
    ? `Class ${n} video hasn't been added yet — check back soon.`
    : 'This class could not be found.';
}

// prev / next navigation
if (index > -1) {
  const prev = classNumbers[index - 1];
  const next = classNumbers[index + 1];

  pager.innerHTML = `
    ${prev
      ? `<a class="prev" href="class.html?class=${prev}"><span class="label">Previous</span>Class ${prev}</a>`
      : `<span class="placeholder"></span>`}
    ${next
      ? `<a class="next" href="class.html?class=${next}"><span class="label">Next</span>Class ${next}</a>`
      : `<span class="placeholder"></span>`}
  `;
}
