const calcBtn = document.querySelector("#compute-button");
const result = document.querySelector("#result");

calcBtn.addEventListener("click", function () {
  const firstSide = parseInt(document.querySelector("#nr1").value);
  const secondSide = parseInt(document.querySelector("#second-side").value);
  const thirdSide = parseInt(document.querySelector("#third-side").value);
  const perimeter = (firstSide + secondSide + thirdSide) / 2;

  result.innerHTML = Math.sqrt(
    perimeter *
      (perimeter - firstSide) *
      (perimeter - secondSide) *
      (perimeter - thirdSide)
  );
});
