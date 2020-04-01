const gameOptions = ['rock','paper','scissors']
// const playerSelection = 'rock'
// const computerSelection = computerPlay()

function computerPlay(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// function playRound() {
//     // your code here!
//     let playerSelection = prompt("rock, paper, or scissors?")
//     let computerSelection = computerPlay()
//     if (playerSelection.toLowerCase() == computerSelection){
//         return "Tie!"
//     } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
//         return "You lose!"
//     } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
//         return "You won!"
//     } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
//         return "You lose!"
//     } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
//         return "You won!"
//     } else if (playerSelection.toLowerCase() ==  'scissors' && computerSelection == 'rock'){
//         return "You lose!"
//     } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
//         return "You won!"
//     }
// }

var computerScoreCount = 0
var playerScoreCount = 0
var tieScoreCount = 0

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector("#scissors")
const resetButton = document.querySelector('#reset')

const resultsBox = document.querySelector('#resultsBox')
const computerScore = document.querySelector('#computerScore')
const playerScore = document.querySelector("#playerScore")
const tieCount = document.querySelector("#tieCount")

rock.addEventListener('click', function(){
    let computerSelection = computerPlay();
    if (computerSelection == 'rock'){
        increaseTieCount();
    } else if (computerSelection == 'paper'){
        increaseComputerScore();
    } else {
        increasePlayerScore();
    }
});

paper.addEventListener('click', function(){
    let computerSelection = computerPlay();
    if (computerSelection == 'paper'){
        increaseTieCount();
    } else if (computerSelection == 'scissors'){
        increaseComputerScore();
    } else {
        increasePlayerScore();
    }
});

scissors.addEventListener('click', function(){
    let computerSelection = computerPlay();
    if (computerSelection == 'scissors'){
        increaseTieCount();
    } else if (computerSelection == 'rock'){
        increaseComputerScore();
    } else {
        increasePlayerScore();
    }
});

resetButton.addEventListener('click', function(){
    tieScoreCount = 0
    computerScoreCount = 0;
    playerScoreCount = 0;
    tieCount.textContent = 0;
    computerScore.textContent = 0;
    playerScore.textContent = 0;
})

function increaseTieCount() {
    tieCount.textContent = tieScoreCount += 1;
}

function increaseComputerScore() {
    computerScore.textContent = computerScoreCount += 1;
}

function increasePlayerScore() {
    playerScore.textContent = playerScoreCount += 1;
}
