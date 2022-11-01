window.addEventListener("load", () => {
  const printBtn = document.querySelector("#print-button");
  printBtn.addEventListener("click", () => {
    window.print();
  });
});
