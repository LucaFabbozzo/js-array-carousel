// **MILESTONE 3**
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];

let imagesTags = '';
let counterImages = 0;

const slider = document.querySelector('.items-wrapper');
const sliderThumb = document.querySelector('.items-wrap-small');
const items = document.getElementsByClassName('item');
const next = document.querySelector('.top');
const prev = document.querySelector('.bottom');



for(let i = 0; i < images.length; i++) { 
  imagesTags += `
    <img class="item" src="./img/${images[i]}" alt="${images[i]}">
  `;
 
}

slider.innerHTML += imagesTags;
sliderThumb.innerHTML += imagesTags;




items[counterImages].classList.add('active');

next.addEventListener('click', function() {
 
  items[counterImages].classList.remove('active');

  items[++counterImages].classList.add('active');

  prev.classList.remove('hide');
  if(counterImages === images.length - 1) {
    next.classList.add('hide');
  }


});

prev.addEventListener('click', function() {

  items[counterImages].classList.remove('active');
  
  items[--counterImages].classList.add('active');

  next.classList.remove('hide');
  if(counterImages === 0) {
    prev.classList.add('hide');
  } 
  
})


