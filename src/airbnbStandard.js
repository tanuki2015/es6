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
console.log(atom.showThis());
console.log("---------------");
console.log(atom.showArrowThis());
// console.log(atom.showThis.call(global));
//  method只是简写，this的判断跟es5一样
//  箭头函数的this固定，就是定义时的外层this，便于绑定回调

function arrow () {
  let id = 1;
  let showArrowThis = () => this;
  return showArrowThis();
};
let result = arrow();
console.log(result); // global arrow()运行时this确定为global，然后箭头函数得到这个this

result = arrow.call(atom);
console.log(result); // atom arrow（）运行时this确定为atom，所以箭头函数得到atom为this
