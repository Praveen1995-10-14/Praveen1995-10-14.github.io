const hamburg = document.querySelector('.menu_for_mbl');
const overlay = document.querySelector('.open');
const mainMenu = document.querySelector('.main-menu');
const cancel = document.querySelector('.cancel');

const port = document.querySelector('.portfolio');

hamburg.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});


port.addEventListener('click', () => {
  mainMenu.style.backgroundColor = 'none';
});