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

const playerIcon = document.querySelector('.player-canvas > i');
const computerIcon = document.querySelector('.computer-canvas > i');

const playerText = document.querySelector('.player-canvas > p');
const computerText = document.querySelector('.computer-canvas > p');

const decideCanvasContent = (computersChoice, playersChoice) => {
    let computerIconClassName, playerIconClassName;

    switch (computersChoice) {
        case 'rock':
            computerIconClassName = 'fa-hand-back-fist';
            break;
        case 'scissors':
            computerIconClassName = 'fa-hand-scissors';
            break;
        case 'paper':
            computerIconClassName = 'fa-hand';
            break;
    }

    switch (playersChoice) {
        case 'rock':
            playerIconClassName = 'fa-hand-back-fist';
            break;
        case 'scissors':
            playerIconClassName = 'fa-hand-scissors';
            break;
        case 'paper':
            playerIconClassName = 'fa-hand';
            break;
    }

    playerIcon.classList.remove(playerIcon.classList[playerIcon.classList.length - 1 ]);
    playerIcon.classList.add(playerIconClassName);

    computerIcon.classList.remove(computerIcon.classList[computerIcon.classList.length - 1 ]);
    computerIcon.classList.add(computerIconClassName);

    playerText.textContent = playersChoice; 
    computerText.textContent = computersChoice;
}

const buttons = document.querySelectorAll('button');

const game = () => { 
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (playerScore === 5 || computerScore === 5) return;
            let computersChoice = getComputerChoice();
            let playersChoice = e.target.className ;
            decideCanvasContent(computersChoice, playersChoice);
            let score = playRound(playersChoice ,computersChoice);
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
