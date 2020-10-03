// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';
import { didUserWin } from '../did-user-win.js';
const test = QUnit.test;

test('if computer input is scissor and user input is rock it will return win', (expect) => {
    const userInput = 'rock';
    const compInput = 'scissors';

    const expected = 'win';
    const actual = didUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

test ('if computer input is scissors and user input is paper it will return lose', (expect) => {
    const userInput = 'paper';
    const compInput = 'scissors';

    const expected = 'lose';
    const actual = didUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

test('if computer input is paper and user input is scissors it will return win', (expect) => {
    const userInput = 'scissors';
    const compInput = 'paper';

    const expected = 'win';
    const actual = didUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

test('if computer input is paper and user input is rock it will return lose', (expect) => {
    const userInput = 'rock';
    const compInput = 'paper';

    const expected = 'lose';
    const actual = didUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

test('if computer input is rock and user input is scissors it will return lose', (expect) => {
    const userInput = 'scissors';
    const compInput = 'rock';

    const expected = 'lose';
    const actual = didUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

test('if computer input is rock and user input is paper it will return win', (expect) => {
    const userInput = 'paper';
    const compInput = 'rock';

    const expected = 'win';
    const actual = didUserWin(userInput, compInput);

    expect.equal(actual, expected);

    test('if computer input and the user input are the same it will return tie', (expect) => {
        const userInput = 'rock';
        const compInput = 'rock';
    
        const expected = 'tie';
        const actual = didUserWin(userInput, compInput);

        expect.equal(actual, expected);
    });

});



test('should return a random number between 1 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const possibleValues = ['rock', 'paper', 'scissors'];
   
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();
    const actual1 = getRandomThrow();
    const actual2 = getRandomThrow();
    const actual3 = getRandomThrow();
    const actual4 = getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(possibleValues.includes(actual), true);
    expect.equal(possibleValues.includes(actual1), true);
    expect.equal(possibleValues.includes(actual2), true);
    expect.equal(possibleValues.includes(actual3), true);
    expect.equal(possibleValues.includes(actual4), true);
});
