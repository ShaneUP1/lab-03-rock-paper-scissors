// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {getRandomThrow} from '../get-random-throw.js'
const test = QUnit.test;

test('should return a random number between 1 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const possibleValues = ['rock', 'paper', 'scissors']
   
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();
    // console.log(getRandomThrow());
    const actual1 = getRandomThrow();
    // console.log(getRandomThrow());
    const actual2 = getRandomThrow();
    // console.log(getRandomThrow());
    const actual3 = getRandomThrow();
    // console.log(getRandomThrow());
    const actual4 = getRandomThrow();
    // console.log(getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(possibleValues.includes(actual), true);
    expect.equal(possibleValues.includes(actual1), true);
    expect.equal(possibleValues.includes(actual2), true);
    expect.equal(possibleValues.includes(actual3), true);
    expect.equal(possibleValues.includes(actual4), true);
});
