const choiceBtns = document.querySelectorAll('.choice-btn');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const oneRound = document.querySelector('#oneRound');
const playerScoreNum = document.querySelector('#playerScore')
const computerScoreNum = document.querySelector('#computerScore')
const popup = document.querySelector('#winnerPopup')
const computerIconRock = document.querySelector('.computer-icon.rock')
const computerIconPaper = document.querySelector('.computer-icon.paper')
const computerIconScissors = document.querySelector('.computer-icon.scissors')

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

function winner() {
  if(playerScore === 5) {
    console.log('You Win the Game!')
  }
  else if(computerScore === 5) {
    console.log('Computer Win the Game!')
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
  borderColor()
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
