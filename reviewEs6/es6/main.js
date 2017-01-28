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
// const queryStr = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=monline_4_dg&wd=es6';
//
// function queryString(str) {
//   const reg = /([^?&=]+)=([^?&=]+)/g;
//   const qsObj = {};
//   str.replace(reg, (...rest) => {
//     qsObj[rest[1]] = rest[2];
//   });
//   return qsObj;
// }
// console.log(queryString(queryStr));

function queryStr(str) {
  const reg = /([^&=?]+)=([^&=?]+)/g;
  const queryObj = {};
  str.replace(reg, (...rest) => {
    queryObj[rest[1]] = rest[2];
  })
  return queryObj;
}


// 求出现次数最多的字符和次数
let str = 'abcabcabc def def lmnlnmlnm';

// function maximum(str) {
//   // 统计出现的字符和次数，放到chars对象中
//   const chars = {};
//   const reg = /[^\s\n\b]/g;
//
//   str.replace(reg, (char) => {
//     if (chars[char] >= 1) {
//       chars[char] += 1;
//     } else {
//       chars[char] = 1;
//     }
//   });
//
//   // 取出次数最多的字符和次数放到maxChar对象中
//   const maxChar = {};
//   let maxCount = 0;
//   let keyName;
//
//   for (let key in chars){
//     if (chars[key] > maxCount) {
//       maxCount = chars[key];
//       keyName = key;
//     }
//   }
//   maxChar[keyName] = maxCount;
//
//   return maxChar;
// }
//
// console.log(maximum(str));
// 这个函数会有一个问题，如果次数最多的字符有多个，则只有最先出现的那个字符被输出。

// 下面改进一下，算出出现次数最多的那个数字，然后把所有这个数字的内容都放到对象中一起返回
// let str = 'abcabcabc def def lmnlnmlnm';
//
// function maximum(str) {
//   // 统计出现的字符和次数，放到chars对象中
//   const chars = {};
//   const reg = /[^\s\n\b]/g;
//
//   str.replace(reg, (char) => {
//     if (chars[char] >= 1) {
//       chars[char] += 1;
//     } else {
//       chars[char] = 1;
//     }
//   });
//
//   // 取出次数最多的字符和次数放到maxChar对象中
//   const maxChar = {};
//   let maxCount = 0;
//
//   for (let key in chars) {
//     if (chars[key] > maxCount) {
//       maxCount = chars[key];
//     }
//   }
//
//   for (let key in chars){
//     if (chars[key] >= maxCount) {
//       maxChar[key] = chars[key];
//     }
//   }
//
//   return maxChar;
// }
//
// console.log(maximum(str));

function queryString(str) {
  str = str || location.href;   // 用location.search也行
  const result = {};
  const reg = /([^?&=]+)=([^?&=]+)/g;

  str.replace(reg, (__, key, value) => {
    result[key] = value;
  });

  return result;
}
