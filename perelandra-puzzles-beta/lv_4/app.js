const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", updateInput);

//Functions
function updateInput(e) {
  searchValue = e.target.value;
  if (searchValue.toString() == "55") {
    window.location.assign("/perelandra-puzzles-beta/");
    //route to Lv-5 when 5 has been made ^^^
  }
}
