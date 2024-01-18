// define score HERE and export it to app.js because this loads first 

// export let score = 0;

// put score in local storage
// localStorage.setItem('score', '0');

// console.log(score);

// Check if the score is already in local storage; if not, set it to 0
// if (localStorage.getItem('score') === null) {
//   localStorage.setItem('score', '0');
// };

if (localStorage.getItem('score') === null) {
  localStorage.setItem('score', '0');
}
// Function to update and display the score on the index page
function updateAndDisplayScore() {
  // Retrieve the current score from local storage
  let currentScore = parseInt(localStorage.getItem('score')) || 0;

  // Log the updated score to the console
  console.log('Updated Score:', currentScore);

  // Display the updated score on the index page
  document.getElementById('render-score').textContent = currentScore;
}

updateAndDisplayScore() 

// function startQuiz() {
//   // Set initial score
//   localStorage.setItem('score', '0');
//   // Redirect to the first quiz page
//   window.location.href = '/quiz/med.html';
// };


// Import the updateAndExportScore function from app.js
// import { updateAndExportScore } from '/js/app.js';

// // Check if the score is saved in localStorage
// let savedScore = localStorage.getItem('score');

// if (savedScore !== null) {
//   // Use the saved score
//   console.log('Score from localStorage:', savedScore);
// } else {
//   console.log('Score not found in localStorage');
// };


// import { updateAndExportScore } from './js/app.js';

// // Call the function to update and export the score
// updateAndExportScore(42);

// // Now you can access the score variable
// console.log(updateAndExportScore);


// // otherFile.js
// import { initializeScore, getScore } from '/js/score.js';

// // Use the getScore function to retrieve the score
// let myScore = getScore();

// console.log(myScore);