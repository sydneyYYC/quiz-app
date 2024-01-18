// access score and set question iterator
let score = parseInt(localStorage.getItem('score')) || 0;
let currentQuestion = 0


// next button and return button variables
const nextButton = document.querySelector("#nextbtn") 
const returnBtn = document.querySelector("#return-btn")

// loop through these questions
function startQuiz() {
  
  document.querySelector("#question").innerHTML = questions[currentQuestion].question;
  document.querySelector("#answer-1").innerHTML = questions[currentQuestion].answers[0].text;
  document.querySelector("#answer-2").innerHTML = questions[currentQuestion].answers[1].text;
  document.querySelector("#answer-3").innerHTML = questions[currentQuestion].answers[2].text;
  document.querySelector("#answer-4").innerHTML = questions[currentQuestion].answers[3].text;
  //next button appears
  nextButton.innerHTML = "Next"
  returnBtn.classList.add("hidden");

};
  
// event handlers
nextButton.addEventListener("click", e => {
  nextQuestion();
});

  document.querySelector("#answer-1").addEventListener("click", e => {
   testCorrectness(0);
  });
  document.querySelector("#answer-2").addEventListener("click", e => {
    testCorrectness(1);
  });
   document.querySelector("#answer-3").addEventListener("click", e => {
    testCorrectness(2);
   });
   document.querySelector("#answer-4").addEventListener("click", e => {
    testCorrectness(3);
   });

   // loads quiz on page load
 startQuiz();

 
 // on answers click 
 function testCorrectness(i) {
   if (questions[currentQuestion].answers[i].correct === true ) {
     score++;
     let highestScore = parseInt(localStorage.getItem('highestScore')) || 0;
     
     // Update the highest score if the current score is higher
     if (score > highestScore) {
       highestScore = score;
       // Store the updated highest score in local storage
       localStorage.setItem('highestScore', highestScore);
      };
      localStorage.setItem('score', score);

      console.log('Current Score:', score);
      console.log('Highest Score:', highestScore);
    }
    else {
      document.getElementById("wrong").innerHTML = "Oops! That's not right";
    };
    // this disables all buttons after the answer is chosen TODO: make this into one line of selectors
  document.getElementById("answer-1").disabled = true;
  document.getElementById("answer-2").disabled = true;
  document.getElementById("answer-3").disabled = true;
  document.getElementById("answer-4").disabled = true;
  
  document.getElementById("answer-1").classList.add("grey:hover");

    // adds a grey background to indicate the buttons are no longer clickable
  document.getElementById("answer-1").classList.add("grey");
  document.getElementById("answer-2").classList.add("grey");
  document.getElementById("answer-3").classList.add("grey");
  document.getElementById("answer-4").classList.add("grey");
  
  // addClassIndicators()
};

// WORK IN PROGRESS - adding classes to the right and wrong answers after answering

// function addClassIndicators() {
//   // iterates through all answers and determines what is true and what is false
//     for (let i = 0; i < 4; i++){
//       // console.log( questions[currentQuestion].answers[i].correct );
//       // uses the iterator + answer # to inspect each answer 
//       const answerId = "answer-" + (i + 1);
//       const answerElement = document.getElementById(answerId);
      
//       if (answerElement) {
//         if (questions[currentQuestion].answers[i].correct === true) {
//         answerElement.classList.add("correct-answer");
//         // document.getElementById("answer-" + (i + 1)).classList.add("correct-answer");
//         console.log("true!");
//       }
//       else {
//         console.log ("false!");
//         answerElement.classList.add("incorrect-answer");
//         // document.getElementById("answer-" + (i + 1)).classList.add("incorrect-answer");
//       };
//     }; 
//   };
// };

 // next button changes to next question
function nextQuestion() {
  currentQuestion ++ ;
  progressBar(currentQuestion);
  // document.querySelector("barStatus");

  startQuiz();
  if (currentQuestion >= 3) {
    // finish quiz at last question
    nextButton.innerHTML = "Finish";
    nextButton.addEventListener("click", finishQuiz);

    
  };
  // removes 'wrong' text for next question
  document.getElementById("wrong").innerHTML = " "
  // this reenables all buttons for the next question TODO: also make this into one line of selectors
  document.getElementById("answer-1").disabled = false;
  document.getElementById("answer-2").disabled = false;
  document.getElementById("answer-3").disabled = false;
  document.getElementById("answer-4").disabled = false;
  
  //this removes the grey to visually indicate the buttons are clickable again
  document.getElementById("answer-1").classList.remove("grey");
  document.getElementById("answer-2").classList.remove("grey");
  document.getElementById("answer-3").classList.remove("grey");
  document.getElementById("answer-4").classList.remove("grey");
};

function finishQuiz(){
  document.querySelector('#score-heading').innerHTML = "Final Score";
  document.getElementById("display-score").innerHTML = score
  document.querySelector('#finish').innerHTML = "Thanks for Playing";
  document.getElementById("wrong").innerHTML = " " ;
  document.getElementById('quiz-box').classList.add("hidden");
  returnBtn.classList.remove("hidden");
  returnBtn.innerHTML = "Return to Main";

  localStorage.setItem('score', score);
  console.log('Updated Score:', score);
  // let score = newScore; 
};

// animates the progress bar to indicate how many questions left TODO: add ease or smoothing so its not so abrupt
function progressBar(i) {

  const elem = document.getElementById("barStatus");   
  let id = setInterval(frame, 10);
  function frame() {
    if (currentQuestion === 0) {

      elem.style.width = '25%';

    } else if (currentQuestion === 1){

      elem.style.width = '50%';
    }
    else if (currentQuestion === 2){

      elem.style.width = '75%';
    }
    else if (currentQuestion === 3){

      elem.style.width = '100%';
    }
  }

};


