function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
  }
  console.log(getRandomComputerResult());

  
let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore += 1;
      return `Player wins! ${userOption} beats ${computerResult}`
    } else if (userOption === computerResult) {
      return `It's a tie! Both chose ${userOption}`
    } else {
      computerScore += 1;
      return `Computer wins! ${computerResult} beats ${userOption}`
    }
  }
  
  console.log(getRoundResults("Rock"));
  console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    //είχε σημασία οτι έβαλα την getRoundResults πρωτη γιατι αυτή οταν την καλείς αλλάζει και τα σκορ
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  if (playerScore === 3){
    winnerMsgElement.innerText = "Player has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
};

showResults("Rock");

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
};