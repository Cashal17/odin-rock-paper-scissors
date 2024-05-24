function getComputerChoice() {
    let compCh = Math.floor(Math.random() * 3 + 1);
    if (compCh === 1) {
        return 'Rock';
    } else if (compCh === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelect, computerSelect) {
    const player = playerSelect.toLowerCase();
    const computer = computerSelect.toLowerCase();
    if (player === computer)
        return 'tie';

    if (player === 'rock') {
        if (computer === 'paper')
            return 'You Lose! Paper beats Rock';
        else 
            return 'You Win! Rock beats Scissors';
    } else if (player === 'paper') {
        if (computer === 'scissors')
            return 'You Lose! Scissors beats Paper';
        else 
            return 'You Win! Paper beats Rock';
    } else {
        if (computer === 'rock')
            return 'You Lose! Rock beats Scissors';
        else 
            return 'You Win! Scissors beats Paper';
    }
}

function game() {
    let playScore = 0;
    let compScore = 0;
    for (let i = 1; i <= 5; i++) {
        try {
            let player = prompt("Your turn: ").toLowerCase();
            while (player !== "rock" && player !== "paper" && player !== "scissors") {
                console.log("Invalid input! Please try again.");
                player = prompt("Your turn: ").toLowerCase();
            }
            let comp = getComputerChoice();
            let round = playRound(player, comp);
            if (round === 'tie') {
                console.log("Tie. Replay the round.");
                i--;
                continue;
            } else {
                console.log(round);
                if (round.includes('Win'))
                    playScore++;
                else
                    compScore++;
            }
        } catch (e) {
            if (e instanceof TypeError) {
                console.log("End of game (user selected cancel).");
                break;
            }
        }
    }
    if (playScore > compScore)
        console.log("Congrats! You win the game!");
    else 
        console.log("Booo...the computer wins this time...");
}
game();