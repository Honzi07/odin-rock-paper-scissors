const choiceBtns = document.querySelectorAll('.choice-btn');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const oneRound = document.querySelector('#oneRound');
const playerScoreNum = document.querySelector('#playerScore');
const computerScoreNum = document.querySelector('#computerScore');
const computerIconRock = document.querySelector('.computer-icon.rock');
const computerIconPaper = document.querySelector('.computer-icon.paper');
const computerIconScissors = document.querySelector('.computer-icon.scissors');
const modal = document.querySelector('#gameWinner');
const modalBtn = document.querySelector('#openModal');
const resetBtn = document.querySelector('#resetBtn');
const winnerText = document.querySelector('#winnerText');


function computerPlay() {
  computer = ["Rock", "Paper", "Scissors"];
  num = Math.floor(Math.random() * 3);
}

 let playerScore = 0;
 let computerScore = 0;


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


choiceBtns.forEach(button => button.addEventListener('click', () => {
  player = button.id;
  computerPlay();
  playerChoice.textContent = `Player: ${player}`;
  computerChoice.textContent = `Computer: ${computer[num]}`;
  oneRound.textContent = `Round: ${playRound()}`;
  playerScoreNum.textContent = `Player Score: ${playerScore}`
  computerScoreNum.textContent = `Computer Score: ${computerScore}`
  borderColor();
  winner();
}));


function borderColor() {
  if(computer[num] == 'Rock') {
    computerIconRock.classList.add('computer-border-selected')
    computerIconPaper.classList.remove('computer-border-selected')
    computerIconScissors.classList.remove('computer-border-selected')
  }
  if(computer[num] == 'Paper') {
    computerIconPaper.classList.add('computer-border-selected')
    computerIconRock.classList.remove('computer-border-selected')
    computerIconScissors.classList.remove('computer-border-selected')
  }
  if(computer[num] == 'Scissors') {
    computerIconScissors.classList.add('computer-border-selected')
    computerIconPaper.classList.remove('computer-border-selected')
    computerIconRock.classList.remove('computer-border-selected')
  }
}


function resetGame() {
  modal.style.display = 'none';
  location.reload();
}

modalBtn.addEventListener('click', () => modal.style.display = 'block');

resetBtn.addEventListener('click', resetGame);


function winner() {
  if(playerScore === 5 || computerScore === 5) {
    modal.style.display = 'block';
    if(playerScore === 5) {
      winnerText.textContent = 'Yay! you Win the game!';
    }
    if(computerScore === 5) {
      winnerText.textContent = 'The computer Win the game !';
    }
  }
}