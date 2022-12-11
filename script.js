let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.round(Math.random()*choices.length)];
    return choice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'player won';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'player won';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'player won';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        return 'computer won';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        return 'computer won';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        return 'computer won';
    } else {
        return 'unknown'
    }

}

const game = () => {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('rock, paper or scissors ?')
        console.log(playRound(playerSelection, computerSelection))
        console.log(`Player: ${playerScore}`)
        console.log(`Computer: ${computerScore}`)
    }

    if (playerScore === computerScore){
        console.log('Draw')
    }else if (playerScore > computerScore){
        console.log('Player is the Winner')
    }else if (computerScore > playerScore){
        console.log('Computer is the Winner')
    }

}

game();
