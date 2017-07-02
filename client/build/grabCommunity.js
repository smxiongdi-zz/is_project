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
/*!************************************************!*\
  !*** ./client/lib/community/grabCommunity.jsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar baseUrl = '/api/community_load';\n\nvar loadCommunityMembers = exports.loadCommunityMembers = function loadCommunityMembers() {\n\treturn fetch(baseUrl, {\n\t\tmethod: \"GET\",\n\t\theaders: {\n\t\t\t'Accept': 'application/json',\n\t\t\t'Content-Type': 'application/json',\n\t\t\t'Cache': 'no-cache'\n\t\t},\n\t\tcredentials: 'include'\n\t}).then(function (res) {\n\t\treturn res.json();\n\t});\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvbGliL2NvbW11bml0eS9ncmFiQ29tbXVuaXR5LmpzeD8wYzU1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPSAnL2FwaS9jb21tdW5pdHlfbG9hZCc7XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29tbXVuaXR5TWVtYmVycyA9ICgpID0+IHtcblx0cmV0dXJuIGZldGNoKGJhc2VVcmwsIHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0J0NhY2hlJzogJ25vLWNhY2hlJ1xuXHRcdFx0fSxcblx0XHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcblx0XHR9KVxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9saWIvY29tbXVuaXR5L2dyYWJDb21tdW5pdHkuanN4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQVNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);