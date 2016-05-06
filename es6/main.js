// var [a,b,c] = [1,2,3];
// console.log(b);
//
// function fn(){
//   let a = 3,
//   b = 4,
//   c = 5;
//
// }
//变量结构赋值的用途
//交换值
let a = 2,
b = 6;
[a,b] = [b,a];
console.log(a); //a = 6
console.log(b); //b = 2

//取多个返回值
function example(){
  return [1,2,3];
}
let [x,y,z] = example();
console.log(x,y,z);

function example1(){
  return {
    foo: "I'm foo",
    bar: "I'm bar"
  }
}
let {foo,bar} = example1();
console.log(foo,bar);

//给一组参数
function example2 ([x,y,z]){
  return console.log("x = %d, y = %d, z =%d", x,y,z);
}
example2([1,2,3]); //有顺序

function example3 ({x,y,z}){
  return console.log("x = %d, y = %d, z =%d", x,y,z);
}
example3({z: 3, y: 2, x: 1}); //无顺序

//从json快速取数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
}

let { id, status, data:number } = jsonData;
console.log(id, status, number);

//设置函数参数默认值
function example4({ x = 1, y = 2, z = 3}){
  console.log(x, y, z);
}
example4({}); //取默认值
example4({x:4, y:5}); //取部分值

//下面这种通过对参数这个对象结构，取值，可以不传对象进去
function example5 ( {x=1, y=2, z=3} = {} ){
  console.log(x, y, z);
}
example5();
example5({});
example5({x:7,y:8});

//map用法和模块暂时略过......
