//circles
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const resetBtn = document.querySelector(".reset");

// keys
let code = [];
let control = [8, 6, 7, 5, 3, 1, 9].toString();

// event listeners
one.addEventListener("click", function () {
  clicked(1);
  test(code);
});

two.addEventListener("click", function () {
  clicked(2);
  test(code);
});

three.addEventListener("click", function () {
  clicked(3);
  test(code);
});

four.addEventListener("click", function () {
  clicked(4);
  test(code);
});

five.addEventListener("click", function () {
  clicked(5);
  test(code);
});

six.addEventListener("click", function () {
  clicked(6);
  test(code);
});

seven.addEventListener("click", function () {
  clicked(7);
  test(code);
});

eight.addEventListener("click", function () {
  clicked(8);
  test(code);
});

nine.addEventListener("click", function () {
  clicked(9);
  test(code);
});

resetBtn.addEventListener("click", reset);

// functions
function clicked(number) {
  code.push(number);
  console.log(code);
}

function test(sequence) {
  if (sequence.toString() == control) {
    // should redirect to next puzzle
    window.location.assign("/perelandra-puzzles-beta/lv_2/");
  }
}

function reset() {
  code = [];
}
