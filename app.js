// import functions and grab DOM elements

const button = document.querySelector('#play');
const gameWins = document.querySelector('#wins');
const gameLosses = document.querySelector('#losses');
const gameTies = document.querySelector('#ties')

const throwResult = document.querySelector("#game-result");
const compThrow = document.querySelector("#comp-result");
const userThrow = document.querySelector("#user-choice");


// initialize state

let wins = 0;
let losses = 0;
let ties = 0;

// set event listeners to update state and DOM

