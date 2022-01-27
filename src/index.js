import './scss/style.scss';
import getResponse from './modules/api.js';
import { refreshData } from './modules/controlTools.js';

const form = document.querySelector('#add-score-form');
const inputName = form.querySelector('.input-name');
const inputScore = form.querySelector('.input-score');
const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', async () => {
  refreshData();
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newPalyer = {
    user: inputName.value,
    score: inputScore.value,
  };
  await getResponse(newPalyer);
  form.reset();
  refreshData();
});

window.onload = async () => {
  refreshData();
};
