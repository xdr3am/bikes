'use strict';

(function () {
  const navMain = document.querySelector(`.main-nav`);
  const navToggle = document.querySelector(`.main-nav__toggle`);
  const navLink = document.querySelectorAll(`.main-nav__link`);

  navMain.classList.remove(`main-nav--nojs`);

  navToggle.addEventListener(`click`, function () {
    if (navMain.classList.contains(`main-nav--closed`)) {
      navMain.classList.remove(`main-nav--closed`);
      navMain.classList.add(`main-nav--opened`);
    } else {
      navMain.classList.add(`main-nav--closed`);
      navMain.classList.remove(`main-nav--opened`);
    }
  });

  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener(`click`, function (evt) {
      evt.preventDefault();
      navMain.classList.add(`main-nav--closed`);
      navMain.classList.remove(`main-nav--opened`);
    });
  }
})();
