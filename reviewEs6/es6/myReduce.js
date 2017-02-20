// 今天看react的reducer，自己突然想写一下reduce
// 用到了门面模式，typeof检测传值，设定thisArg（this作为参数）运行回调
class WrapperArray {
  constructor(array) {
    this.array = array;
  }

  reduce(callback, acc) {
    if (typeof acc !== 'number') {
      acc = 0;
    }

    this.array.forEach((item, index, array) => {
      acc = callback.call(this.array, acc, item, index, this.array);
    })
    return acc;
  }

  forEach(fn, thisArg) {
    for (let i = 1, len = this.array.length; i <= len; i++) {
      if (typeof thisArg === 'undefined') {
        thisArg = window;
      }
      const item = this.array[i];
      const index = i;
      fn.call(item, index, this.array, thisArg);
    }
  }
}

const arr = [1,2,3,4,5];
const myArray = new WrapperArray(arr);
// 测试一下forEach
// myArray.forEach((item, index, array) => console.log(item, index, array), myArray);

// 测试一下reduce
const resultAdd = myArray.reduce((previous, current) => previous + current);

const resultMul = myArray.reduce((previous, current) => previous * current, 1);
console.log(resultAdd, resultMul);
