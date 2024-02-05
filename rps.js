function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3)
    if (randNum == 0) {
        return 'Rock'
    } else if (randNum == 1) {
        return 'Paper'
    }
    return 'Scissors'
}

function capitalize(str) {
    let firstLetter = str.charAt(0)
    let restOfString = str.slice(1).toLowerCase()
     return firstLetter.toUpperCase() + restOfString
}

function playRound(playerSelection,computerSelection) {
    let formattedPlayerSelection = capitalize(playerSelection)
    if (formattedPlayerSelection == computerSelection) {
        return 'Draw!'
    } else if (formattedPlayerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You Lose! Paper beats Rock'
    } else if (formattedPlayerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You Win! Paper beats Rock'
    } else if (formattedPlayerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (formattedPlayerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You Win! Scissors beats Paper'
    } else if (formattedPlayerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You Lose! Rock beats Scissors'
    }  else if (formattedPlayerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You Lose! Scissors beats Paper'
    }
}

let playerSelection = "PaPeR"
let computerSelection = getComputerChoice()

// console.log(playRound(playerSelection,computerSelection))