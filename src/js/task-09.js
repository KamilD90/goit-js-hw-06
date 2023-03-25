function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline) po kliknięciu na button.change-color i wyświetla wartość koloru w span.color.

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

const body = document.getElementsByTagName("body");

const changeColor = document.querySelector(".change-color");

const currentColor = document.querySelector(".color");

changeColor.addEventListener("click", toogleColor);

function toogleColor() {
  body[0].style.backgroundColor = getRandomHexColor();
  currentColor.textContent = rgb2hex(body[0].style.backgroundColor);
}
