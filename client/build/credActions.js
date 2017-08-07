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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*********************************************!*\
  !*** ./client/redux/actions/credActions.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.requestCredentials = requestCredentials;\nexports.receiveCredentials = receiveCredentials;\nvar REQUEST_CREDENTIALS = exports.REQUEST_CREDENTIALS = 'REQUEST_CREDENTIALS';\nvar RECEIVE_CREDENTIALS = exports.RECEIVE_CREDENTIALS = 'RECEIVE_CREDENTIALS';\n\nfunction requestCredentials() {\n\tvar username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'placeholder';\n\tvar requestStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n\treturn {\n\t\ttype: REQUEST_CREDENTIALS, username: username, requestStatus: requestStatus\n\t};\n}\n\nfunction receiveCredentials(username) {\n\tvar requestStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n\treturn {\n\t\ttype: RECEIVE_CREDENTIALS,\n\t\tusername: username,\n\t\trequestStatus: requestStatus\n\t};\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvcmVkdXgvYWN0aW9ucy9jcmVkQWN0aW9ucy5qcz9hZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRVFVRVNUX0NSRURFTlRJQUxTID0gJ1JFUVVFU1RfQ1JFREVOVElBTFMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9DUkVERU5USUFMUyA9ICdSRUNFSVZFX0NSRURFTlRJQUxTJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdENyZWRlbnRpYWxzKHVzZXJuYW1lID0gJ3BsYWNlaG9sZGVyJywgcmVxdWVzdFN0YXR1cyA9IHRydWUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRVFVRVNUX0NSRURFTlRJQUxTLCB1c2VybmFtZSwgcmVxdWVzdFN0YXR1c1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlQ3JlZGVudGlhbHModXNlcm5hbWUsIHJlcXVlc3RTdGF0dXMgPSBmYWxzZSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFQ0VJVkVfQ1JFREVOVElBTFMsXG5cdFx0dXNlcm5hbWU6IHVzZXJuYW1lLFxuXHRcdHJlcXVlc3RTdGF0dXNcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9yZWR1eC9hY3Rpb25zL2NyZWRBY3Rpb25zLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0FBTUE7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);