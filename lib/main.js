"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

require("babel-polyfill");

//增加这一句后，node命令行下就不能用了。
//增加babel的api转码支持
// var [a,b,c] = [1,2,3];
// console.log(b);
//
// function fn(){
//   let a = 3,
//   b = 4,
//   c = 5;
//
// }
//变量结构赋值的用途
//交换值

var a = 2,
    b = 6;
var _ref = [b, a];
a = _ref[0];
b = _ref[1];

console.log(a); //a = 6
console.log(b); //b = 2

//取多个返回值
function example() {
  return [1, 2, 3];
}

var _example = example();

var _example2 = _slicedToArray(_example, 3);

var x = _example2[0];
var y = _example2[1];
var z = _example2[2];

console.log(x, y, z);

function example1() {
  return {
    foo: "I'm foo",
    bar: "I'm bar"
  };
}

var _example3 = example1();

var foo = _example3.foo;
var bar = _example3.bar;

console.log(foo, bar);

//给一组参数
function example2(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 3);

  var x = _ref3[0];
  var y = _ref3[1];
  var z = _ref3[2];

  return console.log("x = %d, y = %d, z =%d", x, y, z);
}
example2([1, 2, 3]); //有顺序

function example3(_ref4) {
  var x = _ref4.x;
  var y = _ref4.y;
  var z = _ref4.z;

  return console.log("x = %d, y = %d, z =%d", x, y, z);
}
example3({ z: 3, y: 2, x: 1 }); //无顺序

//从json快速取数据
var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

var id = jsonData.id;
var status = jsonData.status;
var number = jsonData.data;

console.log(id, status, number);

//设置函数参数默认值
function example4(_ref5) {
  var _ref5$x = _ref5.x;
  var x = _ref5$x === undefined ? 1 : _ref5$x;
  var _ref5$y = _ref5.y;
  var y = _ref5$y === undefined ? 2 : _ref5$y;
  var _ref5$z = _ref5.z;
  var z = _ref5$z === undefined ? 3 : _ref5$z;

  console.log(x, y, z);
}
example4({}); //取默认值
example4({ x: 4, y: 5 }); //取部分值

//下面这种通过对参数这个对象结构，取值，可以不传对象进去
function example5() {
  var _ref6 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref6$x = _ref6.x;
  var x = _ref6$x === undefined ? 1 : _ref6$x;
  var _ref6$y = _ref6.y;
  var y = _ref6$y === undefined ? 2 : _ref6$y;
  var _ref6$z = _ref6.z;
  var z = _ref6$z === undefined ? 3 : _ref6$z;

  console.log(x, y, z);
}
example5();
example5({});
example5({ x: 7, y: 8 });

//map用法和模块暂时略过......
var e = 1;
var f = 2;
var other = [3, 4, 5];

console.log(e, f, other);