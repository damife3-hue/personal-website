// Craps Main Data
let crapsUsername = ""

// Craps Game Settings
const startingMoney = 1000
const startingRounds = 0

// HTML Elements IDs
const crapsUsernameInput = "craps-username-input";
const crapsRegistrationPane = "craps-registration-pane";
const crapsMainSection = "craps-main-section";
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"

function makeDreamComeTrue() {
  document.body.style.background =
    "url(https://i.pinimg.com/originals/96/b5/1d/96b51d3bb8104d88b94951a74d4009dd.gif)";
  document.getElementById("title").style.visibility = "hidden";
}

function registerCrapsPlayer() {
  crapsUsername = document.getElementById(crapsUsernameInput).value;

  //Username Validation Check

  // Below is Regex for searching for a pattern in a string.
  let firstCharIsDigitRegex = /^[0-9]|[^a-zA-z0-9_]/g // the carey(^) behind the [] means negation

  if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)){
    alert("Username must be at least 5 characters long, alphanumeric and underscore only and cannot start with a number")
  } else {
    removeRegistrationPane()
    showMainGameSection()
    setupFirstRound()
  }
}

function removeRegistrationPane() {
  document.getElementById(crapsRegistrationPane).style.display = "none"; //display: none removes the element. it no longer takes up the space it would have
}

function showMainGameSection() {
  document.getElementById(crapsMainSection).style.display = "block"; //display: it is set to none in the css so it won't show at first
}

function setupFirstRound(){
  document.getElementById(crapsStatsUsername).innerHTML = crapsUsername;
  setMoney(startingMoney)
  setRounds(startingRounds)
}

function setMoney(money){
  document.getElementById(crapsStatsMoney).innerHTML = money;
}

function setRounds(round){
  document.getElementById(crapsStatsRounds).innerHTML = round;
}