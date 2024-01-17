# Build notes of the creation of this app

I used a for loop to loop through each question, and moving to the next question by increasing "currentQuestion" by one.

Im having problems finishing the game at the right time. I cant make the finishgame() function run at the last question because it will finish the game too early. I cant change it to 4 because there is not another question to change to. 

I can :

Add a 4th question that never gets shown b/c it will be changed into a "hidden" class before the player can read it

I can see if i can load a final page that just displays score instead of the questions , maybe on a toggle?

I dont want to change the data i am given too much, it seems hacky . 

Note: need to add a "wrong" indicator

Now that medieval period is finished I want to move on to other periods, and a landing page.


https://codepen.io/parthkour/pen/KzqzLO - progress bar tutorial with vanilla js and css

NOTE: 2024-01-10

now I am running each js questions array as separate files and importing these arrays into my main JS file called app.js
This choice will cut down on code time and make it easier to add features as i only need to change 1 main file. 

This will be majorly helpful in the future as i continue to work on this project. 

TODO: import score using local storage 

NOTE : BUG 

i cannot use import/export unless my js file is described as module in the html
this however breaks the code that uses inline onclick functions to test the correctness of the answer

when i add a eventlistener it runs the function automatically if i call it as this: 

```
document.querySelector("#answer-1").addEventListener("click", testCorrectness(i));

```

HOWEVER i believe this is because i may need to nest my functions so it does not run on DOM upload but when clicked. 

using this syntax 
```
document.querySelector("#answer-1").addEventListener("click", e => {
  console.log('hello');
  // testCorrectness(0);
  });

```

i was able to achieve this, which was found by using this [video](https://www.youtube.com/watch?v=XF1_MlZ5l6M)
TODO: render score using import / export on index.html

TODO: save score to local storage 
