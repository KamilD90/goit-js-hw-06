// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza czy wartość wprowadzona przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)

// Informacja o liczbie symboli, która powinna znajdować się w polu input, zawarta się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielony, a jeśli liczba jest nieprawidłowa - czerwony.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

let input = document.getElementById("validation-input");

// input.addEventListener("change", (event) => console.log(event));
//działa przy wcisnieciu ENter
//keyup przy puszczeniu klawisza   , keydown przy wcisnieciu
//blur działa po odkliknięciu z pola, focus działa po kliknięciu w input

input.addEventListener("blur", (event) => {
  input.classList.remove("valid", "invalid");
  //za każdym razem czyścimy stare klasy z poprzedniego wprowadzenia
  //   console.log(input.value.length);
  //   console.log(input.dataset.length);
  if (input.value.length != input.dataset.length) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
});
