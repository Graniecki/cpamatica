'use strict';

const footer = document.querySelector('.footer');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const contentList = document.querySelector('.content-table');

mediaQuery.addListener(removeAccordeionListener);
footer.addEventListener('click', toggleAccordion);
contentList.addEventListener('click', toggleContentList);
contentList.addEventListener('click', sectionScroll);

function removeAccordeionListener(event) {
  if (event.matches) {
    footer.removeEventListener('click', toggleAccordion);
  } else {
    footer.addEventListener('click', toggleAccordion);
  }
}

function toggleAccordion(event) {
  const { target } = event;

  if (!target.classList.contains('footer-title')) {
    return;
  }

  const accordion = target.closest('.accordion');

  accordion.classList.toggle('accordion_opened');
};

function toggleContentList(event) {
  const { target } = event;

  if (!target.classList.contains('content-table__title')) {
    return;
  }

  contentList.classList.toggle('opened');
}

function sectionScroll(event) {
  event.preventDefault();

  const target = event.target;
  const { item } = target.dataset;

  if (!item) return;

  document.querySelector(`#${item}`).scrollIntoView({ behavior: "smooth" });
}

const navigation = document.querySelector('.header__navigation');
const navList = navigation.querySelector('.nav-bar');

navigation.addEventListener('click', openMenu);

function openMenu(event) {
  const target = event.target;

  if (!target.classList.contains('header__menu-toggle')) {
    return;
  };

  navList.classList.toggle('open');

  const contentCondition = navList.classList.contains(navList.classList);

  target.innerText = contentCondition ? 'Menu' : 'Close';
}
