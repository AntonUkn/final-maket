/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/swiper.js */ "./src/js/swiper.js");
/* harmony import */ var _js_swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_pop_up_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/pop-up.js */ "./src/js/pop-up.js");
/* harmony import */ var _js_pop_up_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_pop_up_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_modal_feedback_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/modal-feedback.js */ "./src/js/modal-feedback.js");
/* harmony import */ var _js_info_section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/info-section.js */ "./src/js/info-section.js");
/* harmony import */ var _js_info_section_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_info_section_js__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/info-section.js":
/*!********************************!*\
  !*** ./src/js/info-section.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btnMoreText = document.querySelector('.info-section__btn');
var infoText = Array.from(document.querySelectorAll('.info-section__text-elem'));
var infoDesktop = document.querySelector('.info-section__text-desktop');
var infoSection = document.querySelector('.info-section');
console.log(infoText);
console.log(btnMoreText);
console.log(infoDesktop);

function openText() {
  infoText.forEach(function (item) {
    item.classList.toggle('info-section__hidden');
  });
  infoDesktop.classList.toggle('info-section__desktop-hidden');
  btnText();
}

function btnText() {
  infoText.forEach(function (item) {
    if (item.classList.contains("info-section__hidden")) {
      btnMoreText.innerHTML = "Показать все";
    } else {
      btnMoreText.innerHTML = "Скрыть";
    }
  });
}

btnMoreText.addEventListener('click', openText);

/***/ }),

/***/ "./src/js/modal-feedback.js":
/*!**********************************!*\
  !*** ./src/js/modal-feedback.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/pop-up.js */ "./src/js/pop-up.js");
/* harmony import */ var _js_pop_up_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_pop_up_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/pop-up.js":
/*!**************************!*\
  !*** ./src/js/pop-up.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btnBurger = document.querySelector('.btn--icon-burger');
var btnClose = document.querySelector('.btn--icon-hide');
var popUp = document.getElementById('pop-up');
var blur = document.getElementById('blur');
var btnCall = document.querySelectorAll('.btn--icon-phone');
var modalFeedback = document.getElementById('feedback');
var modalBtnClose = document.querySelector('.modal-feedback__btn-hide');
var btnMessage = document.querySelectorAll('.btn--icon-chat');
var modalCall = document.getElementById('modal-call');
var modalCallBtnClose = document.querySelector('.modal-call__btn-hide');

function openPopUp() {
  popUp.classList.remove('pop-up--hidden');
  blur.classList.add('blur');
  modalFeedback.classList.add('modal-feedback--hidden');
  modalCall.classList.add('modal-feedback--hidden');
}

function closePopUp() {
  popUp.classList.add('pop-up--hidden');
  blur.classList.remove('blur');
}

btnBurger.addEventListener('click', openPopUp);
btnClose.addEventListener('click', closePopUp);
document.addEventListener('keydown', function (event) {
  if (event.code === 'Escape') {
    popUp.classList.add('pop-up--hidden');
    modalFeedback.classList.add('modal-feedback--hidden');
    modalCall.classList.add('modal-feedback--hidden');
    popUp.style.opacity = 1;
    blur.classList.remove('blur');
  }
});

function openModalCall() {
  modalCall.classList.remove('modal-feedback--hidden');
  popUp.classList.add('pop-up--hidden');
  blur.classList.add('blur');
  modalFeedback.classList.add('modal-feedback--hidden');

  if (innerWidth > 1119) {
    popUp.style.opacity = 0.1;
  }
}

function closeModalCall() {
  modalCall.classList.add('modal-feedback--hidden');
  blur.classList.remove('blur');

  if (innerWidth > 1119) {
    popUp.style.opacity = 1;
  }
}

function openModalFeedback() {
  modalFeedback.classList.remove('modal-feedback--hidden');
  popUp.classList.add('pop-up--hidden');
  blur.classList.add('blur');
  modalCall.classList.add('modal-feedback--hidden');

  if (innerWidth > 1119) {
    popUp.style.opacity = 0.1;
  }
}

function closeModalFeedback() {
  modalFeedback.classList.add('modal-feedback--hidden');
  blur.classList.remove('blur');

  if (innerWidth > 1119) {
    popUp.style.opacity = 1;
  }
}

btnMessage[0].addEventListener('click', openModalCall);
btnMessage[1].addEventListener('click', openModalCall);
modalCallBtnClose.addEventListener('click', closeModalCall);
btnCall[0].addEventListener('click', openModalFeedback);
btnCall[1].addEventListener('click', openModalFeedback);
modalBtnClose.addEventListener('click', closeModalFeedback);

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var MyswiperPrices;
var MyswiperTechnique;
var MyswiperBrands;
var swiperBrands = document.querySelector('.swiper');
var swiperPrices = document.querySelector('.prices');
var swiperTechnique = document.querySelector('.swiper-technique');

var createSwiper = function createSwiper(element, width) {
  return new Swiper(element, {
    width: width,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
};

if (window.innerWidth < 769) {
  MyswiperPrices = createSwiper(swiperPrices, 260);
  MyswiperTechnique = createSwiper(swiperTechnique, 240);
  MyswiperBrands = createSwiper(swiperBrands, 240);
}

var swiperBreakpoints = function swiperBreakpoints(element) {
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      element.destroy(false, true);
    }
  });
};

swiperBreakpoints(MyswiperPrices);
swiperBreakpoints(MyswiperTechnique);
swiperBreakpoints(MyswiperBrands); //Кнопка показать/скрыть..............

var btnCardsBrand = document.querySelector('.cards-more');
var cardsBrand = Array.from(document.querySelectorAll('.card-brand'));
var cardsTechnique = Array.from(document.querySelectorAll('.card-technique'));
var arrCardsBrand = cardsBrand.slice(6);
var btnCardsTechnique = document.querySelector('.cards-technique');
var arrCardsTechnique = cardsTechnique.slice(3);

function openCardsBrands() {
  arrCardsBrand.forEach(function (item) {
    item.classList.toggle('hidden');
  });
  btnText();
}

function btnText() {
  if (window.innerWidth > 768) {
    arrCardsBrand.forEach(function (item) {
      if (item.classList.contains('hidden')) {
        btnCardsBrand.innerHTML = 'Показать все';
        btnCardsBrand.classList.remove('cards-more--close');
        btnCardsBrand.classList.remove('btn-hide');
      } else {
        btnCardsBrand.innerHTML = 'Скрыть';
        btnCardsBrand.classList.add('cards-more--close');
        btnCardsBrand.classList.add('btn-hide');
      }
    });
  }
}

window.addEventListener('resize', function () {
  arrCardsBrand.forEach(function (item) {
    if (window.innerWidth < 769) {
      item.classList.add('hidden');
      btnCardsBrand.innerHTML = 'Показать все';
      btnCardsBrand.classList.remove('cards-more--close');
    }
  });
});

function openCardsTechnique() {
  arrCardsTechnique.forEach(function (item) {
    item.classList.toggle('card-technique--hidden');
  });
  btnTextTechnique();
}

function btnTextTechnique() {
  if (window.innerWidth > 768) {
    arrCardsTechnique.forEach(function (item) {
      if (item.classList.contains('card-technique--hidden')) {
        btnCardsTechnique.innerHTML = 'Показать все';
        btnCardsTechnique.classList.remove('cards-more--close');
        btnCardsTechnique.classList.remove('btn-hide');
      } else {
        btnCardsTechnique.innerHTML = 'Скрыть';
        btnCardsTechnique.classList.add('cards-more--close');
        btnCardsTechnique.classList.add('btn-hide');
      }
    });
  }
}

window.addEventListener('resize', function () {
  arrCardsTechnique.forEach(function (item) {
    if (window.innerWidth < 769) {
      item.classList.add('card-technique--hidden');
      btnCardsTechnique.innerHTML = 'Показать все';
      btnCardsTechnique.classList.remove('cards-more--close');
    }
  });
});
btnCardsTechnique.addEventListener('click', openCardsTechnique);
btnCardsBrand.addEventListener('click', openCardsBrands);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map