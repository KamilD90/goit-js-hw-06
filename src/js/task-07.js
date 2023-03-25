// Zadanie 7
// Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas zmiany wartości suwakiem, ma zmieniać się rozmiar tekstu w elemencie span

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

let changeSize = document.getElementById("font-size-control");

let livingText = document.getElementById("text");

changeSize.addEventListener("input", (event) => {
  livingText.style.fontSize = changeSize.value + "px";
});
