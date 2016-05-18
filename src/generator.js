//generator生成器，每一个yield会返回他后面的值，相当于生成了一系列值，顾名思义生成器
//主要作用之一，状态机：
function* yesOrNo() {
  while (true) {
    yield console.log("yes");
    yield console.log("no");
  }
}
let yorN = yesOrNo();
yorN.next();
yorN.next();
yorN.next();
yorN.next();

//异步操作的同步表达，改写callback
function* order() {
  yield  setTimeout(() => console.log(1), 1000);
  yield  setTimeout(() => console.log(2), 2000);
  yield  setTimeout(() => console.log(3), 3000);
}

let order123 = order();
order123.next();
order123.next();
order123.next();
