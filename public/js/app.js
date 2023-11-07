/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/loginPopup.js":
/*!************************************!*\
  !*** ./resources/js/loginPopup.js ***!
  \************************************/
/***/ (() => {

document.addEventListener('click', function (e) {
  switch (e.target) {
    case document.querySelector('.header__account--btn'):
      var backdrop = modal('Login', loginForm());
      document.body.appendChild(backdrop);
      break;
    case document.querySelector('.backdrop__close'):
      document.querySelector('.backdrop').remove();
      break;
    case document.querySelector('.backdrop'):
      document.querySelector('.backdrop').remove();
      break;
    case document.querySelector('.backdrop__register'):
      var registerTitle = document.querySelector('.backdrop__heading');
      registerTitle.textContent = 'Registration';
      var form = document.querySelector('.backdrop__login-form');
      if (form) {
        form.remove();
        var modalContent = document.querySelector('.backdrop__modal-content');
        if (modalContent) {
          modalContent.appendChild(registrationForm());
        }
      }
      break;
    case document.querySelector('.backdrop__register-link'):
      var loginTitle = document.querySelector('.backdrop__heading');
      loginTitle.textContent = 'Login';
      var registerForm = document.querySelector('.backdrop__registration-form');
      if (registerForm) {
        registerForm.remove();
        var _modalContent = document.querySelector('.backdrop__modal-content');
        if (_modalContent) {
          _modalContent.appendChild(loginForm());
        }
      }
      break;
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    var backdrop = document.querySelector('.backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
});
function modal(title, form) {
  var backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  var modal = document.createElement('div');
  modal.className = 'backdrop__modal';
  var modalHeader = document.createElement('div');
  modalHeader.className = 'backdrop__modal-header';
  var header3 = document.createElement('h3');
  header3.className = 'backdrop__heading';
  header3.textContent = title;
  var buttonClose = document.createElement('button');
  buttonClose.className = 'backdrop__close';
  buttonClose.type = 'button';
  buttonClose.textContent = 'Close';
  var modalContent = document.createElement('div');
  modalContent.className = 'backdrop__modal-content';
  modalHeader.appendChild(header3);
  modalHeader.appendChild(buttonClose);
  modalContent.appendChild(form);
  modal.appendChild(modalHeader);
  modal.appendChild(modalContent);
  backdrop.appendChild(modal);
  return backdrop;
}
function loginForm() {
  var form = document.createElement('form');
  form.className = 'backdrop__login-form';
  var fieldset = document.createElement('fieldset');
  var labelAuthEmail = document.createElement('label');
  labelAuthEmail.className = 'backdrop__label';
  labelAuthEmail.setAttribute('for', 'auth_email');
  labelAuthEmail.textContent = 'Email';
  var inputAuthEmail = document.createElement('input');
  inputAuthEmail.className = 'backdrop__input-email';
  inputAuthEmail.type = 'email';
  inputAuthEmail.id = 'auth_email';
  var labelAuthPassword = document.createElement('label');
  labelAuthPassword.className = 'backdrop__label';
  labelAuthPassword.setAttribute('for', 'auth_password');
  labelAuthPassword.textContent = 'Password';
  var inputAuthPassword = document.createElement('input');
  inputAuthPassword.className = 'backdrop__input-password';
  inputAuthPassword.type = 'password';
  inputAuthPassword.id = 'auth_password';
  var formBottom = document.createElement('div');
  formBottom.className = 'backdrop__form-bottom';
  var submitButton = document.createElement('button');
  submitButton.className = 'backdrop__submit';
  submitButton.textContent = 'Sign in';
  var registerButton = document.createElement('button');
  registerButton.className = 'backdrop__register';
  registerButton.textContent = 'Sign up';
  formBottom.appendChild(submitButton);
  formBottom.appendChild(registerButton);
  fieldset.appendChild(labelAuthEmail);
  fieldset.appendChild(inputAuthEmail);
  fieldset.appendChild(labelAuthPassword);
  fieldset.appendChild(inputAuthPassword);
  fieldset.appendChild(formBottom);
  form.appendChild(fieldset);
  return form;
}
function registrationForm() {
  var form = document.createElement('form');
  form.className = 'backdrop__registration-form';
  var fieldset = document.createElement('fieldset');
  var nameFormRow = document.createElement('div');
  nameFormRow.className = 'backdrop__form-row';
  var labelName = document.createElement('label');
  labelName.className = 'backdrop__label';
  labelName.setAttribute('for', 'registerUserName');
  labelName.textContent = 'Name';
  var name = document.createElement('input');
  name.className = 'backdrop__user-name';
  name.id = 'registerUserName';
  name.type = 'text';
  var surnameFormRow = document.createElement('div');
  surnameFormRow.className = 'backdrop__form-row';
  var labelSurname = document.createElement('label');
  labelSurname.className = 'backdrop__label';
  labelSurname.setAttribute('for', 'registerUserSurname');
  labelSurname.textContent = 'Surname';
  var surname = document.createElement('input');
  surname.className = 'backdrop__user-surname';
  surname.id = 'registerUserSurname';
  surname.type = 'text';
  var phoneFormRow = document.createElement('div');
  phoneFormRow.className = 'backdrop__form-row';
  var labelPhoneNumber = document.createElement('label');
  labelPhoneNumber.className = 'backdrop__label';
  labelPhoneNumber.setAttribute('for', 'registerUserPhone');
  labelPhoneNumber.textContent = 'Phone number';
  var phoneNumber = document.createElement('input');
  phoneNumber.className = 'backdrop__user-phone';
  phoneNumber.id = 'registerUserPhone';
  phoneNumber.type = 'tel';
  var emailFormRow = document.createElement('div');
  emailFormRow.className = 'backdrop__form-row';
  var labelEmail = document.createElement('label');
  labelEmail.className = 'backdrop__label';
  labelEmail.setAttribute('for', 'registerUserEmail');
  labelEmail.textContent = 'Email';
  var email = document.createElement('input');
  email.className = 'backdrop__user-email';
  email.id = 'registerUserEmail';
  email.type = 'email';
  var passwordFormRow = document.createElement('div');
  passwordFormRow.className = 'backdrop__form-row';
  var labelPassword = document.createElement('label');
  labelPassword.className = 'backdrop__label';
  labelPassword.setAttribute('for', 'registerUserPassword');
  labelPassword.textContent = 'Password';
  var password = document.createElement('input');
  password.className = 'backdrop__user-password';
  password.id = 'registerUserPassword';
  password.type = 'password';
  var formBottom = document.createElement('div');
  formBottom.className = 'backdrop__form-bottom';
  var submit = document.createElement('button');
  submit.className = 'backdrop__submit';
  submit.type = 'submit';
  submit.textContent = 'Submit';
  var logButton = document.createElement('button');
  logButton.className = 'backdrop__register-link';
  logButton.type = 'button';
  logButton.textContent = 'I am already registered';
  nameFormRow.appendChild(labelName);
  nameFormRow.appendChild(name);
  surnameFormRow.appendChild(labelSurname);
  surnameFormRow.appendChild(surname);
  phoneFormRow.appendChild(labelPhoneNumber);
  phoneFormRow.appendChild(phoneNumber);
  emailFormRow.appendChild(labelEmail);
  emailFormRow.appendChild(email);
  passwordFormRow.appendChild(labelPassword);
  passwordFormRow.appendChild(password);
  formBottom.appendChild(submit);
  formBottom.appendChild(logButton);
  fieldset.appendChild(nameFormRow);
  fieldset.appendChild(surnameFormRow);
  fieldset.appendChild(phoneFormRow);
  fieldset.appendChild(emailFormRow);
  fieldset.appendChild(passwordFormRow);
  fieldset.appendChild(formBottom);
  form.appendChild(fieldset);
  return form;
}

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksome_store"] = self["webpackChunksome_store"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/js/loginPopup.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;