export const mainLayout = document.querySelector('#main-container');
mainLayout.classList.add('main-container');

export const section = document.createElement('section');
section.classList.add('scores-container');
section.innerHTML = `<section>
                       <h1 class="leaderborder-title">Leaderboard</h1>
                       <div class="leaderboard-container">
                         <div class="recent-scores">
                           <div class="title">
                             <h2>Recent Scores</h2>
                             <button class="refresh-btn clickable" type="button">Refresh</button>
                           </div>
                           <ul class="scores-list">
                             <li class="score-item">
                               <span>Name: </span>
                               <span>100</span>
                             </li>
                             <li class="score-item">
                               <span>Name: </span>
                               <span>50</span>
                             </li>
                             <li class="score-item">
                               <span>Name: </span>
                               <span>78</span>
                             </li>
                             <li class="score-item">
                               <span>Name: </span>
                               <span>63</span>
                             </li>
                             <li class="score-item">
                               <span>Name: </span>
                               <span>79</span>
                             </li>
                             <li class="score-item">
                               <span>Name: </span>
                               <span>56</span>
                             </li>
                             <li class="score-item">
                               <span>Name: </span>
                               <span>83</span>
                             </li>
                           </ul>
                         </div>
                         <form class="form">
                           <h2>Add your scores</h2>
                           <input type="text" class="input-name" placeholder="Your Name">
                           <input type="text" class="input-score" placeholder="Your Score">
                           <button class="submit-btn clickable" type="button">Submit</button>
                         </form>
                       </div>
                       
                     </section>`;