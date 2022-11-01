const calcButton = document.querySelector("#compute-button");

calcButton.addEventListener("click", function () {
  const yearInput = parseInt(document.querySelector("#year-field").value);
  const result = document.querySelector("#result");
  if (yearInput) {
    if (yearInput % 4 === 0) {
      if (yearInput % 100 === 0) {
        if (yearInput % 400 !== 0) {
          result.innerHTML = yearInput + " is not a leap year";
        } else result.innerHTML = yearInput + " is a leap year";
      } else result.innerHTML = yearInput + " is a leap year";
    } else {
      result.innerHTML = yearInput + " is not a leap year";
    }
  }
});
