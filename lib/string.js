"use strict";

//模板字符串
var pattern = "这是一个\n  字符串\n  隔行的！\n";
console.log(pattern);

//解构用法，写到这里
function add() {
  var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  return x + y;
}
console.log(add());