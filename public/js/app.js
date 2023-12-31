/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/authPopup.js":
/*!***********************************!*\
  !*** ./resources/js/authPopup.js ***!
  \***********************************/
/***/ (() => {

(function () {
  document.addEventListener('click', function (e) {
    switch (e.target) {
      case document.querySelector('.header__account--btn'):
        var loginModal = modal('Login', loginForm());
        document.body.appendChild(loginModal);
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
            modalContent.insertBefore(registrationForm(), modalContent.firstChild);
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
            _modalContent.insertBefore(loginForm(), _modalContent.firstChild);
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
    var modalAuthLabel = document.createElement('p');
    modalAuthLabel.className = 'backdrop__socials-label';
    modalAuthLabel.textContent = 'Login as a user';
    var modalAuthSocials = document.createElement('div');
    modalAuthSocials.className = 'backdrop__auth-socials';
    var modalAuthSocialsButtons = document.createElement('div');
    modalAuthSocialsButtons.className = 'backdrop__socials-buttons';
    modalAuthSocialsButtons.append(createButton('Facebook', 'button', 'button button--large button--gray backdrop__socials-button'), createButton('Google', 'button', 'button button--large button--gray backdrop__socials-button'));
    modalAuthSocials.append(modalAuthLabel, modalAuthSocialsButtons);
    modalHeader.append(header3, buttonClose);
    modalContent.append(form, modalAuthSocials);
    modal.append(modalHeader, modalContent);
    backdrop.appendChild(modal);
    return backdrop;
  }
  function loginForm() {
    var formInputs = ['email', 'password'];
    var form = document.createElement('form');
    form.className = 'backdrop__login-form';
    var fieldset = document.createElement('fieldset');
    for (var i = 0; i < formInputs.length; i++) {
      fieldset.appendChild(createFormInput(formInputs[i], formInputs[i], 'login'));
    }
    var formBottom = document.createElement('div');
    formBottom.className = 'backdrop__form-bottom';
    var submitButton = document.createElement('button');
    submitButton.className = 'button button--large button--green backdrop__submit';
    submitButton.textContent = 'Sign in';
    var registerButton = document.createElement('button');
    registerButton.className = 'button button--link backdrop__register';
    registerButton.textContent = 'Sign up';
    var authDivider = document.createElement('p');
    authDivider.className = 'backdrop__auth-divider';
    authDivider.textContent = 'or';
    formBottom.append(submitButton, registerButton);
    fieldset.appendChild(formBottom);
    form.appendChild(fieldset);
    return form;
  }
  function registrationForm() {
    var formInputs = ['name', 'surname', 'phone', 'email', 'password'];
    var form = document.createElement('form');
    form.className = 'backdrop__registration-form';
    var fieldset = document.createElement('fieldset');
    var formBottom = document.createElement('div');
    formBottom.className = 'backdrop__form-bottom';
    var submit = document.createElement('button');
    submit.className = 'button button--large button--green backdrop__submit';
    submit.type = 'submit';
    submit.textContent = 'Submit';
    var logButton = document.createElement('button');
    logButton.className = 'button button--link backdrop__register-link';
    logButton.type = 'button';
    logButton.textContent = 'I am already registered';
    for (var i = 0; i < formInputs.length; i++) {
      switch (formInputs[i]) {
        case 'phone':
          var inputPhoneNumber = createFormInput(formInputs[i], 'tel');
          inputPhoneNumber.querySelector('.backdrop__label').textContent = 'Phone number';
          fieldset.appendChild(inputPhoneNumber);
          break;
        case 'email':
          fieldset.appendChild(createFormInput(formInputs[i], 'email'));
          break;
        case 'password':
          fieldset.appendChild(createFormInput(formInputs[i], 'password'));
          break;
        default:
          fieldset.appendChild(createFormInput(formInputs[i], 'text'));
      }
    }
    formBottom.innerHTML += submit.outerHTML + logButton.outerHTML;
    fieldset.appendChild(formBottom);
    form.appendChild(fieldset);
    return form;
  }
  function createFormInput(name) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'register';
    name = name.trim();
    prefix = prefix.trim().toLowerCase();
    var inputName = name.trim().charAt(0).toUpperCase() + name.slice(1);
    var formRow = document.createElement('div');
    formRow.className = 'backdrop__form-row';
    var input = document.createElement('input');
    input.id = "".concat(prefix).concat(inputName);
    input.type = type;
    input.name = name.charAt(0).toLowerCase() + name.slice(1);
    var label = document.createElement('label');
    label.className = 'backdrop__label';
    label.setAttribute('for', "".concat(prefix).concat(inputName));
    label.textContent = inputName;
    var validationBlock = document.createElement('div');
    validationBlock.className = 'validation-message';
    formRow.innerHTML += label.outerHTML + input.outerHTML + validationBlock.outerHTML;
    return formRow;
  }
  function createButton(text, type, className) {
    var button = document.createElement('button');
    button.textContent = text;
    button.type = type;
    button.className = className;
    return button;
  }
})();

/***/ }),

/***/ "./resources/js/userRegister.js":
/*!**************************************!*\
  !*** ./resources/js/userRegister.js ***!
  \**************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
(function () {
  var validationClassName = 'validation_type_error';
  document.addEventListener('input', function (event) {
    if (event.target.form.className === 'backdrop__registration-form') {
      test(event.target);
    }
  });
  document.addEventListener('submit', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var formInputs, regData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(event.target === document.querySelector('.backdrop__registration-form'))) {
              _context.next = 7;
              break;
            }
            event.preventDefault();
            formInputs = Array.from(document.querySelectorAll('.backdrop__registration-form input'));
            if (!test(formInputs)) {
              _context.next = 7;
              break;
            }
            regData = new FormData(document.querySelector('.backdrop__registration-form'));
            _context.next = 7;
            return fetch(route('auth.reg'), {
              method: 'POST',
              body: regData
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              if (data.details) {
                var errorsArray = Object.values(data.details);
                var form = document.querySelector('.backdrop__registration-form fieldset');
                var errorsContainer = form.querySelector('.alert.alert-danger');
                if (errorsContainer) {
                  errorsContainer.remove();
                }
                var errorsDivElement = document.createElement('div');
                errorsDivElement.className = 'alert alert-danger';
                var errorsListElement = document.createElement('ul');
                errorsArray.forEach(function (error) {
                  return error.forEach(function (value) {
                    var error = document.createElement('li');
                    error.textContent = value;
                    errorsListElement.append(error);
                  });
                });
                errorsDivElement.append(errorsListElement);
                form.prepend(errorsDivElement);
                console.log(data);
              } else {
                console.log(data);
              }
            })["catch"](function (reject) {
              return console.log(reject);
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  function test(input) {
    var isValid = true;
    if (Array.isArray(input)) {
      input.forEach(function (value) {
        var validationResult = inputValidation(value);
        if (!validationResult) {
          isValid = false;
        }
      });
    } else {
      isValid = inputValidation(input);
    }
    return isValid;
  }
  function inputValidation(input) {
    switch (input.name) {
      case 'name':
      case 'surname':
        return validation(input, /^[a-zA-Z]{2,}$/, 'Enter your name in latin');
      case 'phone':
        return validation(input, /^\+38\d{10}$/, 'Enter a phone number');
      case 'email':
        return validation(input, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Enter your email');
      case 'password':
        return validation(input, /^.{5,50}$/, 'Password must be at least 5 symbols');
    }
  }
  function validation(input, pattern, message) {
    var formRow = input.parentElement;
    var errorText = document.createElement('p');
    if (pattern.test(input.value)) {
      if (formRow.classList.contains(validationClassName) && formRow.querySelector('.validation-message p')) {
        formRow.classList.remove(validationClassName);
        formRow.querySelector('.validation-message p').remove();
      }
      return true;
    } else {
      if (!formRow.classList.contains(validationClassName) && !formRow.querySelector('.validation-message p')) {
        formRow.classList.add(validationClassName);
        errorText.textContent = message;
        formRow.querySelector('.validation-message').appendChild(errorText);
      }
      return false;
    }
  }
})();

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
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/js/userRegister.js")))
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/js/authPopup.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;