const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close'),
  overlay = document.querySelector('.menu__overlay'),
  overlayModal = document.querySelector('.overlay'),
  modal = document.querySelector('.modal'),
  closeModal = document.querySelector('.modal__close');
form = document.querySelector('.contacts__form');
hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});
overlay.addEventListener('click', () => {
  menu.classList.remove('active');
});


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  overlayModal.style.display = 'none';
});
overlayModal.addEventListener('click', () => {
  modal.style.display = 'none';
  overlayModal.style.display = 'none';
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  setTimeout(() => {
    modal.style.display = 'block';
    overlayModal.style.display = 'block';
  }, 1000);
});

const percent = document.querySelectorAll('.competency__item-percent'),
  progress = document.querySelectorAll('.competency__item-progress');

percent.forEach((el, i) => {
  progress[i].style.width = el.innerHTML;
});
const projectsImg = document.querySelectorAll('.projects__item'),
  projectsButton = document.querySelectorAll('.projects__item-img-buttons');

projectsImg.forEach((el, i) => {
  el.addEventListener('mouseenter', () => {
    projectsButton[i].style.display = 'flex';
  });
});

projectsImg.forEach((el, i) => {
  el.addEventListener('mouseleave', () => {
    projectsButton[i].style.display = 'none';
  });
});