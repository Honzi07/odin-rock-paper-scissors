function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    let num = Math.floor(Math.random() * 3);
    return(choice[num]) 
}

// Better use switch statement?
function playRound(player, computer) {
    if (player === computer) {
        result = 'Draw!'
    }
    if (player === 'Rock' && computer === 'Paper') {
        result = `You Lost! ${computer} beats ${player}`
    }
    if (player === 'Rock' && computer === 'Scissors') {
        result = `YAY! You Win! ${player} beats ${computer}`
    }
    if (player === 'Paper' && computer === 'Scissors') {
        result = `You Lost! ${computer} beats ${player}`
    }
    if (player === 'Paper' && computer === 'Rock') {
        result = `YAY! You Win! ${player} beats ${computer}`
    }
    if (player === 'Scissors' && computer === 'Rock') {
        result = `You Lost! ${computer} beats ${player}`
    }
    if (player === 'Scissors' && computer === 'Paper') {
        result = `YAY! You Win! ${player} beats ${computer}`
    }
}

const player = 'Rock'
const computer = computerPlay();