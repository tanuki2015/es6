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

export default SubMessage;
