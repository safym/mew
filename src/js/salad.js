const saladIngreddients = document.querySelectorAll(".salad__image");
const nextButton = document.querySelector("#nextButton");

const resultCheck = {
  carrot: false,
  bacon: false,
  mayo: false,
  pickles: false,
  potato: false,
};

const wow = document.getElementById("wow");

// ----- AUDIO ------ //
const salad = document.querySelector("#salad");
const hint = document.querySelector(".hint");

let isClicked = false;

document.body.addEventListener("click", function () {
  if (isClicked) return;

  isClicked = true;
  salad.play();

  hint.style = "display: none";
});

saladIngreddients.forEach((e) => {
  e.addEventListener("click", () => {
    const { name } = e.dataset;

    if (name) {
      resultCheck[name] = true;
      e.classList.toggle("checked");
      const salad_piece = document.querySelector("#salad_piece");
      salad_piece.play();
    }

    const allTrue = Object.values(resultCheck).every((value) => value === true);

    if (allTrue) {
      wow.play();
      nextButton.classList.toggle("hidden");
    }
  });
});
