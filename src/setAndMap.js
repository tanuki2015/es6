//set, 无重复值的array
//应用，数组去重
let arr = [1,2,3,1,2,3,4,5,6,24,12,9];
let set = new Set(arr);

// let result = [];
// for (let item of set){
//   result.push(item);
// }

let result = Array.from(set);
console.log(result);

//集合的操作
//并集
let setA = new Set([1,2,3,4,5,6,7]);
let setB = new Set([1,2,5,9,0,12]);
let setAB = new Set([...setA, ...setB]);
console.log(setAB);

// 交集
let resultAB = [...setA].filter(item => setB.has(item));
console.log (resultAB);

//差集
let resultABB = [...setA].filter(item => !setB.has(item));
console.log (resultABB);

//map，对象的扩展，使key的类型可以是任何值，数组，对象，都行，不再限制于字符串
// let oDiv = document.querySelector('#demo');//可以用dom对象
let obj = {};
let m = new Map();
m.set(obj, "x");
//obj被当做 m 的键使用
console.log(m.get(obj));

//用数组更方便
let ma = new Map([["name", "ff"],["age", 88]]);
console.log(ma.get("name"));
console.log(ma.get("age"));

//实例属性和操作方法， set 和 map 都有的
/*
* size(); //return number
* set(key, value); //return this
* get(key);
* has(key); //return true or false
* delete(key); //return true or false
* clear(); // clear all

遍历方法：
keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器。
forEach()：遍历Map的所有成员。
*
*/
let map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}

//WeakMap, 可以自动回收，没有内存泄漏问题，没有遍历等属性
//下面是WeakMap结构的一个例子，可以看到用法上与Map几乎一样。
/*
var wm = new WeakMap();
var element = document.querySelector(".element");

wm.set(element, "Original");
wm.get(element) // "Original"

element.parentNode.removeChild(element);
element = null;
wm.get(element) // undefined
*/

//dom的实际应用看index.html
