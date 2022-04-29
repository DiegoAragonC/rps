const shapes = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let choiceNumber = Math.floor(Math.random() * 3);
    return shapes[choiceNumber];
}

function playerPlay() {
    while (true) {
        let choice = prompt("Choose 'rock', 'paper' or 'scissors':").toLowerCase();
        if (shapes.includes(choice)) {
            return choice;
        } else {
            console.log("Invalid choice");
        }
    }
}

function playRound(playerMove, computerMove) {
    switch (playerMove) {
        case ("rock"):
            if (computerMove == "scissors") {
                playerScore += 1;
                return "You win! Rock beats Scissors!" ;
            } else if (computerMove == "paper") {
                computerScore += 1;
                return "You lose! Paper beats Rock!";
            } else {
                return "It's a tie!";
            }
        case ("paper"):
            if (computerMove == "rock") {
                playerScore += 1;
                return "You win! Paper beats Rock!";
            } else if (computerMove == "scissors") {
                computerScore += 1;
                return "You lose! Scissors beat Paper!";
            } else {
                return "It's a tie!";
            }
        case ("scissors"):
            if (computerMove == "paper") {
                playerScore += 1;
                return "You win! Scissors beat Paper!";
            } else if (computerMove == "rock") {
                computerScore += 1;
                return "You lose! Rock beats Scissors!";
            } else {
                return "It's a tie!";
            }
    }
}

function game() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            const resultsDiv = document.getElementById('results');
            const score = document.getElementById('score');

            let playerMove = button.id;
            let computerMove = computerPlay();
            let result = playRound(button.id, computerMove);
            resultsDiv.textContent = "You chose: " + playerMove + ", Computer chose: " + computerMove + ", " + result;
            updateScore(score);
            let winner = checkWin();
            if (winner) {
                const finalResultsDiv = document.getElementById('final-results');
                finalResultsDiv.textContent = "The winner is " + winner; 
            }
        });
    });
}

function updateScore(score) {
    score.textContent = "Player: " + playerScore + ", Computer: " + computerScore;
}

function checkWin() {
    if (playerScore == 5) {
        return "Player";
    } else if (computerScore == 5) {
        return "Computer";
    }
    return null;
}

game();

