function computerism() {            // Gets the computer's choice

    let computerinput = (Math.floor(Math.random()*3) + 1);

    if (computerinput === 1) {
        console.log("Computer chose Rock");
        return "rock";
    }
    else if (computerinput === 2) {
        console.log("Computer chose Paper");
        return "paper";
    } 
    else if (computerinput === 3) {
        console.log("Computer chose Scissors");
        return "scissors";
    }
}

const resultDiv = document.querySelector("#results")

function showResult(message){
    resultDiv.textContent = message;
}

function playRound(inputism, computerism) {            // mixes up human and computer's choices and provides with a result

    if (inputism === computerism) {
        showResult("Its Draw!");
    }
    else if (inputism === "rock" && computerism === "paper") {
        showResult("Computer wins! Human loses!");
        return "computer";
    }
    else if (inputism === "rock" && computerism === "scissors") {
        showResult("Human wins! Computer loses!");
        return "human";
    }
    else if (inputism === "paper" && computerism === "rock") {
        showResult("Human wins! Computer loses!");
        return "human";
    }
    else if (inputism === "paper" && computerism === "scissors") {
        showResult("Human loses! Computer wins!");
        return "computer";
    }
    else if (inputism === "scissors" && computerism === "rock") {
        showResult("Human loses! Computer wins!");
        return "computer";
    }
    else if (inputism === "scissors" && computerism === "paper") {
        showResult("Human wins! Computer loses!");
        return "human";
    } else {
        showResult("Someone messed up. We are internally crying.");
    }
    return;
}
let humanScore = 0
let computerScore = 0
let roundsPlayed = 0

function playGame(inputism, computerism) {
    const scoreDiv = document.querySelector("#score");
    const winner = playRound(inputism, computerism);

    if (winner === "human"){
        humanScore = humanScore + 1;
        roundsPlayed += 1;
    }
    else if (winner === "computer"){
        computerScore = computerScore + 1;
        roundsPlayed += 1;
    }
    else {
        roundsPlayed += 1;
    }

    scoreDiv.textContent = `Human: ${humanScore} || Computer: ${computerScore}`;

    if (roundsPlayed === 5){
        if (humanScore < computerScore){
            scoreDiv.textContent = "Computer won overall";
        }
        else if (computerScore < humanScore){
            scoreDiv.textContent = "You won overall";
        }
        else {
            scoreDiv.textContent = "It's a tie overall";
        }
        button.forEach(btn => btn.disabled = true);
        document.querySelector("#play-again").style.display = "block";
    }
}

function resetButton() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    document.querySelector("#score").textContent = "Scores reset! Play again!";
    document.querySelector("#results").textContent = "";

    button.forEach(btn => btn.disabled = false);
    document.querySelector("#play-again").style.display = "none";
}

document.querySelector("#play-again").addEventListener("click", resetButton);

const button = document.querySelectorAll("#rock, #paper, #scissors");

button[0].addEventListener('click', () => {alert("You chose Rock!");
    (playGame("rock", computerism()));
});
button[1].addEventListener('click', () => {alert("You chose Paper!");
    (playGame("paper", computerism()));
});
button[2].addEventListener('click', () => {alert("You chose Scissors!");
    (playGame("scissors", computerism()));
});