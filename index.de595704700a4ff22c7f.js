/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 324:
/***/ (() => {

// import arr from "./data";

!function () {
  var body = document.querySelector('body');
  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  body.append(wrapper);
  var tittle = document.createElement('h1');
  tittle.textContent = 'RSS Виртуальная клавиатура';
  tittle.classList.add('tittle');
  wrapper.append(tittle);
  var textArrea = document.createElement('textarea');
  textArrea.classList.add('textarea');
  wrapper.append(textArrea);
  var keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboard.id = 'keyboard';
  wrapper.append(keyboard);

  // create keyboard

  // function init () {
  //     let out = '';
  //     for(let i = 0; i < arr.length; i++) {
  //         if(arr[i] !== 'Backspace' && arr[i] !== 'Tab' && arr[i] !== 'CapsLock' && arr[i] !== 'Enter' && arr[i] !== 'Shift' && arr[i] !== 'Control' && arr[i] !== 'Alt' && arr[i] !== 'ArrowUp' && arr[i] !== 'ArrowLeft' && arr[i] !== 'ArrowRight' && arr[i] !== 'ArrowDown' &&  arr[i] !== ' ' && arr[i] !== 'Meta') {
  //             out += `<div class="buttom" data="${arr[i]}">${arr[i]}</div>`;
  //         }
  //         if(arr[i] === 'Backspace') {
  //             out += `<div class="buttom backspace" data="${arr[i]}">${arr[i]}</div>`;
  //         }

  //         if(arr[i] === 'Tab') {
  //             out += `<div class="buttom tab" data="${arr[i]}">${arr[i]}</div>`;
  //         }

  //         if(arr[i] === 'CapsLock') {
  //             out += `<div class="buttom backspace" data="${arr[i]}">${arr[i]}</div>`;
  //         }

  //         if(arr[i] === 'Enter') {
  //             out += `<div class="buttom backspace" data="${arr[i]}">${arr[i]}</div>`;
  //         }

  //         if(arr[i] === 'Shift') {
  //             out += `<div class="buttom backspace" data="${arr[i]}">${arr[i]}</div>`;
  //         }

  //         if(arr[i] === 'Alt') {
  //             out += `<div class="buttom ctrl" data="${arr[i]}">${arr[i]}</div>`;
  //         }

  //         if(arr[i] === 'ArrowDown') {
  //             out += `<div class="buttom ctrl" data="${arr[i]}"><div class="botton-triangle"></div></div>`;
  //         }

  //         if(arr[i] === 'ArrowUp') {
  //             out += `<div class="buttom ctrl" data="${arr[i]}"><div class="top-triangle"></div></div>`;
  //         }

  //         if(arr[i] === 'ArrowLeft') {
  //             out += `<div class="buttom ctrl" data="${arr[i]}"><div class="left-triangle"></div></div>`;
  //         }

  //         if(arr[i] === 'ArrowRight') {
  //             out += `<div class="buttom ctrl" data="${arr[i]}"><div class="right-triangle"></div></div>`;
  //         }

  //         if(arr[i] === 'Control' ) {
  //             out += `<div class="buttom ctrl" data="${arr[i]}">Ctrl</div>`;
  //         }

  //         if(arr[i] === ' ') {
  //             out += `<div class="buttom space" data="${arr[i]}">${arr[i]}</div>`;
  //         }

  //         if(arr[i] === 'Meta') {
  //             out += `<div class="buttom ctrl" data="${arr[i]}">Win</div>`;
  //         }
  //     }

  //     document.querySelector('.keyboard').innerHTML = out;
  // }

  // init();
}();

/***/ }),

/***/ 614:
/***/ (() => {

var textarea = document.querySelector('.textarea');
document.onclick = function (evevnt) {
  console.log(evevnt.target);
  if (evevnt.target.classList.contains('buttom') && evevnt.target.textContent.length == 1) {
    textarea.textContent += evevnt.target.textContent;
  }
};
document.querySelector('.keyboard').onmousedown = function (event) {
  var buttoms = document.querySelectorAll('.buttom');
  buttoms.forEach(function (elem) {
    elem.classList.remove('active');
  });
  if (event.target.classList.contains('buttom')) {
    event.target.classList.add('active');
  }
  // console.log(event.target);
};

document.querySelector('.keyboard').onmouseup = function (event) {
  var buttoms = document.querySelectorAll('.buttom');
  buttoms.forEach(function (elem) {
    elem.classList.remove('active');
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/assets/js/createKeyBoard.js
var createKeyBoard = __webpack_require__(324);
;// CONCATENATED MODULE: ./src/assets/js/data.js
var arr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
/* harmony default export */ const data = (arr);
;// CONCATENATED MODULE: ./src/assets/js/getKeyValues.js


// document.onkeydown = function(event) {
//     console.log(event.key);
// }

function init() {
  var out = '';
  for (var i = 0; i < data.length; i++) {
    if (data[i] !== 'Backspace' && data[i] !== 'Tab' && data[i] !== 'CapsLock' && data[i] !== 'Enter' && data[i] !== 'Shift' && data[i] !== 'Control' && data[i] !== 'Alt' && data[i] !== 'ArrowUp' && data[i] !== 'ArrowLeft' && data[i] !== 'ArrowRight' && data[i] !== 'ArrowDown' && data[i] !== ' ' && data[i] !== 'Meta' && data[i] !== 'Delete') {
      out += "<div class=\"buttom\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'Backspace') {
      out += "<div class=\"buttom backspace\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'Tab') {
      out += "<div class=\"buttom tab\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'CapsLock') {
      out += "<div class=\"buttom backspace\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'Enter') {
      out += "<div class=\"buttom backspace\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'Shift') {
      out += "<div class=\"buttom backspace\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'Alt') {
      out += "<div class=\"buttom ctrl\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'Delete') {
      out += "<div class=\"buttom ctrl\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'ArrowDown') {
      out += "<div class=\"buttom ctrl\" data=\"".concat(data[i], "\"><div class=\"botton-triangle\"></div></div>");
    }
    if (data[i] === 'ArrowUp') {
      out += "<div class=\"buttom ctrl\" data=\"".concat(data[i], "\"><div class=\"top-triangle\"></div></div>");
    }
    if (data[i] === 'ArrowLeft') {
      out += "<div class=\"buttom ctrl\" data=\"".concat(data[i], "\"><div class=\"left-triangle\"></div></div>");
    }
    if (data[i] === 'ArrowRight') {
      out += "<div class=\"buttom ctrl\" data=\"".concat(data[i], "\"><div class=\"right-triangle\"></div></div>");
    }
    if (data[i] === 'Control') {
      out += "<div class=\"buttom ctrl\" data=\"".concat(data[i], "\">Ctrl</div>");
    }
    if (data[i] === ' ') {
      out += "<div class=\"buttom space\" data=\"".concat(data[i], "\">").concat(data[i], "</div>");
    }
    if (data[i] === 'Meta') {
      out += "<div class=\"buttom ctrl\" data=\"".concat(data[i], "\">Win</div>");
    }
  }
  document.querySelector('.keyboard').innerHTML = out;
}
init();
document.onkeydown = function (event) {
  // console.log(event.key);
  document.querySelector(".buttom[data=\"".concat(event.key, "\"]")).classList.add('active');
};
document.onkeyup = function (event) {
  document.querySelector(".buttom[data=\"".concat(event.key, "\"]")).classList.remove('active');
};
// EXTERNAL MODULE: ./src/assets/js/mouseInput.js
var mouseInput = __webpack_require__(614);
;// CONCATENATED MODULE: ./src/index.js





})();

/******/ })()
;