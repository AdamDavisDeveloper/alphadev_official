// Main Preloader //
const documentBody = document.querySelector(".load-main");
const footer = document.querySelector("footer");
const fullWhite = document.createElement("div");

//Creates a blank white cover until the page has fully loaded
function init() {
  fullWhite.classList.add("full-cover");
  documentBody.appendChild(fullWhite);
  window.addEventListener("load", generateLoader);
}

//Creates the preloader content which has CSS animations enabled
//Executes the loading-bar after one sec as defined in stylesheet "loader.css"
function generateLoader() {
  const sliderTop = document.createElement("div");
  const sliderBottom = document.createElement("div");
  sliderTop.classList.add("slider-top");
  sliderBottom.classList.add("slider-bottom");
  sliderTop.innerHTML = `
  <div class="loading">
  <p class="loader-title">ADAM DAVIS</p>
  <span class="loading-bar"></span>
  </div>`;
  documentBody.appendChild(sliderTop);
  documentBody.appendChild(sliderBottom);
  documentBody.removeChild(fullWhite);
  footer.classList.add("not-showing");
  slideLoader();
}

// slides the two white divs up and down respectively after the timeout has finished
// Clears the HTML loader created in generateLoader()
function slideLoader() {
  setTimeout(() => {
    const sliderTop = document.querySelector(".slider-top");
    const sliderBottom = document.querySelector(".slider-bottom");
    const loader = document.querySelector(".loading");
    sliderTop.classList.add("slide-up");
    sliderBottom.classList.add("slide-down");
    loader.classList.add("not-showing");
    setTimeout(() => {
      clear();
      footer.classList.remove("not-showing");
    }, 850);
  }, 1050);
}

function clear() {
  documentBody.innerHTML = "";
}

init();

// const history = [];

// function saveHistory() {
//   const url = window.location.href;
//   history.push(url);
//   console.log(history);
// }

// saveHistory();
