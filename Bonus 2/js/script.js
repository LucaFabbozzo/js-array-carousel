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
let thumbTags = '';
let counterImages = 0;

const slider = document.querySelector('.items-wrapper');
const sliderThumb = document.querySelector('.items-wrap-small');

const next = document.querySelector('.top');
const prev = document.querySelector('.bottom');

const nextThumb = document.querySelector('.small-top');
const prevThumb = document.querySelector('.small-bottom');


for(let i = 0; i < images.length; i++) { 
  imagesTags += `
    <img class="item" src="./img/${images[i]}" alt="${images[i]}">
  `;

  thumbTags += `
      <img class="small" src="./img/${images[i]}" alt="${images[i]}">
  `;
 
}

slider.innerHTML += imagesTags;
sliderThumb.innerHTML +=thumbTags;

const items = document.getElementsByClassName('item');
const thumbs = document.getElementsByClassName('small');


items[counterImages].classList.add('active');
thumbs[counterImages].classList.add('active');


next.addEventListener('click', function() {

  items[counterImages].classList.remove('active');

  items[++counterImages].classList.add('active');

  // if(counterImages === images) counterImages = 0;

  prev.classList.remove('hide');
  if(counterImages === images.length - 1) {
    next.classList.add('hide');
  }


});

prev.addEventListener('click', function() {

  items[counterImages].classList.remove('active');
  
  items[--counterImages].classList.add('active');

  // if(counterImages < 0 ) counterImages = images - 1;

  next.classList.remove('hide');
  if(counterImages === 0) {
    prev.classList.add('hide');
  } 
  
})




nextThumb.addEventListener('click', function() {

  thumbs[counterImages].classList.remove('active');

  thumbs[++counterImages].classList.add('active');

  prevThumb.classList.remove('hide');
  if(counterImages === images.length - 1) {
    nextThumb.classList.add('hide');
  }

});

prevThumb.addEventListener('click', function() {


  thumbs[counterImages].classList.remove('active');

  thumbs[--counterImages].classList.add('active');

  nextThumb.classList.remove('hide');
  if(counterImages === 0) {
    prevThumb.classList.add('hide');
  } 
})



