import './scss/style.scss';
import getResponse, { getScores } from './modules/api.js';

const renderScore = (scores) => {
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score-item');
    scoreItem.innerHTML = `<span>${user}</span>: <span>${score}</span>`;
    scoresList.appendChild(scoreItem);
  });
};

const form = document.querySelector('#add-score-form');
const inputName = form.querySelector('.input-name');
const inputScore = form.querySelector('.input-score');
const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  renderScore(data);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newPalyer = {
    user: inputName.value,
    score: inputScore.value,
  };
  getResponse(newPalyer);
  form.querySelector('.input-name').value = '';
  form.querySelector('.input-score').value = '';
});

window.onload = async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  renderScore(data);
};
