const gameOptions = ['rock','paper','scissors']
// const playerSelection = 'rock'
// const computerSelection = computerPlay()

function computerPlay(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function playRound() {
    // your code here!
    const playerSelection = prompt("rock, paper, or scissors?")
    const computerSelection = computerPlay()
    if (playerSelection.toLowerCase() == computerSelection){
        return "Tie!"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
        return "You lose!"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        return "You won!"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
        return "You lose!"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        return "You won!"
    } else if (playerSelection.toLowerCase() ==  'scissors' && computerSelection == 'rock'){
        return "You lose!"
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        return "You won!"
    }
}

function game() {
    let computerScore = 0
    let playerScore = 0
    let tieCount = 0
    for (let i = 0; i < 5; i++){
        let roundResult = playRound();
        if(roundResult == 'You lose!'){
            computerScore += 1
            console.log("you lost this round")
        } else if (roundResult == 'You won!'){
            playerScore += 1
            console.log('you won')
        }
         else if (roundResult == "Tie!"){
            tieCount += 1
            console.log('tie')
        } 
    }
    return{"computer wins":computerScore,"player wins":playerScore,"number of ties":tieCount}
}

// console.log(playRound(playerSelection, computerSelection))