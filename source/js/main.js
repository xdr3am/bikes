!function(){"use strict";!function(){const e=document.querySelector(".main-nav"),n=document.querySelector(".main-nav__toggle"),t=document.querySelectorAll(".main-nav__link");e.classList.remove("main-nav--nojs"),n.addEventListener("click",(function(){e.classList.contains("main-nav--closed")?(e.classList.remove("main-nav--closed"),e.classList.add("main-nav--opened")):(e.classList.add("main-nav--closed"),e.classList.remove("main-nav--opened"))}));for(let n=0;n<t.length;n++)t[n].addEventListener("click",(function(n){n.preventDefault(),e.classList.add("main-nav--closed"),e.classList.remove("main-nav--opened")}))}(),function(){const e=document.querySelectorAll('a[href*="#"]');for(let n of e)n.addEventListener("click",(function(e){e.preventDefault();const t=n.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))}()}();
