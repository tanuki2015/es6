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
function maximum(str) {
  // 统计出现的字符和次数，放到chars对象中
  const chars = {};
  const reg = /[^\s\n\b]/g;

  str.replace(reg, (char) => {
    if (chars[char] >= 1) {
      chars[char] += 1;
    } else {
      chars[char] = 1;
    }
  });

  // 取出次数最多的字符和次数放到maxChar对象中
  const maxChar = {};
  let maxCount = 0;

  for (let key in chars) {
    if (chars[key] > maxCount) {
      maxCount = chars[key];
    }
  }

  for (let key in chars){
    if (chars[key] >= maxCount) {
      maxChar[key] = chars[key];
    }
  }

  return maxChar;
}

console.log(maximum(str));
