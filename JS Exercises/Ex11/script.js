const celsiusResult = document.querySelector("#celsius-result");
const fahrenheitResult = document.querySelector("#fahrenheit-result");
const celsiusToFahrenheitButton = document.querySelector("#convert-C");
const fahrenheitToCelsiusButton = document.querySelector("#convert-F");

celsiusToFahrenheitButton.addEventListener("click", function () {
  const celsiusInput = parseInt(document.querySelector("#celsius-input").value);
  if (celsiusInput)
    celsiusResult.innerHTML = celsiusInput * 1.8 + 32 + " &#8457";
});

fahrenheitToCelsiusButton.addEventListener("click", function () {
  const fahrenheitInput = parseInt(
    document.querySelector("#fahrenheit-input").value
  );
  if (fahrenheitInput)
    fahrenheitResult.innerHTML = (fahrenheitInput - 32) * (5 / 9) + " &#8457";
});
