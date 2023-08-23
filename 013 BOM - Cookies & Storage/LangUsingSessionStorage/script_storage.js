function setStorageValue(value) {
  if (typeof Storage !== "undefined") {
    sessionStorage.setItem("language", value);
  }
}

function getStorageValue() {
  if (typeof Storage !== "undefined") {
    return sessionStorage.getItem("language");
  }
  return "";
}

function init() {
  const radioButtons = document.getElementsByName("language");
  const storedValue = getStorageValue();

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === storedValue) {
      radioButtons[i].checked = true;
      break;
    }
  }
}

function handleRadioChange(event) {
  const selectedValue = event.target.value;
  setStorageValue(selectedValue);
}

window.onload = () => init();
