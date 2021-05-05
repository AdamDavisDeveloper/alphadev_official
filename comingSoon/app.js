const welcome = document.querySelector(".access");
welcome.addEventListener("click", check);

function check() {
  const code = prompt("Enter access code: ").toLowerCase();
  if (code == "venus") {
    window.location.assign("/perelandra-puzzles-beta/");
  } else {
    alert("Sorry, that's incorrect!");
  }
}
