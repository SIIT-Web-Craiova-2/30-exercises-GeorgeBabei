window.addEventListener("load", () => {
  function fileExtension() {
    const fileInput = document.querySelector("#file-input").value;
    const fileExtensionEl = document.querySelector("#file-extension");
    fileExtensionEl.innerHTML = fileInput.split(".").pop();
    return fileExtensionEl.innerHTML;
  }
});
