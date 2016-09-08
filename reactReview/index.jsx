import React, { Component } from 'react';
import { render } from 'react-dom';
import SubMessage from './myComponet.jsx';

// render(
//   <HelloComponent />,
//   document.getElementById('root')
// );

// 第一版 组件
// class HelloMessage extends Component {
//   alertMe() {
//     alert('点我啊！点我啊！点我啊！');
//   }
//   render() {
//     return <div onClick={this.alertMe} >Hello {this.props.name} </div>;
//   }
// }
//
// // 加载组件到 DOM 元素 mountNode
// render(<HelloMessage name="John" />, document.getElementById('root'));

/*  第二版 嵌套组件
*   问题：
*   1. return返回的顶层元素只能有一个，而且必须用（）包起来，格式如下
*   2. 组件名字必须首字母大写，写子组件时一定注意，否则渲染出来是字符串。
*   3. 一个文件只能定义一个组件，不像es5的写法可以多个。
*/
class HelloMessage extends Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name} </h1>
        <SubMessage />
      </div>);
  }
}

render(<HelloMessage name="John" />, document.getElementById('root'));
