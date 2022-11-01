const calculateDaysButton = document.querySelector("#calculate-button");

calculateDaysButton.addEventListener("click", function () {
  const currentDateDiv = document.querySelector("#current-date");
  const daysLeftDiv = document.querySelector("#days-left");
  const currentDate = new Date();
  let christmas = new Date(currentDate.getFullYear(), 11, 25);
  const oneDay = 24 * 3600 * 1000;
  const daysLeft = Math.round((christmas - currentDate) / oneDay);
  if (currentDate.getMonth() == 11 && currentDate.getDate() > 25) {
    christmas = new Date(currentDate.getFullYear() + 1, 11, 25);
    currentDateDiv.innerHTML =
      "The current date is " +
      currentDate.getDate() +
      "/" +
      currentDate.getMonth() +
      "/" +
      currentDate.getFullYear() +
      ".";
    daysLeftDiv.innerHTML = daysLeft + " days until Christmas";
  } else {
    currentDateDiv.innerHTML =
      "The current date is " +
      currentDate.getDate() +
      "/" +
      currentDate.getMonth() +
      "/" +
      currentDate.getFullYear() +
      ".";
    daysLeftDiv.innerHTML = daysLeft + " days left until Christmas.";
  }
});
