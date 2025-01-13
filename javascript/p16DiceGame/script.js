const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1; 
let rolls = 0; 

rulesBtn.addEventListener("click", () => {
  if (isModalShowing) {
    rulesContainer.style.display = "none"
    isModalShowing = false;
    rulesBtn.innerText = "Show rules"
  } else {
    rulesContainer.style.display = "block"
    isModalShowing = true;
      rulesBtn.innerText = "Hide rules"
  }
})

const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  };

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};

const updateStats = () => {
  rollsElement.innerText = rolls;
  roundElement.innerText = round;
}

const updateRadioOption = (index, score) => {

}

rollDiceBtn.addEventListener("click", () => {
  if (rolls < 3){
    rollDice();
    rolls++
  } else {
    alert("You have made three rolls this round. Please select a score.")
  }  
  updateStats();
});




const diceArray = Array.from(listOfAllDice);
