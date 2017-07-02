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
/*!**************************************************!*\
  !*** ./client/lib/community/grabUserProfile.jsx ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar baseUrl = '/api/user_profile';\n\nvar loadUserProfile = exports.loadUserProfile = function loadUserProfile(user_id) {\n\treturn fetch(baseUrl, {\n\t\tmethod: \"POST\",\n\t\theaders: {\n\t\t\t'Accept': 'application/json',\n\t\t\t'Content-Type': 'application/json',\n\t\t\t'Cache': 'no-cache'\n\t\t},\n\t\tcredentials: 'include',\n\t\tbody: JSON.stringify(user_id)\n\t}).then(function (res) {\n\t\treturn res.json();\n\t});\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvbGliL2NvbW11bml0eS9ncmFiVXNlclByb2ZpbGUuanN4P2FmYTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZVVybCA9ICcvYXBpL3VzZXJfcHJvZmlsZSc7XG5cbmV4cG9ydCBjb25zdCBsb2FkVXNlclByb2ZpbGUgPSAodXNlcl9pZCkgPT4ge1xuXHRyZXR1cm4gZmV0Y2goYmFzZVVybCwge1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0J0NhY2hlJzogJ25vLWNhY2hlJ1xuXHRcdFx0fSxcblx0XHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyX2lkKVxuXHRcdH0pXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2xpYi9jb21tdW5pdHkvZ3JhYlVzZXJQcm9maWxlLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);