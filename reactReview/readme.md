## 复习react

### 解决webpack编译时不支持class的静态属性的问题
1. 安装babel-plugin-transform-class-properties。
2. 在webpack.config.js配置query，presets中加入"stage-0"。
```
class SubMessage extends Component {
  // 这个地方报错，在webpack.config.js配置query，presets中加入"stage-0"，问题解决
  static defaultProps = {
    msg: ['没有传参，我是默认的参数'],
  };
```
然后，default State可以这样写了：
```
state = {
  isVisable: true,
  titleMessage: 'hello, react!',
  clickCount: 0,
  subMessage: [
    '从父组件',
    '传递给子组件',
    '的一个字符串数组'
  ],
};
```


1. 需要webpack和babel插件，相应的配置在webpack.config.js和.babelrc中。
2. 必须导入React对象和render方法如下：
```
import React, { Component } from 'react';
import { render } from 'react-dom';
```

3. hello world. 定义一个类后，直接引用类名会得到类的实例，不需要用new初始化，
```
class HelloMessage extends Component {
  render() {
    return <div>Hello react world!</div>;
  }
}

// 加载组件到 DOM 元素 mountNode
render(<HelloMessage />, document.getElementById('container'));
```

### 组件的输入（props）和状态(state)

props在引用组件时由外部传入，组件定义中用this.props来引用
```
class HelloMessage extends Component {
  render() {
    return <div>Hello {this.props.name} </div>;
  }
}

// 加载组件到 DOM 元素 mountNode
render(<HelloMessage name="John" />, document.getElementById('root'));
```

#### 添加一点交互,onClick事件
```
class HelloMessage extends Component {
  alertMe() {
    alert('点我啊！点我啊！点我啊！');
  }

  render() {
    return <div onClick={this.alertMe} >Hello {this.props.name} </div>;
  }
}

render(<HelloMessage name="John" />, document.getElementById('root'));

```
## 嵌套组件
问题：
1. return返回的顶层元素只能有一个，而且必须用（）包起来
2. 组件名字必须首字母大写，写子组件时一定注意，否则渲染出来是字符串。
3. 一个文件只能定义一个组件，不像es5的写法可以多个。

## 循环展开组件
* render函数中正常写函数，可以引用组件
* return的时候用花括号引用数组，会自动展开
* 当子组件时数组是，它需要有一个key的属性，所以在push进数组时加入key=XXX+i 以示区别

## state 表示组件当前的状态，需要时自动重新渲染，也可调用this.setState()触发。
*   用构造函数初始化state
*   用this.state.XXX引用
*   最重要的一点，添加点击事件的时候用箭头函数，才能保证this是正确的
*   onClick={() => this.clickHandle()}
*   或者用es7的::来绑定 onClick={::this.clickHandle}

一个toggle现实表单的例子，因为e没有传进去，所以函数没有执行，因为这个表单被提交的时候才会有e，
才有e.preventDefault。

要像下面这样用箭头函数去执行这个handle函数才能传入e。
```
let handleForm = (e) => {
  e.preventDefault();
};

return (
  <form style={styleObj} className="clearfix" role="form" onSubmit={(e) => handleForm(e)}>
  ......
```

## 传递props给子组件
问题：1 如果调用子组件的时候没有传参，为防止子组件中处理出错，用static defaultProps 解决

如果ref改成一个函数，这个函数会在组件render时自动执行，这个ref的元素会作为参数传入函数

传递props还可以用spread，在子组件直接用{...this.props}接受所有的props

## 表单和事件
关于事件的代码，可以发现，当元素中使用了value时，就必须使用onChange方法。那多个元素设置了value，就得有多个onChange事件。

这显然太笨了，于是，就有了下面的用ref获取元素节点的方法，可以一次直接得到这个元素及他的所有属性。

......
