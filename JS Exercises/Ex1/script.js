const currentDate = new Date();
const getDateButton = document.querySelector("#date-button");
const dateEl = document.querySelector("#current-date");
const timeEl = document.querySelector("#current-time");
const daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const currentDay = currentDate.getDay();

getDateButton.addEventListener("click", function () {
  dateEl.innerHTML =
    "Today is: " +
    currentDate.toLocaleDateString("ro-RO") +
    ", " +
    daysList[currentDay] +
    ".";
  if (currentDate.getHours() <= 12) {
    timeEl.innerHTML =
      "Current time is: " +
      hours +
      " AM" +
      " : " +
      minutes +
      " : " +
      seconds +
      ".";
  } else {
    timeEl.innerHTML =
      "Current time is: " +
      (hours - 12) +
      " PM" +
      " : " +
      minutes +
      " : " +
      seconds +
      ".";
  }
});
