const hint = document.querySelector(".hint");

const call = document.querySelector("#call");
const buzz = document.querySelector("#buzz");

const moscow = document.querySelector("#moscow");
const rostov = document.querySelector("#rostov");
const almaty = document.querySelector("#almaty");

const city = document.querySelector("#city");
const accept = document.querySelector("#accept");
const windowElement = document.querySelector(".window");

const nextButton = document.querySelector("#nextButton");

let isClicked = false;

document.body.addEventListener("click", function () {
  if (isClicked) return;

  isClicked = true;

  call.play();
  buzz.play();

  hint.style = "display: none";

  setTimeout(() => {
    buzz.stop();
  }, 6000);

  setTimeout(() => {
    city.innerHTML = "Москва";
    windowElement.classList.toggle("hidden");
    moscow.play();
  }, 6500);

  setTimeout(() => {
    windowElement.classList.toggle("hidden");
  }, 28500);

  setTimeout(() => {
    city.innerHTML = "Ростов";
    windowElement.classList.toggle("hidden");

    rostov.play();
  }, 29500);

  setTimeout(() => {
    windowElement.classList.toggle("hidden");
  }, 38500);

  setTimeout(() => {
    city.innerHTML = "Алматы";
    windowElement.classList.toggle("hidden");

    almaty.play();
  }, 39500);

  setTimeout(() => {
    nextButton.classList.toggle("hidden");
  }, 52500);

  setTimeout(() => {
    windowElement.classList.toggle("hidden");
  }, 53000);
});
