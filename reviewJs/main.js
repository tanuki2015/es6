// 前天投了一个公司，今天居然叫我去面试，复习下js吧

// DOM: document object model
// BOM: browser object model

// var message = 'hi';
//
// function showMessage(ms) {
//   alert(ms);
// }
//
// showMessage(message);

// 数据类型： Undefined Null String Number Boolean, Object

// var a = 123;
// console.log(typeof a); // 返回字符串‘number’

// var message;
// console.log(typeof message) // 'undefined'
// // var noneMessage; // 没有声明，直接报错。// 现代的chrome不报错了，直接undefined
// console.log(typeof noneMessage);

// 三元运算符
// var a = 30, b = 20;
// var max = (a > b)? a: b;
// console.log(max);

// array method
// var stringArray = ['abc', 'efg', 'xyz'];
// console.log(stringArray.push('123'));
// console.log(stringArray.pop());
//
// stringArray.forEach(function(item, index, array){
//   console.log(item);
// });

// for of 做字符串循环
// let str = 'abcdefg';
// for(let char of str) {
//   console.log(`the char is ${char}!`);
// }

// es5中的闭包
// function closure() {
//   let a = 0;
//   return function() {
//     return console.log(a++);
//   }
// }
// const fn = closure();
// fn();

// es6中的闭包
let fn1 = null;

{
  let a = 0;
  fn1 = function() {
    return console.log(a++);
  };
}

fn1();
