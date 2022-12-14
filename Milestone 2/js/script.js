// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];

let imagesTags = '';
let counterImages = 0;

const slider = document.querySelector('.slider');
const items = document.getElementsByClassName('item');

for(let i = 0; i < images.length; i++) { 
  imagesTags += `
    <img class="item" src="./img/${images[i]}" alt="${images[i]}">
  `;
 
}


slider.innerHTML += imagesTags;

items[counterImages].classList.add('active');