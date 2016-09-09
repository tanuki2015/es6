import React, { Component } from 'react';
// import { render } from 'react-dom';

class SubMessage extends Component {
  render() {
    const message = [];
    let keyValue = 0;
    this.props.msg.forEach((item) => {
      message.push(<h3 key={keyValue++}>{item}</h3>);
    });
    return <div>{message}</div>;
  }
}
// 默认的props只能写在类的外面才能通过编译，而且他的key必须跟传入的props的name一样，value类型也要一样。
SubMessage.defaultProps = {
  msg: ['没有传参，我是默认的参数'],
};

export default SubMessage;
