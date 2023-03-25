const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

// Właściwość classList
// Właściwość classList przechowuje obiekt z metodami pracy z klasami elementu.

const lista = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  let list_element = document.createElement("li");
  list_element.textContent = ingredient;
  list_element.classList.add("item");
  lista.appendChild(list_element);
});
