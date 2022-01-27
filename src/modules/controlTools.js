import { getScores } from './api.js';

export const renderScore = (scores) => {
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score-item');
    scoreItem.innerHTML = `<span>${user}</span>: <span>${score}</span>`;
    scoresList.appendChild(scoreItem);
  });
};

export const refreshData = async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  data.sort((player1, player2) => player2.score - player1.score);
  renderScore(data);
};
