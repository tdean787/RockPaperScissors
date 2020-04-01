const gameOptions = ['rock','paper','scissors']

function computerPlay(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

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

let playerPick = document.querySelector("#playerPick")
let computerPick = document.querySelector("#computerPick")


rock.addEventListener('click', function(){
    let computerSelection = computerPlay();
    if (computerSelection == 'rock'){
        computerPick.textContent = "Rock"
        increaseTieCount();
    } else if (computerSelection == 'paper'){
        increaseComputerScore();
        computerPick.textContent = "Paper"
    } else {
        increasePlayerScore();
        computerPick.textContent = "Scissors"
    }
    playerPick.textContent = "Rock"
});

paper.addEventListener('click', function(){
    let computerSelection = computerPlay();
    if (computerSelection == 'paper'){
        increaseTieCount();
        computerPick.textContent = "Paper"
    } else if (computerSelection == 'scissors'){
        increaseComputerScore();
        computerPick.textContent = "Scissors"
    } else {
        increasePlayerScore();
        computerPick.textContent = "Rock"
    }
    playerPick.textContent = "Paper"
});

scissors.addEventListener('click', function(){
    let computerSelection = computerPlay();
    if (computerSelection == 'scissors'){
        increaseTieCount();
        computerPick.textContent = "Scissors"
    } else if (computerSelection == 'rock'){
        increaseComputerScore();
        computerPick.textContent = "Rock"
    } else {
        increasePlayerScore();
        computerPick.textContent = "Paper"
    }
    playerPick.textContent = "Scissors"
});

resetButton.addEventListener('click', function(){
    tieScoreCount = 0
    computerScoreCount = 0;
    playerScoreCount = 0;
    tieCount.textContent = 0;
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    playerPick.textContent = "";
    computerPick.textContent = "";
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
