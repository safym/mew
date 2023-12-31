const buttons = document.querySelectorAll(".card__button");
const balance = document.querySelector("#balance");
const nextButton = document.querySelector("#nextButton");

const resultCheck = {
  tort: false,
  speakers: false,
  osu: false,
  art: false,
  minecraft: false,
  life: false,
};

const ids = {
  tort: "tort",
  speakers: "speakers",
  osu: "osu",
  art: "art",
  minecraft: "minecraft",
  life: "life",
};

let balanceValue = ++balance.innerHTML;

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    const { name, price } = e.dataset;

    if (name && price) {
      resultCheck[name] = true;

      document.getElementById(ids[name]).play();
      balanceValue = balanceValue - price;

      balance.innerHTML = balanceValue;

      e.classList.toggle("checked");
      e.innerHTML = "Куплено!";
    }

    const allTrue = Object.values(resultCheck).every((value) => value === true);

    if (allTrue) nextButton.classList.toggle("hidden");
  });
});

// ----- AUDIO ------ //
const shop = document.querySelector("#shop");
const hint = document.querySelector(".hint");

let isClicked = false;

document.body.addEventListener("click", function () {
  console.log("shop");

  if (isClicked) return;

  isClicked = true;
  shop.play();

  hint.style = "display: none";
});
