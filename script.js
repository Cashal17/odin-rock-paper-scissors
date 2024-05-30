//Global vars.
let playScore = 0;
let compScore = 0;
const compScoreDisplay = document.querySelector(".computer-score");
const playScoreDisplay = document.querySelector(".player-score");

function getComputerChoice() {
    let compCh = Math.floor(Math.random() * 3 + 1);
    if (compCh === 1) {
        return 'rock';
    } else if (compCh === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelect, computerSelect) {
    if (playerSelect === computerSelect) {
       alert('It\'s a tie!');
       return;
    }

    if (playerSelect === 'rock') {
        if (computerSelect === 'paper') {
            compScore++;
            alert('You Lose! Paper beats Rock');
        } else {
            playScore++;
            alert('You Win! Rock beats Scissors');
        }
    } else if (playerSelect === 'paper') {
        if (computerSelect === 'scissors') {
            compScore++;
            alert('You Lose! Scissors beats Paper');
        } else {
            playScore++;
            alert('You Win! Paper beats Rock');
        }
    } else {
        if (computerSelect === 'rock') {
            compScore++;
            alert('You Lose! Rock beats Scissors');
        } else {
            playScore++;
            alert('You Win! Scissors beats Paper');
        }
    }
    compScoreDisplay.textContent = "Computer: " + compScore.toString();
    playScoreDisplay.textContent = "Player: " + playScore.toString();
    setTimeout(() => {
        checkScore();
    }, 100);
    
}

function checkScore() {
    if (playScore === 5 || compScore === 5) {
        if (playScore > compScore) {
            alert("Congrats! You win the game!");
        } else {
            alert("Booo...the computer wins this time...");
        }
        playScore = 0;
        compScore = 0;
       
        compScoreDisplay.textContent = "Computer: " + compScore.toString();
        playScoreDisplay.textContent = "Player: " + playScore.toString();
    }
}

function game() {
    //Add event listeners to buttons
    const rock = document.querySelector(".rock-button");
    const paper = document.querySelector(".paper-button");
    const scissors = document.querySelector(".scissors-button");
    rock.addEventListener("click", () => {
        playRound('rock', getComputerChoice());
    });
    paper.addEventListener("click", () => {
        playRound('paper', getComputerChoice());
    });
    scissors.addEventListener("click", () => {
        playRound('scissors', getComputerChoice());
    });
}

game();