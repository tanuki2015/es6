# es6学习笔记：

## 变量定义部分

1. 变量赋值用let代替var。
2. 使用严格模式，在调试阶段尽量报错。文件开头加上 `use strict`
3. 闭包直接这样写：`{...}`
4. 项目中尽量不增加window的属性（用let）。
5. html属性 lang="en",要去掉，否则google会提示自动翻译。
6. const 变量用大写。

## 解构赋值
把右侧的数据类型赋值到左侧结构相似的数据类型中

扩展运算符`...`

```
let [e, f, ...other] = [1,2,3,4,5];
console.log(e, f, other);
```