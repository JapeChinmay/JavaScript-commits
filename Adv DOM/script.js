'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');

const allSection = document.querySelectorAll('.section');
console.log(allSection);

console.log(document.getElementsByClassName('btn'));

/// creating and inserting element.

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  "we use cookie for data purpose. <button class = 'btn btn--close-cookie'>Got it </button>";

/////////////////////////////////////////////////////////////

// event listner
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('add event listner : Great your are reading  the heading');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);
