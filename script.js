let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'draw';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'player won';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors' 
    || computerSelection === 'scissors' && playerSelection === 'paper' 
    || computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        return 'computer won';
    }else{
        return `error: ${playerSelection}, ${computerSelection}`
    }          
}

const playerScoreDiv = document.querySelector('.playerScore');
const scoreDiv = document.querySelector('.score');
const computerScoreDiv = document.querySelector('.computerScore');

const display = (score) => {
    playerScoreDiv.textContent = `${playerScore}`;
    scoreDiv.textContent = score;
    computerScoreDiv.textContent = `${computerScore}`;
}

const buttons = document.querySelectorAll('button');

const game = () => {  
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (playerScore === 5 || computerScore === 5) return;

            let score = playRound(e.target.className, getComputerChoice());
            if (playerScore !== 5 || computerScore !== 5) display(score);

            if (playerScore === 5 || computerScore === 5){
                if (playerScore > computerScore){
                    scoreDiv.textContent = 'Player is the Winner';
                }else if (computerScore > playerScore){
                    scoreDiv.textContent = 'Computer is the Winner';
                }
            }
        });
    });
}

game();