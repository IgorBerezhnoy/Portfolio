const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close'),
  overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});
overlay.addEventListener('click', () => {
  menu.classList.remove('active');
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