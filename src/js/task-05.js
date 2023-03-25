// Zadanie 5
// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się tekst "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

let input = document.getElementById("name-input");
// input.addEventListener("change", (event) => console.log(event));
//działa przy wcisnieciu ENter
//keyup przy puszczeniu klawisza   , keydown przy wcisnieciu

input.addEventListener("keyup", (event) => {
  let outputText = document.getElementById("name-output");
  if (input.value.length > 0) {
    outputText.innerText = input.value;
  } else {
    outputText.innerText = "Anonymus";
  }
});
