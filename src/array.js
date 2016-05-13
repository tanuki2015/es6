//数组
//浅拷贝： 只拷贝第一层的数据，基本类型是自己的值，引用类型只拷贝引用地址（相当于共享内容）
let obj = {
  a: 1,
  b: 2,
  fn : () => { console.log("I'm fn!") },
  //每个键值对后必有逗号，减少git的dif。
}
let arr = [5,6,7,obj];
let arr2 = Array.from(arr);
arr[0] = 111; //基本类型
obj.c = 3; //引用类型共享
console.log(obj, arr, arr2);

//深拷贝自己写，当然用lodash之类的库会比较好
//当然，最好是用immutable.js
