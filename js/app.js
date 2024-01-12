// 1 get question to populate
// 2 get answers to populate
// if right answer say "yes!"
// if wrong answer say wrong
// if right answer add to score tally
// move between questions and answers after answering

// score and question iterator
let score = 0
currentQuestion = 0
// next button 
nextButton = document.querySelector("#nextbtn") 
returnBtn = document.querySelector("#return-btn")
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
  
  nextButton.addEventListener("click", nextQuestion);
  // loads quiz on page load
 startQuiz();

  

  // on answers click 
 function testCorrectness(i) {
   if (questions[currentQuestion].answers[i].correct === true ) {
     score++;
     console.log(score);
     document.getElementById("display-score").innerHTML = score
    }
    else {
      document.getElementById("wrong").innerHTML = "Oops! That's not right"
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


 };

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
  document.querySelector('#finish').innerHTML = "Thanks for Playing";
  document.getElementById("wrong").innerHTML = " " ;
  document.getElementById('quiz-box').classList.add("hidden");
  returnBtn.classList.remove("hidden");
  returnBtn.innerHTML = "Return to Main";
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


