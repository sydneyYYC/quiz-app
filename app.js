// 1 get question to populate
// 2 get answers to populate
// if right answer say "yes!"
// if wrong answer say wrong
// if right answer add to score tally
// loop between questions and answers in an array

let questions = [
  {question : "What does art from this period mostly reflect?",
    answers: [
      {text: "Early Christian Church, the traditions of the Roman Empire and the Artistic Culture of Northern Europe", correct: true},
      {text: "Iconic Figures and Animals, bedazzled in jewels", correct: false},
      {text: "Weird Jesus Babies. Why do they look like that?", correct: false},
      {text: "Ancient texts mixed with images of ordinary people", correct:false}
    ]
  },
  {question : "What was a popular symbol included in depictions of the Madonna and Child that the child is often seen doing?",
  answers: [
    {text: "An open palm", correct: false},
    {text: "A sword", correct:false},
    {text: "A peace sign", correct: true},
    {text: "A golden ball", correct: false},
  ]
},
{question : "What was a popular style of architecture for buildings in the gothic style?", 
  answers: [
    {text: "Dark Stone", correct: false},
    {text: "Pointed Arches", correct: true},
    {text: "Big Doors", correct: false},
    {text: "All of the Above", correct: false},
  ]
},
{question: "Why did art become so important for spreading information during the medieval period?",
answers: [
  {text: "Because art is super cool", correct:false},
  {text: "A surplus of paper, ink and excellent distribution", correct: false},
  {text: "It made the church look more powerful", correct: false},
  {text: "Most people could not read", correct: true}
]}
];

let score = 0
currentQuestion = 0
// loop through these questions
function startQuiz() {
    document.querySelector("#question").innerHTML = questions[currentQuestion].question;

    document.querySelector("#answer-1").innerHTML = questions[currentQuestion].answers[0].text;
    document.querySelector("#answer-2").innerHTML = questions[currentQuestion].answers[1].text;
    document.querySelector("#answer-3").innerHTML = questions[currentQuestion].answers[2].text;
    document.querySelector("#answer-4").innerHTML = questions[currentQuestion].answers[3].text;
    //next button appears
    document.querySelector("#nextbtn").innerHTML = "next"
  };

  startQuiz()

function nextQuestion() {
  currentQuestion ++ ;
  console.log(currentQuestion);
  startQuiz(currentQuestion);
  // if this is the last question, hide the next button
  if (currentQuestion === 3) {
    document.querySelector("#nextbtn").classList.add("hidden");
  };
};

// document.querySelector("#next").addEventListener("click");


