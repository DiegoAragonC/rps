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
    console.log("Welcome to rock, paper, scissors!");

    for (let i=0; i < 5; i++) {
        console.log("Round " + (i+1));
        
        let player = playerPlay();
        let computer = computerPlay();
        
        console.log("Your move: " + player);
        console.log("Computer's move: " + computer);
        
        console.log(playRound(player, computer));
    }

    console.log("Final Score: Player " + playerScore + ", Computer: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You Win the Game!");
    } else if (computerScore > playerScore) {
        console.log("You Lose the Game!");
    } else {
        console.log("The Game is a Tie");
    }
}

game();
