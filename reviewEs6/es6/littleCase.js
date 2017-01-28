// 一个测试工具函数
function assert(condition, message) {
  if (!condition) {
    console.log(message);
  }
}

// 求出现次数最多的字符和次数
// let str = 'abcabcabc def def lmnlnmlnm';

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
//
// console.log(queryString(queryStr));

// 递归的应用
// 回文检测
let str = 'racecar';
function isPalindrome(text) {
  if (text.length <= 1) return true;
  if (text.charAt(0) !== text.charAt(text.length - 1)) return false;
  return isPalindrome(text.substr(1, text.length - 2));
}
console.log(isPalindrome(str));

// 递归发声
// function chirp(n) {
//   if (n > 1) {
//     return chirp(n-1) + '-chirp';
//   }
//
//   return 'chirp';
// }

// 改进一下
// function chirp(n) {
//   return n > 1 ? chirp(n-1) + '-chirp' : 'chirp';
// }

// 放到object里面
// const ninja = {
//   chirp(n) {
//     return n > 1 ? chirp(n-1) + '-chirp' : 'chirp';
//   },
// };

// 用this解决引用丢失的问题
const ninja = {
  chirp(n) {
    return n > 1 ? this.chirp(n-1) + '-chirp' : 'chirp';
  },
};

console.log(ninja.chirp(3));

// 存储一组函数
const store = {
  nextId: 1,
  catch: {},

  add(fn) {
    if (!fn.id) {
      fn.id = store.nextId++;
      store.catch[fn.id] = fn;
      return true;
    }
    return false;
  },

};

function chirp(n) {
  return n > 1 ? chirp(n-1) + '-chirp' : 'chirp';
}

console.log(store);
store.add(chirp);

// 自己写一遍找字符串
function mostChar(str) {
  // const reg = /[^\b\s\n]/g;
  // const result = {};
  //
  // str.replace(reg, char => {
  //   if (!result[char]) {
  //     result[char] = 1;
  //   } else {
  //     result[char]++;
  //   }
  // });

  // replace可以被代替如下：
  const strArr = str.split('');
  const result = {};

  strArr.forEach(char => {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  });

  let maxCount = 0;
  let maxChar = '';
  for (const char in result) {
    if (result[char] > maxCount) {
      maxCount = result[char];
      maxChar = char;
    }
  }

  return `${maxCount}  ${maxChar}`;
}
