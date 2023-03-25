// Napisz skrypt, który:

// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const items= document.querySelectorAll('.item')
console.log(`Number of categories: ${items.length}`)

for (const item of items){
    console.log (`Category: ${item.firstElementChild.textContent}`) 
    const elementNumber= item.querySelectorAll('li')
    console.log(`Elements: ${elementNumber.length}`)
}