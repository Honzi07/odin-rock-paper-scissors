function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  let num = Math.floor(Math.random() * 3);
  return choice[num];
}

let playerScore = 0;
let computerScore = 0;

// Better use switch statement?
function playRound(player, computer) {
  computer = computerPlay();
  player = playerChoice();
  if (player === computer) {
    result = "Draw!";
  }
  if (player === "Rock" && computer === "Paper") {
    result = `You Lost! ${computer} beats ${player}`;
    computerScore++;
  }
  if (player === "Rock" && computer === "Scissors") {
    result = `YAY! You Win! ${player} beats ${computer}`;
    playerScore++;
  }
  if (player === "Paper" && computer === "Scissors") {
    result = `You Lost! ${computer} beats ${player}`;
    computerScore++;
  }
  if (player === "Paper" && computer === "Rock") {
    result = `YAY! You Win! ${player} beats ${computer}`;
    playerScore++;
  }
  if (player === "Scissors" && computer === "Rock") {
    result = `You Lost! ${computer} beats ${player}`;
    computerScore++;
  }
  if (player === "Scissors" && computer === "Paper") {
    result = `YAY! You Win! ${player} beats ${computer}`;
    playerScore++;
  }
  console.log(result);
}

function winner() {
  if (playerScore > computerScore) {
    alert("You win the game!");
  } else if (playerScore < computerScore) {
    alert("The computer win the game!");
  } else alert("The game is draw");
}

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  console.log(`Your score ${playerScore}`);
  console.log(`Computer Score ${computerScore}`);
  winner();
}

function playerChoice() {
  let player = prompt("Select your weapon! Rock, Paper, Scissors");
  while (player == '') {
      player = prompt("Select your weapon! Rock, Paper, Scissors");
  }
  player = player[0].toUpperCase() + player.slice(1).toLowerCase();
  return player;
}

game();