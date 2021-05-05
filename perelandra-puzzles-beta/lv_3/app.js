//Query Selectors
const red = document.querySelector(".red");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const purple = document.querySelector(".purple");
const green = document.querySelector(".green");

let code = [];
let control = [1, 5, 6, 3, 2, 4].toString();

// Event Listeners
red.addEventListener("click", (logged) => {
  if (logged.target.classList.contains("red")) {
    clicked(1);
    test(code);
  }
});

pink.addEventListener("click", (logged) => {
  if (logged.target.classList.contains("pink")) {
    clicked(2);
    test(code);
  }
});

blue.addEventListener("click", (logged) => {
  if (logged.target.classList.contains("blue")) {
    clicked(3);
    test(code);
  }
});

yellow.addEventListener("click", (logged) => {
  if (logged.target.classList.contains("yellow")) {
    clicked(4);
    test(code);
  }
});

purple.addEventListener("click", (logged) => {
  if (logged.target.classList.contains("purple")) {
    clicked(5);
    test(code);
  }
});

green.addEventListener("click", (logged) => {
  if (logged.target.classList.contains("green")) {
    clicked(6);
    test(code);
  }
});

//Functions
function clicked(number) {
  code.push(number);
}

function test(sequence) {
  if (sequence.toString() == control) {
    // should redirect to next puzzle
    window.location.assign("/perelandra-puzzles-beta/lv_4");
  }
  if (sequence.length == 6 && sequence.toString() != control) {
    code = [];
  }
}
