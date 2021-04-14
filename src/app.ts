// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw';
import { didUserWin } from './did-user-win';

const button = <HTMLButtonElement>document.querySelector('#play');
const gameWins = <HTMLSpanElement> document.querySelector('#wins');
const gameLosses = <HTMLSpanElement>document.querySelector('#losses');
const gameTies = <HTMLSpanElement>document.querySelector('#ties');
const gameResetButton = <HTMLButtonElement>document.querySelector('#reset-button');

const throwResult : HTMLDivElement = document.querySelector('#game-result');
const compThrow : HTMLSpanElement = document.querySelector('#comp-result');
const userThrow : HTMLSpanElement = document.querySelector('#user-choice');
const resetClicks : HTMLSpanElement = document.querySelector('#reset-clicks');

// initialize state

let wins : number = 0;
let losses : number = 0;
let ties : number = 0;
let resets : number = 0;

// set event listeners to update state and DOM

button.addEventListener('click', () => {

    const checkedChoice : HTMLInputElement = document.querySelector(':checked');
    userThrow.textContent = checkedChoice.value;
    const user : string = checkedChoice.value;
    
    const comp : string = getRandomThrow();
    compThrow.textContent = comp;
  
    const gameOutcome : string = didUserWin(user, comp);

    if (gameOutcome === 'win'){
        wins++;
        gameWins.textContent = String(wins);
        throwResult.textContent = 'You won!';
    }
    else if (gameOutcome === 'lose'){
        losses++;
        gameLosses.textContent = String(losses);
        throwResult.textContent = 'You lose!';
    } else {
        ties++;
        gameTies.textContent = String(ties);
        throwResult.textContent = 'It was a tie.';
    }
});

gameResetButton.addEventListener('click', () => {
    resets++;
    resetClicks.textContent = String(resets);
    
    gameWins.textContent = '0';
    gameLosses.textContent = '0';
    gameTies.textContent = '0';

    throwResult.textContent = '';

    compThrow.textContent = '';
    userThrow.textContent = '';
});