

export function getRandomThrow() : string {
    let compThrow : number = Math.ceil(Math.random() * 3);
    let convertToRPS : string;

    if (compThrow === 1) {
        convertToRPS = 'rock';
    }
    else if (compThrow === 2) {
        convertToRPS = 'paper';
    } else {
        convertToRPS = 'scissors';
    }

    return convertToRPS;
}