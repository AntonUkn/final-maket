!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4)},function(e,n,t){},function(e,n){window.addEventListener("DOMContentLoaded",(function(){!function(e,n,t,r){var o;e=window.matchMedia(e);var i=function(){return e.matches?(o=new Swiper(n,t),void(r&&r(o))):void(void 0!==o&&o.destroy(!0,!0))};e.addEventListener("change",i),i()}("(max-width: 768px)",".swiper",{width:240,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}})}));var t=document.querySelector(".cards-more"),r=Array.from(document.querySelectorAll(".swiper-slide")).slice(6);window.addEventListener("resize",(function(){r.forEach((function(e){window.innerWidth<769&&(e.classList.add("hidden"),t.innerHTML="Показать все",t.classList.remove("cards-more--close"))}))})),t.addEventListener("click",(function(){r.forEach((function(e){e.classList.toggle("hidden")})),window.innerWidth>768&&r.forEach((function(e){e.classList.contains("hidden")?(t.innerHTML="Показать все",t.classList.remove("cards-more--close"),t.classList.remove("btn-hide")):(t.innerHTML="Скрыть",t.classList.add("cards-more--close"),t.classList.add("btn-hide"))}))}))},function(e,n){var t=Array.from(document.querySelectorAll(".btn--icon-burger"));console.log(t),t.addEventListener("click",(function(){}))}]);
//# sourceMappingURL=bundle.js.map