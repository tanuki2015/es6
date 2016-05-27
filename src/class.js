// class People {
//
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.color = "red";
//   }
//   showInfo() {
//     console.log(this.name, this.age);
//     return this;
//   }
// }
//
// const boy = new People("xxx", 8);
// boy.showInfo();
// console.log(boy);

const obj = {
  a: 1,
  b: () => {console.log('hi')},
  c() {console.log('hello')},
}
obj.b();
obj.c();
