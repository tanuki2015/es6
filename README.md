# es6学习笔记：

## babel的使用
本项目依赖安装：
`$ npm install --save-dev babel-cli`

还有需要转码的模块：
### ES2015转码规则
`$ npm install --save-dev babel-preset-es2015`

### react转码规则
`$ npm install --save-dev babel-preset-react`

### ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
```
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```
需要配置文件，在项目目录下新建 .babelrc
加入：
```
{
  "presets": [],
  "plugins": []
}
```
最后给presets加入：
“es2015”

```
{ "presets": [
 "es2015" ],
 "plugins": [] }
```
同样添加其他编码支持：
```
  {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }
```
增加api支持：
`npm install --save babel-polyfill`

然后在文件顶部导入：
`import "babel-polyfill";`

最后，
babel-runtime #

就是内联代码，不用每个文件包含babel的help函数
```
$ npm install --save-dev babel-plugin-transform-runtime
$ npm install --save babel-runtime
```


## es6变量定义部分

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
