// Craps Main Data
let crapsUsername = "";

// Craps Game Settings
const startingMoney = 1000;
const startingRounds = 0;
const bets = {
  even: "EVEN",
  odd: "ODD",
};
const minimumBet = 100;

// HTML Elements IDs
const crapsUsernameInput = "craps-username-input";
const crapsRegistrationPane = "craps-registration-pane";
const crapsMainSection = "craps-main-section";
const crapsStatsUsername = "craps-stats-username";
const crapsStatsMoney = "craps-stats-money";
const crapsStatsRounds = "craps-stats-rounds";
const crapsUserBetAmount = "craps-user-bet-amount";
const crapsRollDiceButton = "craps-roll-dice-button"
const crapsRollDiceAnimationContainer = "craps-roll-dice-animation-container"

// In-game variables
let currentMoney = startingMoney;
let currentRounds = startingRounds;
let currentBet = bets.even;
let currentBetAmount = minimumBet;
let canChangeBet = true;

function makeDreamComeTrue() {
  document.body.style.background =
    "url(https://i.pinimg.com/originals/96/b5/1d/96b51d3bb8104d88b94951a74d4009dd.gif)";
  document.getElementById("title").style.visibility = "hidden";
}

function registerCrapsPlayer() {
  crapsUsername = document.getElementById(crapsUsernameInput).value;

  //Username Validation Check

  // Below is Regex for searching for a pattern in a string.
  let firstCharIsDigitRegex = /^[0-9]|[^a-zA-z0-9_]/g; // the carey(^) behind the [] means negation

  if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
    alert(
      "Username must be at least 5 characters long, alphanumeric and underscore only and cannot start with a number",
    );
  } else {
    removeRegistrationPane();
    showMainGameSection();
    setupFirstRound();
  }
}

function removeRegistrationPane() {
  document.getElementById(crapsRegistrationPane).style.display = "none"; //display: none removes the element. it no longer takes up the space it would have
}

function showMainGameSection() {
  document.getElementById(crapsMainSection).style.display = "block"; //display: it is set to none in the css so it won't show at first
}

function setupFirstRound() {
  document.getElementById(crapsStatsUsername).innerHTML = crapsUsername;
  setMoney(startingMoney);
  setRounds(startingRounds);
  betEven();
  setBetAmount(minimumBet);
}

function setMoney(money) {
  currentMoney = money
  document.getElementById(crapsStatsMoney).innerHTML = money;
}

function setRounds(round) {
  currentRounds = round
  document.getElementById(crapsStatsRounds).innerHTML = round;
}

function betEven() {
  chooseBet(bets.even);
}

function betOdd() {
  chooseBet(bets.odd);
}

function chooseBet(bet) {
  if (canChangeBet) {
    currentBet = bet;
    document.getElementById(bet).style.backgroundColor = "red";
    const deselectBet = bet == bets.even ? bets.odd : bets.even; //shortcut to write if statement
    document.getElementById(deselectBet).style.backgroundColor = "transparent";
  }  
}

function increaseBet() {
  setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney));
}

function decreaseBet() {
  setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet));
}

function setBetAmount(betAmount) {
  if (canChangeBet){
    currentBetAmount = betAmount;
    document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount;
  }
}

function rollDice() {
  canChangeBet = false
  formatDiceScale()
  document.getElementById(crapsRollDiceButton).style.display = "none";
  const diceRollElement = document.getElementById(crapsRollDiceAnimationContainer)
  rollADie({ element: diceRollElement, numberOfDice: 2, callback: processDiceResult, delay: 1000000000}) // Rolladie is the javascript we imported. check htmlpage

}

window.addEventListener("resize", formatDiceScale)

function formatDiceScale(){
  const vw = window.innerWidth * 0.8
  const vh = window.innerHeight * 0.8
  const widthScale = Math.min(700,vw,vh)
  const heightScale = widthScale * 0.714
  const theScale = heightScale / 494.6592 // check Scaling the Dice roll animation chapter
  document.getElementById(crapsRollDiceAnimationContainer).style.transform = "scale(" + theScale + ")";
  
  // 0.714. this is the ratio
}

function processDiceResult(diceResult){
  // this returns an array like [2,4]
  // const sum = diceResult[0] + diceResult[1]
  const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0);
  let diceSumResult = bets.even
  if (sum % 2 === 1) { //this means if divided by 2 with remainder 1, it is odd
    diceSumResult = bets.odd
  } 
  // we didn't do an "else' block because dicesum is already set to even. an else block would be redundant
  
  setRounds(currentRounds + 1)
  if (diceSumResult === currentBet) {
    alert("YOU WIN!")
    setMoney(currentBet + currentBetAmount)
  } else {
    alert("YOU LOSE")
    setMoney(currentMoney - currentBetAmount)
  }
}