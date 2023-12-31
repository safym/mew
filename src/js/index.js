const chimes = document.querySelector("#chimes");
const intro = document.querySelector("#denoised_intro");
const cheese = document.querySelector(".cheese");
const nextButton = document.querySelector("#nextButton");
const hint = document.querySelector(".hint");

let isClicked = false;

document.body.addEventListener("click", function () {
  if (isClicked) return;

  isClicked = true;
  chimes.play();
  intro.play();

  cheese.style = "display: block";
  hint.style = "display: none";
});
