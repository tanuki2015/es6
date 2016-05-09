//独一无二的key
//caniuse.com 兼容性情况
let obj = {
  name: "xf",
  age: 18
}

let name = Symbol("name");
let age = Symbol("age");
let objSym = {
  [name]: "ff",
  [age]: 80
};

console.log(objSym.name,objSym.age);
console.log(objSym[name]);
console.log(name);

objSym[age] = 100;
console.log(objSym[age]);

//没感觉出来有什么用......
