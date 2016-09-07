## 复习react

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

state 表示组件当前的状态，需要时自动重新渲染，也可调用this.setState()触发。