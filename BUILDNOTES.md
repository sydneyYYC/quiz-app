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