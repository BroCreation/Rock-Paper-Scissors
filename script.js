function getRandomNumBetween(min, max) {
    return Math.floor(Math.random() * (1 + max - min)) + min;
}

function getComputerChoice() {
    const choice = getRandomNumBetween(0, 2);
    switch(choice) {
        case 0:
            return "scout";
        case 1:
            return "skirm";
        case 2:
            return "spear";
        default:
            console.error("Wrong Number Generated outside possible options!!!");
    }
}

function getHumanChoice() {
    const choice = prompt("Which unit will you choose? Scout - Skirm - Spear").toLowerCase();
    return choice;
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    let rounds = 5;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Draw!", `Both chose ${humanChoice}.`)
        } else if (
            (humanChoice === "scout" && computerChoice === "skirm") ||
            (humanChoice === "skirm" && computerChoice === "spear") ||
            (humanChoice === "spear" && computerChoice === "scout")) {
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                humanScore++
        } else if (
            (computerChoice === "scout" && humanChoice === "skirm") ||
            (computerChoice === "skirm" && humanChoice === "spear") ||
            (computerChoice === "spear" && humanChoice === "scout")) {
                console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++
        }
    }
    for(let i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
    }
    if (humanScore > computerScore) {
        alert("You Won the Game!", humanScore, computerScore)
    } else if (computerScore > humanScore) {
        alert("You lost the Game!", humanScore, computerScore)
    } else {
        alert("Match Draw! :D")
    }
}

playGame();