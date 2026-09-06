// HTML Elements IDs
const crapsUsername = "craps-username-input";
const crapsRegistrationPane = "craps-registration-pane";
const crapsMainSection = "craps-main-section";

function makeDreamComeTrue() {
  document.body.style.background =
    "url(https://i.pinimg.com/originals/96/b5/1d/96b51d3bb8104d88b94951a74d4009dd.gif)";
  document.getElementById("title").style.visibility = "hidden";
}

function registerCrapsPlayer() {
  let crapsUsername = document.getElementById(crapsUsername).value;
  alert("Got: " + crapsUsername);
  removeRegistrationPane();
  showMainGameSection();
}

function removeRegistrationPane() {
  document.getElementById(crapsRegistrationPane).style.display = "none"; //display: none removes the element. it no longer takes up the space it would have
}

function showMainGameSection() {
  document.getElementById(crapsMainSection).style.display = "block"; //display: it is set to none in the css so it won't show at first
}
