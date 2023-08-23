function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + "; path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

function init() {
  const radioButtons = document.getElementsByName("language");
  const storedValue = getCookie("language");

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === storedValue) {
      radioButtons[i].checked = true;
      break;
    }
  }
}

function handleRadioChange(event) {
  const selectedValue = event.target.value;
  setCookie("language", selectedValue);
}

window.onload = () => init();
