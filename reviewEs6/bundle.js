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
/*!*********************!*\
  !*** ./es6/main.js ***!
  \*********************/
/***/ function(module, exports) {

	'use strict';
	
	var _obj;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// 交换变量值
	var a = 1;
	var b = 2;
	var _ref = [b, a];
	a = _ref[0];
	b = _ref[1];
	
	console.log(a, b);
	
	// 预定义函数的参数
	function withArgs() {
	  var c = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
	  var d = arguments.length <= 1 || arguments[1] === undefined ? 20 : arguments[1];
	
	  return c + d;
	}
	console.log(withArgs(5, 6));
	
	// 快速取函数返回值
	function returnArgs() {
	  return [1, 2, 3];
	}
	
	var _returnArgs = returnArgs();
	
	var _returnArgs2 = _slicedToArray(_returnArgs, 3);
	
	var e = _returnArgs2[0];
	var f = _returnArgs2[1];
	var g = _returnArgs2[2];
	
	console.log(e, f, g);
	
	// 取json数据
	var jsonData = {
	  id: 42,
	  status: 'ok',
	  data: [867, 5309]
	};
	
	var id = jsonData.id;
	var status = jsonData.status;
	var number = jsonData.data;
	
	console.log(id, status, number);
	
	// 预定义对象参数
	function objectArgs() {
	  var name = arguments.length <= 0 || arguments[0] === undefined ? 'fff' : arguments[0];
	  var sayHi = arguments.length <= 1 || arguments[1] === undefined ? function () {
	    return console.log('hi');
	  } : arguments[1];
	
	  console.log(name, sayHi());
	}
	objectArgs();
	
	// spread用法,1调用时展开数组
	var arr1 = [23, 45, 66, 78, 1, 9];
	console.log(Math.min.apply(Math, arr1));
	
	// 2定义函数时, 用数组接受所有内容
	function spr() {
	  for (var _len = arguments.length, num = Array(_len), _key = 0; _key < _len; _key++) {
	    num[_key] = arguments[_key];
	  }
	
	  num.forEach(function (item) {
	    return console.log(item);
	  });
	}
	spr(arr1);
	
	// 函数的简写
	var obj2 = {
	  name: 'obj2',
	  sayHi: function sayHi() {
	    console.log('hi, I am a Concise method!');
	  }
	};
	console.log(obj2.name, obj2.sayHi());
	
	// 对象的属性名可以被计算出来
	var propName = 'name';
	var obj3 = (_obj = {}, _defineProperty(_obj, propName, 'nicolas'), _defineProperty(_obj, 'sayHi', function sayHi() {
	  return 'hi';
	}), _obj);
	console.log(obj3.name);
	for (var prop in obj3) {
	  if (obj3.hasOwnProperty(prop)) {
	    console.log(prop);
	  }
	}
	
	// Object.is()查看对象是否相等
	console.log(Object.is(6, 6));
	console.log(Object.is(NaN, NaN));

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map