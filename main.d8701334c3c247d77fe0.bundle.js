!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({0:function(e,t,n){},6:function(e,t,n){"use strict";n.r(t);var o=document.querySelectorAll(".nav-item"),r=document.querySelectorAll(".nav-link"),c=document.querySelectorAll("section"),u=window.scrollY-110,i=l();function l(){var e=[];return c.forEach((function(t){e.push({top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight,id:t.id})})),e}function a(e){i.forEach((function(t){t.top<=e+110&&e<t.bottom&&o.forEach((function(e){return function(e,t){e.textContent.trim()===t.id?e.classList.add("active"):e.classList.remove("active")}(e,t)}))}))}function d(e,t){var n=e.id,o=i.find((function(e){return e.id===n})),r=u,c=o.top-110-r,l=null,a=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t};requestAnimationFrame((function e(n){null===l&&(l=n);var o=n-l,u=a(o,r,c,t);window.scrollTo(0,u),o<t&&requestAnimationFrame(e)}))}window.addEventListener("scroll",(function(){u=window.scrollY,i=l(),a(u)}));var f=document.querySelector(".button--gallery"),s=document.querySelector(".gallery--fetched"),m=function(){f.addEventListener("click",(function(){var e;s.appendChild(((e=document.createElement("div")).classList.add("gallery__img-container"),e.innerHTML='<img class="gallery__img" src="'.concat("https://source.unsplash.com/570x400/?fruit",'" alt="">'),e))}))};var v=document.querySelector(".subscribe__form"),p=document.querySelector(".subscribe__input"),y=document.querySelector(".section__title--subscribe");n(0);a(),r.forEach((function(e){var t=document.querySelector("".concat(e.getAttribute("href")));e.addEventListener("click",(function(e){e.preventDefault(),d(t,500)}))})),document.querySelector(".footer__text--logo").addEventListener("click",(function(){d(document.getElementById("home"),500)})),document.querySelector(".mouse-img").addEventListener("click",(function(){d(document.getElementById("about"),500)})),m(),v.addEventListener("submit",(function(e){e.preventDefault(),y.textContent="".concat(p.value," subscribed!"),v.remove()}))}});