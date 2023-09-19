const choiceOptions = {
  rock: "./Images/rock.png",
  paper: "./Images/hand.png",
  scissors: "./Images/scissor.png",
};

let SETSCORE = 0;
let SETCOMSCORE = 0;
let hands = document.querySelector(".choice-btn");
let gameboxfirst = document.querySelector(".game");
let replay = document.querySelector(".replay");
let nextBtn = document.querySelector(".next-btn");
let secondLine = document.querySelector(".secondline");
let header = document.querySelector(".header");

const pickUserHand = (choice) => {
  console.log(choice);
  let hands = document.querySelector(".choice-btn");
  hands.style.display = "none";
  gameboxfirst.style.display = "none";

  //show the next page with the hand you picked
  let resultboard = document.querySelector(".result-board");
  resultboard.style.display = "flex";

  //set the user picked
  document.getElementById("userPicImage").src = choiceOptions[choice];
  cpHand = pickComputerHand();
  result(choice, cpHand);
};

const pickComputerHand = () => {
  let choices = ["rock", "paper", "scissors"];
  let cpHand = choices[Math.floor(Math.random() * 3)];
  document.getElementById("computerPicImage").src = choiceOptions[cpHand];
  return cpHand;
};

let handImageContainer = document.querySelector(".box.handImageContainer");
let pchandImageContainer = document.querySelector(".box.pchandImageContainer");
const result = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    nextBtn.style.display = "flex";
    setScore(SETSCORE + 1);
    playAgainBtn.style.display = "block";
    replay.style.display = "none";
    secondLine.style.display = "flex";
    handImageContainer.classList.add("paper", "winner");
    pchandImageContainer.classList.add("rock");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    nextBtn.style.display = "flex";
    playAgainBtn.style.display = "block";
    replay.style.display = "none";
    secondLine.style.display = "flex";
    setScore(SETSCORE + 1);
    handImageContainer.classList.add("rock", "winner");
    pchandImageContainer.classList.add("scissors");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    nextBtn.style.display = "flex";
    playAgainBtn.style.display = "block";
    replay.style.display = "none";
    secondLine.style.display = "flex";
    setScore(SETSCORE + 1);
    handImageContainer.classList.add("scissors", "winner");
    pchandImageContainer.classList.add("paper");
  }
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOST!");
    nextBtn.style.display = "none";
    setComScore(SETCOMSCORE + 1);
    playAgainBtn.style.display = "block";
    replay.style.display = "none";
    secondLine.style.display = "flex";

    handImageContainer.classList.add("paper");
    pchandImageContainer.classList.add("scissors", "winner");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOST");
    nextBtn.style.display = "none";
    playAgainBtn.style.display = "block";
    replay.style.display = "none";
    secondLine.style.display = "flex";
    setComScore(SETCOMSCORE + 1);
    handImageContainer.classList.add("scissors");
    pchandImageContainer.classList.add("rock", "winner");
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOST!");
    nextBtn.style.display = "none";
    playAgainBtn.style.display = "block";
    replay.style.display = "none";
    secondLine.style.display = "flex";
    setComScore(SETCOMSCORE + 1);
    handImageContainer.classList.add("rock");
    pchandImageContainer.classList.add("paper", "winner");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("TIE UP!");
    playAgainBtn.style.display = "none";
    replay.style.display = "block";
    nextBtn.style.display = "none";
    secondLine.style.display = "none";
    handImageContainer.classList.add("rock");
    pchandImageContainer.classList.add("rock");
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("TIE UP!");
    playAgainBtn.style.display = "none";
    replay.style.display = "block";
    nextBtn.style.display = "none";
    secondLine.style.display = "none";
    handImageContainer.classList.add("paper");
    pchandImageContainer.classList.add("paper");
  }

  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("TIE UP!");
    playAgainBtn.style.display = "none";
    replay.style.display = "block";
    nextBtn.style.display = "none";
    secondLine.style.display = "none";
    handImageContainer.classList.add("scissors");
    pchandImageContainer.classList.add("scissors");
  }
};

const gameDiv = document.querySelector(".result-board");
const playAgainBtn = document.querySelector(".play-again");
const hurrayPage = document.querySelector(".won-game");

const setDecision = (decision) => {
  console.log(decision);
  document.querySelector(".decision p").innerText = decision;
};

const setScore = (score) => {
  SETSCORE = score;
  localStorage.setItem("userScore", SETSCORE);
  document.querySelector(".score h1").innerText = score;
};
const setComScore = (score) => {
  SETCOMSCORE = score;
  localStorage.setItem("comScore", SETCOMSCORE);
  document.querySelector(".comscore h1").innerText = score;
};

// To retrieve the scores (e.g., when the page loads)
const userScore = localStorage.getItem("userScore");
const comScore = localStorage.getItem("comScore");

if (userScore !== null) {
  // Update the user's score if it exists in localStorage
  document.querySelector(".score h1").innerText = userScore;
}

if (comScore !== null) {
  // Update the computer's score if it exists in localStorage
  document.querySelector(".comscore h1").innerText = comScore;
}

// onclick event code for play again button for second page
playAgainBtn.addEventListener("click", () => {
  gameDiv.style.display = "none";
  hands.style.display = "flex";
  gameboxfirst.style.display = "block";
  handImageContainer.classList.remove("paper", "rock", "scissors", "winner");
  pchandImageContainer.classList.remove("paper", "rock", "scissors", "winner");
});
replay.addEventListener("click", () => {
  gameDiv.style.display = "none";
  hands.style.display = "flex";
  gameboxfirst.style.display = "block";
  handImageContainer.classList.remove("paper", "rock", "scissors", "winner");
  pchandImageContainer.classList.remove("paper", "rock", "scissors", "winner");
});

//onclick event code for play again button on hurray page
const playAgainBtnHurrayPage = document.querySelector(
  ".play-again-hurray-page"
);
playAgainBtnHurrayPage.addEventListener("click", () => {
  hurrayPage.style.display = "none";
  hands.style.display = "flex";
  header.style.display = "flex";
  gameboxfirst.style.display = "block";
  handImageContainer.classList.remove("paper", "rock", "scissors", "winner");
  pchandImageContainer.classList.remove("paper", "rock", "scissors", "winner");
});

//onclick event for rules button
const btnRules = document.querySelector(".rules-btn");
const Rules = document.querySelector(".rules");
btnRules.addEventListener("click", () => {
  Rules.style.display = "block";
});

//onclick event for close the rules tab
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  Rules.style.display = "none";
});

//onclick event for next button
nextBtn.addEventListener("click", () => {
  gameDiv.style.display = "none";
  hands.style.display = "none";
  hurrayPage.style.display = "flex";
  header.style.display = "none";
  nextBtn.style.display = "none";
});
