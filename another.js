// Page of score in local storage and highest score storage

if (localStorage.getItem('score') === null) {
  localStorage.setItem('score', '0');
}


// Function to update and display the score on the index page
function updateAndDisplayScore() {
  // Retrieve the current score from local storage
  let currentScore = parseInt(localStorage.getItem('score')) || 0;
  let highestScore = parseInt(localStorage.getItem('highestScore')) || 0;

  // Log the updated score to the console
  console.log('Updated Score:', currentScore);
  console.log('Highest Score:', highestScore);

  // Display the updated score on the index page
  // document.getElementById('render-score').textContent = currentScore;
  document.getElementById('render-score').textContent = highestScore;
}

updateAndDisplayScore() 

