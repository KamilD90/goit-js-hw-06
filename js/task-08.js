// Napisz skrypt zarządzania formularzem logowania.

// Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie wydarzenia submit
// Podczas przesyłania formularza strona nie powinna się odświeżać.
// Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.

// const Formularz = document.getElementsByClassName("login-form");
// getElementbyclassName zwraca tablice z elementami o klasie której szukamy, dlatego żeby dostać się do jej wartości musimy ją wywołać przez Formularz[0]

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(event.currentTarget);

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
