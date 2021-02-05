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

'use strict';

(function () {
  const anchors = document.querySelectorAll(`a[href*="#"]`);

  for (let anchor of anchors) {
    anchor.addEventListener(`click`, function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute(`href`).substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: `smooth`,
        block: `start`,
      });
    });
  }
})();
