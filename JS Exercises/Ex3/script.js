window.addEventListener("load", () => {
  const currentDate = new Date();
  document.querySelector("#date-div").innerHTML =
    currentDate.toLocaleDateString();
  console.log(currentDate);
});
