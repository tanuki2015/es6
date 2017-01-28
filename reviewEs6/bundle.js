/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	// let [a, b] = [1, 9];
	// [a, b] = [b, a];
	// console.log(a, b);
	
	// function withArgs(a = 1, b = 2) {
	//   return a + b;
	// }
	//
	// console.log(withArgs());
	// console.log(withArgs(4, 5));
	
	// function returnValues() {
	//   return [1, 2, 3];
	// }
	//
	// const [a, b, c] = returnValues();
	//
	// console.log(a, b, c);
	
	// 取json数据
	// const jsonData = {
	//   id: 11,
	//   status: 'no',
	//   data: [2222, 333],
	// };
	//
	// const { id, status, data: number } = jsonData;
	// console.log(id, status, number);
	
	// const arr1 = [2, 4, 1, 6, 99, 54];
	// console.log(Math.max(...arr1));
	//
	// function show(...args) {
	//   args.forEach((item) => console.log(item));
	// }
	// show(...arr1);
	
	// const obj1 = {
	//   name: 'xf',
	//   age: 18,
	// };
	// const obj2 = {
	//   name: 'ff',
	//   age: 80,
	//   sayHi() {
	//     console.log(`hi ${this.name}`);
	//   },
	// };
	// obj2.sayHi();
	// console.log(obj1 === obj2);
	//
	// const obj3 = obj1;
	// console.log(Object.is(obj1, obj3));
	
	// const arr1 = [1, 2, 3, 4, 4, 3, 2, 1];
	// const aSet = new Set(arr1);
	// const arr2 = Array.from(aSet);
	// console.log(arr2);
	
	// console.log([...new Set(arr1)]);
	
	// 解析查询字符串
	var queryStr = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=monline_4_dg&wd=es6';
	//
	// function queryString(str) {
	//   const reg = /([^?&=]+)=([^?&=]+)/g;
	//   const qsObj = {};
	//   str.replace(reg, (...rest) => {
	//     qsObj[rest[1]] = rest[2];
	//   });
	//   return qsObj;
	// }
	//
	// console.log(queryString(queryStr));
	
	function queryString(str) {
	  var reg = /([^?&=]+)=([^?&=]+)/g;
	  var qsObj = {};
	  str.replace(reg, function () {
	    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	      rest[_key] = arguments[_key];
	    }
	
	    qsObj[rest[1]] = rest[2];
	  });
	  return qsObj;
	}
	console.log(queryString(queryStr));

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map