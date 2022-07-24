const choiceBtns = document.querySelectorAll('.choice-btn');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const oneRound = document.querySelector('#oneRound');
const playerScoreNum = document.querySelector('#playerScore')
const computerScoreNum = document.querySelector('#computerScore')
const popup = document.querySelector("#winnerPopup")


function computerPlay() {
  computer = ["Rock", "Paper", "Scissors"];
  num = Math.floor(Math.random() * 3);
}

// let num;
// let player;
// let computer;
 let playerScore = 0;
//  console.log(playerScore)
 let computerScore = 0;
//  console.log(computerScore)


// function winner() {
//   if(player === computer[num]){
//     return 'Draw!';
//   }
//   else if(computer[num] === 'Rock') {
//     return (player === 'Paper') ? 'You Win!' : 'You Lose!'
//   }
//   else if(computer[num] === 'Paper') {
//     return (player === 'Scissors') ? 'You Win!' : 'You Lose!'
//   }
//   else if(computer[num] === 'Scissors') {
//     return (player === 'Rock') ? 'You Win!' : 'You Lose!' 
//   }
// }

// function score() {
//   let playerScore = 0;
//   console.log(playerScore)
//   if(playRound === 'You Win!') {
//     playerScore++
//   }
// }



// Better use switch statement?
function playRound() {
  if (player === computer[num]) {
    return "Draw!";
  }
  if (player === "Rock" && computer[num] === "Paper") {
    computerScore++;
    return 'You Lost!'; 
  }
  if (player === "Rock" && computer[num] === "Scissors") {
    playerScore++;
    return 'You Win!';
  }
  if (player === "Paper" && computer[num] === "Scissors") {
    computerScore++;
    return 'You Lost!';
  }
  if (player === "Paper" && computer[num] === "Rock") {
    playerScore++;
    return 'You Win!';
  }
  if (player === "Scissors" && computer[num] === "Rock") {
    computerScore++;
    return 'You Lost!'; 
  }
  if (player === "Scissors" && computer[num] === "Paper") {
    playerScore++;
    return 'You Win!';
  }
}


// winner run a function at 5 points for the popup and change the textcontent depending who is the winner 
function winner() {
  if(playerScore === 5) {
    console.log('You Win the Game!')
  }
  else if(computerScore === 5) {
    console.log('Computer Win the Game!')
  }
}


// function winner() {
//   if (playerScore > computer[Score) {
//     alert("You win the game!");
//   } else if (playerScore < computerScore) {
//     alert("The computer win the game!");
//   } else alert("The game is draw");
// }

// function game() {
//   for (let i = 1; i <= 5; i++) {
//     playRound();
//   }
// }

// function game() {
//   // Make the game round long 
//   // for (let i = 1; i <= 5; i++) {
//     playRound();
//   // }
//   // console.log(`Your score ${playerScore}`);
//   // console.log(`Computer Score ${computerScore}`);
//   winner();
// }

// function playerChoice() {
//   let player = prompt("Select your weapon! Rock, Paper, Scissors");
//   while (player === '') {
//       player = prompt("Select your weapon! Rock, Paper, Scissors");
//   }
//   player = player[0].toUpperCase() + player.slice(1).toLowerCase();
//   return player;
// }

choiceBtns.forEach(button => button.addEventListener('click', () => {
  player = button.id;
  computerPlay();
  playerChoice.textContent = `Player: ${player}`;
  computerChoice.textContent = `Computer: ${computer[num]}`;
  oneRound.textContent = `Round: ${playRound()}`;
  playerScoreNum.textContent = `Player Score: ${playerScore}`
  computerScoreNum.textContent = `Computer Score: ${computerScore}`
}));

// choiceBtns.forEach(button => button.addEventListener('mouseup', () => {
//   winner();
// }));

// game();