

function inputism() {
    console.log("Kindly pick one of the following options:");
    console.log("ROCK");
    console.log("PAPER");
    console.log("SCISSORS");

    let gotteninput = (prompt("Enter your chosen weapon:"));

    gotteninput = gotteninput.toLowerCase();

    if (gotteninput === "rock") {
        console.log("You chose Rock");
    } else if (gotteninput === "paper") {
        console.log("You chose Paper");
    } else if (gotteninput === "scissors") {
        console.log("You chose Scissors");
    } else {
        console.log("Invalid input. Please enter the available weapons.");
    }
    return gotteninput;
}

function computerism() {

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

function resultism(inputism, computerism) {

    if (inputism === computerism) {
        console.log ("It's a draw!");
    }
    else if (inputism === "rock" && computerism === "paper") {
        console.log("Human loses! Computer wins!");
        return "computer";
    }
    else if (inputism === "rock" && computerism === "scissors") {
        console.log("Human wins! Computer loses!");
        return "human";
    }
    else if (inputism === "paper" && computerism === "rock") {
        console.log("Human wins! Computer loses!");
        return "human";
    }
    else if (inputism === "paper" && computerism === "scissors") {
        console.log("Human loses! Computer wins!");
        return "computer";
    }
    else if (inputism === "scissors" && computerism === "rock") {
        console.log("Human loses! Computer wins!");
        return "computer";
    }
    else if (inputism === "scissors" && computerism === "paper") {
        console.log("Human wins! Computer loses!");
        return "human";
    } else {
        console.log("Someone messed up. We are internally crying.");
    }
    return;
}

function Playgame() {

    let humanscore = 0;
    let computerscore = 0;
    for (let i = 0; i<5; i++) {
        const winner = resultism(inputism(), computerism());

        if (winner === "human") {
            humanscore += 1;
        } else if (winner === "computer") {
            computerscore += 1;
        } else {
            console.log("No one gets a point this round.");
        }
        console.log("The score is currently");
        console.log("Human: " + humanscore);
        console.log("Computer: " + computerscore);
    }

    if (humanscore>computerscore) {
        console.log("Human wins the game! Congratulations!");
    }
    else if (computerscore>humanscore) {
        console.log("Computer wins the game! Better luck next time, human.");
    }
    else {
        console.log("It's a draw! What a close game!");
    }
    return;
}

Playgame();