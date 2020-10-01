// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './did-user-win.js'

const button = document.querySelector('#play');
const gameWins = document.querySelector('#wins');
const gameLosses = document.querySelector('#losses');
const gameTies = document.querySelector('#ties');
const gameResetButton = document.querySelector('#reset-button');


const throwResult = document.querySelector("#game-result");
const compThrow = document.querySelector("#comp-result");
const userThrow = document.querySelector("#user-choice");


// initialize state

let wins = 0;
let losses = 0;
let ties = 0;

// set event listeners to update state and DOM

button.addEventListener('click', () => {

    const checkedChoice = document.querySelector(':checked');
    userThrow.textContent = checkedChoice.value;
    const user = checkedChoice.value;
    

    const comp = getRandomThrow();
    console.log(comp);
    compThrow.textContent = comp;
  

    const gameOutcome = didUserWin(user, comp);
    console.log(gameOutcome);

    if (gameOutcome === 'win'){
        wins++
        gameWins.textContent = wins;
        throwResult.textContent = "You won!";
    }
    else if (gameOutcome === 'lose'){
        losses++
        gameLosses.textContent = losses;
        throwResult.textContent = "You lose!";
    } else {
        ties++
        gameTies.textContent = ties;
        throwResult.textContent = "It was a tie."
    }
    

})

gameResetButton.addEventListener('click', () => {

// function
// reset wins losses and ties 
gameWins.textContent = 0;
gameLosses.textContent = 0;
gameTies.textContent = 0;

// reset throwResult
throwResult.textContent = '';

// compThrow and userThrow 
compThrow.textContent = '';
userThrow.textContent = '';





})