const calcButton = document.querySelector("#calculate-cutton");
const resultEl = document.querySelector("#result");

calcButton.addEventListener("click", function () {
  const numberInputVal = parseInt(
    document.querySelector("#number-input").value
  );
  if (!numberInputVal) {
    resultEl.innerHTML = "Please input number";
  } else {
    if (numberInputVal > 13) {
      resultEl.innerHTML =
        "Number is greater than 13 so the result is double the absolute difference: " +
        Math.abs((numberInputVal - 13) * 2) +
        ".";
    } else {
      resultEl.innerHTML = "Result is: " + (numberInputVal - 13) + ".";
    }
  }
});
