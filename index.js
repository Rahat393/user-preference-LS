const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainDiv = document.querySelector("main");

const setValue = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;
  mainDiv.style.backgroundColor = bgColor;
  mainDiv.style.fontSize = fontSize;
};

// initaial load ls value
const initialSetup = () => {
  const bgColor = localStorage.getItem("bgColor");
  const fontSize = localStorage.getItem("fontSize");
  if (bgColor && fontSize) {
    setValue(fontSize, bgColor);
  }
  if (!bgColor && !fontSize) {
    setValue("16px", "aqua");
  }
  if (!bgColor && fontSize) {
    setValue(fontSize, "aqua");
  }
  if (bgColor && !fontSize) {
    setValue("16px", bgColor);
  }
};

// changeFontSize
const changeFontSize = (event) => {
  const selectedFontSize = event.target.value;
  mainDiv.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};

// changeBgColor
const changeBgColor = (event) => {
  const selectedBgColor = event.target.value;
  mainDiv.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};

// removeFromLS
const removeItem = () => {
  localStorage.removeItem("bgColor");
  localStorage.removeItem("fontSize");
  setValue("16px", "aqua");
};

// add eventListener
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", removeItem);

initialSetup();
