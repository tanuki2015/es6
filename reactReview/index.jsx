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
// class HelloMessage extends Component {
//   render() {
//     return (
//       <div>
//         <h1> Hello {this.props.name} </h1>
//         <SubMessage />
//       </div>);
//   }
// }
//
// render(<HelloMessage name="John" />, document.getElementById('root'));

/* 第三版 循环展开组件
*   render函数中正常写函数，可以引用组件
*   return的时候用花括号引用数组，会自动展开
*   当子组件时数组是，它需要有一个key的属性，所以在push进数组是加入key=XXX+i 以示区别
*/
// class HelloMessage extends Component {
//   render() {
//     const messages = [];
//     for (let i = 0; i < 10; i++) {
//       messages.push(<SubMessage key={'subMessage'+i} />);
//     }
//     return (
//       <div>
//         <h1> Hello {this.props.name} </h1>
//         {messages}
//       </div>);
//   }
// }
//
// render(<HelloMessage name="John" />, document.getElementById('root'));

/*  第四版state
*   用构造函数初始化state
*   用this.state.XXX引用
*   最重要的一点，添加点击事件的时候用箭头函数，才能保证this是正确的
*   onClick={() => this.clickHandle()}
*   或者用es7的::来绑定 onClick={::this.clickHandle}
*/
// class HelloMessage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisable: true,
//       titleMessage: 'hello, react!',
//       clickCount: 0,
//     };
//   }
//   clickHandle() {
//     this.setState({
//       isVisable: !this.state.isVisable,
//       clickCount: this.state.clickCount + 1,
//     });
//   }
//   render() {
//     const styleObj = {
//       display: this.state.isVisable ? 'block' : 'none',
//     };
//     return (
//       <div>
//         <h1 onClick={::this.clickHandle}> Hello {this.props.name} </h1>
//         <h3> 一共点击了{this.state.clickCount}次！</h3>
//         <h2 style={styleObj} > {this.state.titleMessage} </h2>
//       </div>);
//   }
// }
// render(<HelloMessage name="John" />, document.getElementById('root'));

/*  第五版传递props给子组件
*   问题：1 如果调用子组件的时候没有传参，为防止子组件中处理出错，用static defaultProps 解决
*/
// class HelloMessage extends Component {
//   constructor(props) {
//     super(props);
//   }
//   //  配置好后，state可以简单的这样初始化了
//   state = {
//     isVisable: true,
//     titleMessage: 'hello, react!',
//     clickCount: 0,
//     subMessage: [
//       '从父组件',
//       '传递给子组件',
//       '的一个字符串数组'
//     ],
//   };
//
//   clickHandle() {
//     this.setState({
//       isVisable: !this.state.isVisable,
//       clickCount: this.state.clickCount + 1,
//     });
//   }
//   render() {
//     const styleObj = {
//       display: this.state.isVisable ? 'block' : 'none',
//     };
//     return (
//       <div>
//         <h1 onClick={::this.clickHandle}> Hello {this.props.name} </h1>
//         <SubMessage msg={this.state.subMessage}/>
//       </div>);
//   }
// }
//
// render(<HelloMessage name="John" />, document.getElementById('root'));

/* 表单和事件
*   关于事件的代码，可以发现，当元素中使用了value时，就必须使用onChange方法。那多个元素设置了value，
* 就得有多个onChange事件，这显然太笨了，于是，就有了下面的用ref获取元素节点的方法，可以一次直接
* 得到这个元素及他的所有属性。
*/
class MyFrom extends Component {
  state = {
    inputValue: 'input value',
    selectValue: 'A',
    radioValue: 'B',
    textareValue: 'some text here...',
  }

  handleSubmit = (e) => {
    e.preventDefault(); // 停掉默认提交表单的动作
    console.log('form submitting...');
    console.log(e);
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleSelect = (e) => {
    this.setState({
      selectValue: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
        <br/>
        <select value={this.state.selectValue} onChange={this.handleSelect}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <br/>
        <p>radio button</p>
        <input name="goodRadio" type="radio" value="A"/>
        <input name="goodRadio" type="radio" value="B"/>
        <input name="goodRadio" type="radio" value="C"/>
        <br/>
          <input name="goodRadio" type="checkbox" value="A"/>
          <input name="goodRadio" type="checkbox" value="B"/>
          <input name="goodRadio" type="checkbox" value="C"/>
        <br/>
        <textarea value={this.state.textareValue}></textarea>
        <button type="submit">确认提交</button>
      </form>
    )
  }
}
render(<MyFrom />, document.getElementById('root'));
