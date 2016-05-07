//模板字符串
let pattern = `这是一个
  字符串
  隔行的！
`;
console.log(pattern);

//解构用法，写到这里
function add (x = 0, y = 0){
  return x + y;
}
console.log(add());
//默认参数解决了，但是如果传入的不是number类型，还是会出错。
//这个问题还是得手动coding吗？typeScript可以，但副作用太多。

//取第一个参数
function addSome (a, ...rest) {
  console.log(a);
  console.log(rest);
  var sum = rest.reduce((prev, cur) => {
    return prev + cur;
  });
  console.log(sum);
}
addSome(1,2,3,4,5);

//箭头函数，绑定的this

function fn1 () {
  setTimeout(() => console.log(this.id) ,1000);
}

let obj = {
  id: "xf",
  showId: fn1
}

obj.showId();

//箭头函数this容易混淆的地方
var id = "windowThis";
let objThis = {
  id: "objThis",
  fn1: function(){console.log(this.id)},
  fn2: () => console.log(this.id)
}
objThis.fn1();
objThis.fn2();
