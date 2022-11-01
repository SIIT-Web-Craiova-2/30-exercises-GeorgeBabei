const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const resultDiv = document.querySelector("#result-div");

multiplyButton.addEventListener("click", function () {
  const firstNumberValue = document.querySelector("#first-number").value;
  const secondNumberValue = document.querySelector("#second-number").value;
  resultDiv.innerHTML =
    "The result is: " + firstNumberValue * secondNumberValue;
});
divideButton.addEventListener("click", function () {
  const firstNumberValue = document.querySelector("#first-number").value;
  const secondNumberValue = document.querySelector("#second-number").value;
  resultDiv.innerHTML =
    "The result is: " + firstNumberValue / secondNumberValue;
});
