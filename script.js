function getRandomNumBetween(min, max) {
    return Math.floor(Math.random() * (1 + max - min)) + min;
}

function getComputerChoice() {
    const choice = getRandomNumBetween(0, 2);
    // changes image
    const computerImage =  document.querySelector('.right-image img')
    computerImage.src = `images/${choice}.webp`;
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

function getHumanChoice(e) {
    const choice = e.target.value;
    const humanImage =  document.querySelector('.left-image img')
    switch(choice) {
        case "scout":
            humanImage.src = `images/0.webp`
            break
        case "skirm":
            humanImage.src = `images/1.webp`
            break
        case "spear":
            humanImage.src = `images/2.webp`
            break
    }
    return choice;
}


function playGame() {
    const scoresElem = document.querySelector('.scores')
    const message = document.querySelector('.message')
    const buttons = document.querySelectorAll('button')
    const div = document.querySelector('div.box')
    const outcome = document.createElement('p')
    let humanScore = 0, computerScore = 0;
    function playRound(event) {
        if (humanScore < 5 && computerScore < 5) {
            let humanChoice = getHumanChoice(event)
            let computerChoice = getComputerChoice()
            if (humanChoice === computerChoice) {
                message.textContent = `Draw! Both chose ${humanChoice}.`
            } else if (
                (humanChoice === "scout" && computerChoice === "skirm") ||
                (humanChoice === "skirm" && computerChoice === "spear") ||
                (humanChoice === "spear" && computerChoice === "scout")) {
                    message.textContent = `You Win! ${humanChoice} beats ${computerChoice}`
                    humanScore++
            } else if (
                (computerChoice === "scout" && humanChoice === "skirm") ||
                (computerChoice === "skirm" && humanChoice === "spear") ||
                (computerChoice === "spear" && humanChoice === "scout")) {
                    message.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`
                    computerScore++
            }
            scoresElem.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
        } else {
            if (humanScore >= 5) {
                outcome.textContent = "Congrats! You won the Aoe2 Unit War against AI"
            } else if (computerScore >= 5){
                outcome.textContent = "Alas! You lost this match against AI"
            }
            div.appendChild(outcome)
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', playRound)
    })
}

playGame();