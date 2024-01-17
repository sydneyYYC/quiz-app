// Import the updateAndExportScore function from app.js
import { updateAndExportScore } from '/js/app.js';

// Check if the score is saved in localStorage
let savedScore = localStorage.getItem('score');

if (savedScore !== null) {
  // Use the saved score
  console.log('Score from localStorage:', savedScore);
} else {
  console.log('Score not found in localStorage');
};


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