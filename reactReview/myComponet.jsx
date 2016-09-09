import React, { Component } from 'react';
// import { render } from 'react-dom';

class SubMessage extends Component {
  // 这个地方报错，在webpack.config.js配置query，presets中加入"stage-0"，问题解决
  static defaultProps = {
    msg: ['没有传参，我是默认的参数'],
  };
  static propTypes = {
    msg: React.PropTypes.array.isRequired
  }
  render() {
    const message = [];
    let keyValue = 0;
    this.props.msg.forEach((item) => {
      message.push(<p key={keyValue++}> 子组件说: {item}</p>);
    });
    return <div>{message}</div>;
  }
}
// 默认的props只能写在类的外面才能通过编译，而且他的key必须跟传入的props的name一样，value类型也要一样。
// SubMessage.defaultProps = {
//   msg: ['没有传参，我是默认的参数'],
// };

export default SubMessage;
