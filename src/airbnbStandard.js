//  dynamic key
function getKey(key) {
  return `a key named ${key}`;
}

const obj = {
  id: 123,
  name: 'abc',
  [getKey('enabled')]: true,
};
console.log(obj);

//  object method shorthand
const atom = {
  value: 1,
  addValue (value) {
    return this.value + value;
  },
  showThis () {
    return this;
  },
  showArrowThis: () => this, // 没有this
};

console.log(atom.addValue(2));
// console.log(atom.showThis());
console.log("---------------");
// console.log(atom.showArrowThis());
// console.log(atom.showThis.call(global));
//  method只是简写，this的判断跟es5一样
//  箭头函数的this固定，就是定义时的外层this，便于绑定回调

function arrow () {
  let id = 1;
  let showArrowThis = () => this;
  return showArrowThis();
};
let result = arrow();
// console.log(result); // global arrow()运行时this确定为global，然后箭头函数得到这个this

result = arrow.call(atom);
console.log(result); // atom arrow（）运行时this确定为atom，所以箭头函数得到atom为this

//  只有不合法的属性名才需要打引号
// var bad = {
//   foo: 3,
//   bar: 4,
//   data-blah: 4, //有横杆的属性名非法
// }
// console.log(bad);
var good = {
  foo: 3, // 正常属性名无需加引号
  bar: 4,
  'data-blah': 4,
}
console.log(good);

//  use array spreads ... to copy arrays.
const aSource = [1,2,4,5,6,6,7];
const aTarget = [...aSource];
aTarget.push(8,9);
console.log(aTarget);

//  use Array.from, array-like to array
// const foo = document.querySelectors('.foo');
// const nodes = Array.from(foo);

//  函数必须return，单行可以omit

// use object destructuring to get propertise of object
const objNames = {
  firstName: 'Count',
  lastName: 'Dracula',
}
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName(objNames));

// use array destructuring
const arr = [100,200,300];
const [first, second] = arr;
console.log(first, second);

//  函数返回多个字用object destructuring, 调用者无需考虑顺序
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}

// the caller selects only the data they need
// const { left, top } = processInput(input);

//  尽量使用函数声明，因为有名字，容易调试，用箭头函数取代函数表达式

//  自执行函数加括号，因为他们是一个整体
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());

//  取所有参数
function concatAll(...args) {
  return args.join('|');
}
console.log(concatAll('a', 'b', 'c', 'd'));

//  设置函数初始值
function handleSome(ops = {}) {
  return ops;
}
console.log(handleSome());
console.log(handleSome({a:1, b:2}));

//  不要操作传递进来的参数对象
function f1(obj) {
  // obj.keu = 1;  //  wrong
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}

//  use class avoid prototype
class Queue {
  constructor(contents = [1,2,3]) {
    this.queue = [...contents];
  }
  length() {
    return this.queue.length;
  }
}

const queue = new Queue([5,4,3,2,1]);
const queue2 = new Queue();
console.log(queue.length(), queue2);

//  return this to use method chaining
class QueueChain {
  constructor(contents = [1,2,3,4,5,6]) {
    this.queue = [...contents];
  }

  pop() {
    this.queue.pop();
    return this;
  }

  length() {
    this.length = this.queue.length;
    return this;
  }
}

const queueCh = new QueueChain();
console.log(queueCh.pop().length());

// export and import

// import { es6 } from './AirbnbStyleGuide';
// export default es6;
//
//
// //  导出默认的函数
// export default function fooo() {}

//  目前不要使用 Iterators and Generators，babel转换还不好
//  用map...替换Iterators
// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

//  variables
//  变量永远使用 const， 防止全局污染
const superPower = new SuperPower();

//  每个变量分开写，方便调试和增改
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';

//  Group all your consts and then group all your lets.
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;

//  Assign variables where you need them, but place them in a reasonable place.
// good
function checkName(hasName) {
  if (hasName === 'test') {
    return false;
  }

  const name = getName(); //  本行如果放在 188 前就不必要

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}

//  var被废弃，而 const 和 let 没有 hoisted, 所以 typeof 不再安全， 有 Temporal Dead Zones (TDZ)

//  判断真假
// good
if (name) {
  // ...stuff...
}

// good 不是 collection.length > 0
if (collection.length) {
  // ...stuff...
}

//  case的标准写法
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {}
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}

// 控制语句括号前放一个 space， 函数名和参数列表不需要
// good
if (isJedi) {
  fight();
}

// good
function fight() {
  console.log('Swooosh!');
}

// 圆括号中不要空格， 花括号要空格
const foo = [1, 2, 3];
console.log(foo[0]);

// good
const foo = { clark: 'kent' };

// 一行不要超过100字符
// good
$.ajax({
  method: 'POST',
  url: 'https://airbnb.com/',
  data: { name: 'John' },
})
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'));
