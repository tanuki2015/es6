// 写几个小例子练手
// 1 输出一个列表
import React, { Component } from 'react';
import { render } from 'react-dom';
import RepeatLi from './myCompLi.jsx';

// class RepeatArray extends Component{
//   render() {
//     return (
//       <div>
//         <RepeatLi>
//           <span>hello</span>
//           <span>world</span>
//         </RepeatLi>
//       </div>
//     );
//   }
// }
//
// render(<RepeatArray />, document.getElementById('root'));

// 2 事件焦点
// 今天碰到莫名其妙的问题，写一个简单的输入框就是现实不出来，怎么样都没发现问题，就是重写就好了，真是头疼啊jsx
class Event extends Component {
  clickHandle = (e) => {
    this.refs.myText.focus();
  }
  render() {
    return (
      <div>
        <input type="text" defaultValue="123456" ref="myText"/>
        <button onClick={this.clickHandle}>clickme</button>
      </div>
    )
  }
}

render(<Event />, document.getElementById('root'));
