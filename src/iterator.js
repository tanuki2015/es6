let arr = [1,2,4,5,6,7,8];
let arrIt = arr[Symbol.iterator]();

let result = arrIt.next();
console.log(result.value);
result = arrIt.next();
console.log(result.value);
result = arrIt.next();
console.log(result.value);
