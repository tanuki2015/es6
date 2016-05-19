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
