const checkButton = document.querySelector("#check-button");
const reserButton = document.querySelector("#reser-button");

checkButton.addEventListener("click", function () {
  const result = Math.floor(Math.random() * 10) + 1;
  const numberInputValue = parseInt(
    document.querySelector("#number-input").value
  );
  const response = document.querySelector("#response");
  const computerChoice = document.querySelector("#computer-choice");
  if (numberInputValue >= 1 && numberInputValue <= 10) {
    if (numberInputValue === result) {
      computerChoice.innerHTML = result;
      response.innerHTML = "GoodWork";
    } else {
      computerChoice.innerHTML = result;
      response.innerHTML = "Not matched";
    }
  } else {
    response.innerHTML = "Please choose a number between 1 and 10";
  }
});
