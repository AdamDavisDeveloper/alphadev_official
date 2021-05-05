const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", updateInput);

//Functions
function updateInput(e) {
  searchValue = e.target.value;
  if (searchValue.toLowerCase() == "size") {
    window.location.assign("/perelandra-puzzles-beta/lv_3/");
  }
}
