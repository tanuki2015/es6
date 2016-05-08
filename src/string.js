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
objThis.fn1(); //objthis
objThis.fn2(); //windowThis

//其实箭头函数没有this，他就用词法作用域，即外层的this，也即是context
//上面objThis的上下文是window，所以...

//无法绑定
let obj3 = {
    id: "obj333",
    fn3: objThis.fn2
};
objThis.fn2.call(obj3);
obj3.fn3(); //windowThis

//下面所谓的es6的函数式编程
const addCurry = x => y => x + y;
//上面的写法很恶心，不如下面
//而且这种手动curry如果经常要用，不如写一个curry帮助函数
//最好的方法是还是用ramda

// function addCurry (x) {
//     return function (y) {
//         return x + y;
//     };
// };

var inc = addCurry(1);
console.log(inc(3));
