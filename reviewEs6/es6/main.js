// 交换变量值
let [a, b] = [1, 2];
[a, b] = [b, a];
console.log(a, b);

// 预定义函数的参数
function withArgs(c = 10, d = 20) {
  return c + d;
}
console.log(withArgs(5, 6));

// 快速取函数返回值
function returnArgs() {
  return [1, 2, 3];
}
const [e, f, g] = returnArgs();
console.log(e, f, g);

// 取json数据
const jsonData = {
  id: 42,
  status: 'ok',
  data: [867, 5309],
};

const { id, status, data: number } = jsonData;
console.log(id, status, number);

// 预定义对象参数
function objectArgs(name = 'fff', sayHi = () => console.log('hi')) {
  console.log(name, sayHi());
}
objectArgs();

// spread用法,1调用时展开数组
const arr1 = [23, 45, 66, 78, 1, 9];
console.log(Math.min(...arr1));

// 2定义函数时, 用数组接受所有内容
function spr(...num) {
  num.forEach((item) => console.log(item));
}
spr(arr1);

// 函数的简写
const obj2 = {
  name: 'obj2',
  sayHi() {
    console.log('hi, I am a Concise method!');
  },
};
console.log(obj2.name, obj2.sayHi());

// 对象的属性名可以被计算出来
const propName = 'name';
const obj3 = {
  [propName]: 'nicolas',
  sayHi() { return 'hi'; },
};
console.log(obj3.name);
for (let prop in obj3) {
  if (obj3.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// Object.is()查看对象是否相等
console.log(Object.is(6, 6));
console.log(Object.is(NaN, NaN));
