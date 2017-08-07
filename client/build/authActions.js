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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************************!*\
  !*** ./client/redux/actions/authActions.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.setProf = setProf;\nexports.setAuth = setAuth;\nexports.setError = setError;\nexports.sendingRequest = sendingRequest;\nexports.logout = logout;\n// action constants\n\nvar SET_PROF = 'SET_PROF';\nvar SET_AUTH = 'SET_AUTH';\nvar SET_ERROR = 'SET_ERROR';\nvar SENDING_REQUEST = 'SENDING_REQUEST';\nvar LOGOUT = 'LOGOUT';\n\nfunction setProf(profile) {\n\treturn { type: SET_PROF, profile: profile };\n}\n\nfunction setAuth(username) {\n\treturn { type: SET_AUTH, username: username };\n}\n\nfunction setError(error) {\n\treturn { type: SET_ERROR, error: error };\n}\n\nfunction sendingRequest(requestStatus) {\n\treturn { type: SENDING_REQUEST, requestStatus: requestStatus };\n}\n\nfunction logout() {\n\tvar username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\tvar profile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n\treturn { type: LOGOUT, username: username, profile: profile };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcz83Y2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFjdGlvbiBjb25zdGFudHNcblxuY29uc3QgU0VUX1BST0YgPSAnU0VUX1BST0YnXG5jb25zdCBTRVRfQVVUSCA9ICdTRVRfQVVUSCdcbmNvbnN0IFNFVF9FUlJPUiA9ICdTRVRfRVJST1InXG5jb25zdCBTRU5ESU5HX1JFUVVFU1QgPSAnU0VORElOR19SRVFVRVNUJ1xuY29uc3QgTE9HT1VUID0gJ0xPR09VVCdcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2YocHJvZmlsZSkge1xuXHRyZXR1cm4geyB0eXBlOiBTRVRfUFJPRiwgcHJvZmlsZX1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF1dGgodXNlcm5hbWUpIHtcblx0cmV0dXJuIHsgdHlwZTogU0VUX0FVVEgsIHVzZXJuYW1lIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEVycm9yKGVycm9yKSB7XG5cdHJldHVybiB7IHR5cGU6IFNFVF9FUlJPUiwgZXJyb3IgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZGluZ1JlcXVlc3QocmVxdWVzdFN0YXR1cykge1xuXHRyZXR1cm4geyB0eXBlOiBTRU5ESU5HX1JFUVVFU1QsIHJlcXVlc3RTdGF0dXMgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KHVzZXJuYW1lID0gJycsIHByb2ZpbGUgPSAnJykge1xuXHRyZXR1cm4geyB0eXBlOiBMT0dPVVQsIHVzZXJuYW1lLCBwcm9maWxlIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQVFBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUF4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);