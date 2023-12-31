const outro = document.querySelector("#outro");
const hint = document.querySelector(".hint");

let isClicked = false;

document.body.addEventListener("click", function () {
  if (isClicked) return;
  isClicked = true;

  outro.play();

  hint.style = "display: none";
});
