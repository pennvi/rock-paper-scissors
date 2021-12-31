/*
RPX

declare roundNumber, picks

play round
    pick computerPick   name computerPick
    propmt user for input userPick   name userPick
    determine who won    name playRound
    increase/show score
    reset Picks, start round over again, increase roundNumber

constraaints - 



*/


let roundNumber = 1;
let computerPick = "";
let userPick = "";
let computerScore = 0;
let userScore = 0;

function computerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    computerPick = choices[i];
    return computerPick;
}

function userChoice() {
    userPick = prompt('Which one? Rock, paper, scissors.');
    userPick = properString(userPick);
    if(userPick == "Rock" || userPick == "Paper" || userPick == "Scissors") {
        console.log(userPick);
        return userPick;
    }
    else {
        alert("Please pick one of the three options.")
        userChoice();
    }
    return userPick;
}


function properString(x) {
    if(String(x).length == 1) {
        return x.toUpperCase;
    }
    else if(String(x).length == 0) {
        return ""
    }
    let firstLetter = String(x[0].toUpperCase()) + x[1].slice(1);
    let restOfLetters = String(x.slice(1).toLowerCase());
    return firstLetter + restOfLetters;
}

function playRound(user, computer) {
    if(user == "Rock") {
        if(computer == "Paper") {
            computerScore++;
            console.log("you lose");
            console.log("you " + userScore + " - computer " + computerScore);
        }
        else if(computer == "Scissors") {
            userScore++;
            console.log("you win");
            console.log("you " + userScore + " - computer " + computerScore);
        }
        else { 
            console.log("its a draw");
            console.log("you " + userScore + " - computer " + computerScore);
        }
    }
    else if(user == "Paper") {
        if(computer == "Scissors") {
            computerScore++;  
            console.log("you lose");
            console.log("you " + userScore + " - computer " + computerScore);
        }
        else if(computer == "Rock") {
            userScore++;
            console.log("you win");
            console.log("you " + userScore + " - computer " + computerScore);
        }
        else {
            console.log("its a draw");
        }
    }
    else if(user == "Scissors") {
        if(computer == "Rock") {
            computerScore++;
            console.log("you lose");
            console.log("you " + userScore + " - computer " + computerScore);
        }
        else if(computer == "Paper") {
            userScore++;
            console.log("you win");
            console.log("you " + userScore + " - computer " + computerScore);
        }
        else {
            console.log("its a draw");
            console.log("you " + userScore + " - computer " + computerScore);
        }
    }
}

// put everything together

function playGame() {
    while(computerScore < 5 && userScore < 5) {
    computerChoice();
    userChoice();
    playRound(userPick, computerPick)
    }

    if(userScore > computerScore) {
        console.log("you win!");
    }
    else {
        console.log("you lose :(")
    }

}

playGame()