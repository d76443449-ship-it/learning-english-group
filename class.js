import { classes } from './classes.js';
const params = new URLSearchParams(location.search);
const classNo = Number(params.get('class'));
const link = classes[classNo];
if (!link) location.href = 'index.html';

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#classTitle').textContent = `Class ${classNo}`;
document.title = `Class ${classNo} | Learning English Group`;
document.querySelector('#driveOpen').href = link;

const folderId = new URL(link).pathname.split('/').filter(Boolean).pop();
document.querySelector('#driveFrame').src =
  `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;
