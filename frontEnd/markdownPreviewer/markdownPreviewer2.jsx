
document.addEventListener("DOMContentLoaded", () => {
  const inputTxt = document.getElementById("editor");
  const previewText = document.getElementById("preview");
  
  const echo = () => {
    const val = inputTxt.value;
    previewText.innerText = val;
  };
  inputTxt.addEventListener("input", echo);
});


