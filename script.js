let homeEl = document.getElementById("num1-el");
let guestEl = document.getElementById("num2-el");
let homeScore = 12;
let guestScore = 5;

function addOne() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}

function addOneGuest() {
  guestScore += 1;
  guestEl.textContent = guestScore;
}

function addTwo() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestEl.textContent = guestScore;
}

function addThree() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}

function addThreeGuest() {
  guestScore += 2;
  guestEl.textContent = guestScore;
}
