
export function didUserWin(userInput : string, compInput : string) : string {
    if (userInput === compInput){
        return 'tie';
    }
    if (userInput === 'paper' && compInput === 'rock'){
        return 'win';
    }
    if (userInput === 'scissors' && compInput === 'rock'){
        return 'lose';
    }
    if (userInput === 'rock' && compInput === 'paper'){
        return 'lose';
    }
    if (userInput === 'scissors' && compInput === 'paper'){
        return 'win';
    }
    if (userInput === 'paper' && compInput === 'scissors'){
        return 'lose';
    }
    if (userInput === 'rock' && compInput === 'scissors'){
        return 'win';
    }
}
