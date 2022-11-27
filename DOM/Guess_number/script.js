' use strict';
// Now in js if we want to select any class we write
// document.querySelector(.class name)
// if it is id document.querySelector(.id)

// This will select the entire class
// document.querySelector('.playAgain')
// // If we want want the text elements it had
// console.log(document.querySelector('playAgain').textContent)
// If we have multiple dots, they are executed from left to right


// Now we want that the right section of main, which has one class named as message. It has content written as start guessing. We want it to be changed with Correct number 

// document.querySelector('.message').textContent = "Correct Guess ✔"

// // For manuplating the input field, we use
// document.querySelector('.Number').value = 50;

// // Setting up this in if condition
// if (document.querySelector('.Number').value == 50){
//     document.querySelector('.message').textContent = "Correct Guess ✔";
// }else{
//     document.querySelector('.message').textContent = "Sorry Wrong Guess 😒";
// }

// Now what if we want to have something, such as whatever we write in the input box, and  by clicking the submit button, it should print that value. 

// so for that we use one event lister
// The first argument = what event it should focus on
// The second argument represent, what it should do, if the presecribed event has been done. It must be a function


// Randmoly generated number
const randNum = Math.floor(Math.random() * 50) + 10;
console.log(randNum)
let high_score = 0;
let my_score = 10;
document.querySelector('.check').addEventListener('click', function(){
    // Since its input so we will have to use value with it
    // We also have to convert it into Integer to compara it with randomly generated number
    let guess = Number(document.querySelector('.Number').value);

    // Now we have to implement the actual logic of game

    if(!guess){
        document.querySelector('.message').textContent = "Falsy Values not allowed"
    // !guess means that the value provided in falsy
    }
    if (my_score <1 ){
        document.querySelector('.message').textContent = "You lost the game"
    }else{
        if(guess > randNum){
        // So every_time I guess the wrong number, the score will be deducted by 1 
        my_score --;
        document.querySelector('.message').textContent = "Guess is higher";
        document.querySelector('.score').textContent = my_score;
    }
    else if(guess < randNum){
        document.querySelector('.message').textContent = "Guess is Lower";
        my_score --;
        document.querySelector('.score').textContent = my_score;

    }
    else if (guess == randNum){
        // We can also change the CSS style of with help of DOM too
        document.querySelector('body').style.backgroundColor = 'green';

        // All the styling of any element has to be in string. It cannot be in integer even if we are providing the size of box

        document.querySelector('.message').textContent = "Correct Guess ✔";
        document.querySelector('.score').textContent = my_score;
        if(high_score<my_score){
            high_score = my_score;
            document.querySelector('.HighScore').textContent = high_score;

        }
    }
    }

    
} )

// Now what if user wants to play the game again
// document.querySelector('.playAgain').addEventListener('click', )

