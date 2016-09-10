import React, { Component } from 'react';

class RepeatLi extends Component{
  render() {
    let i = 0;
    return (
      <ol>
        {
          this.props.children.map((child) => {return <li key={i++}>{child}</li>})
        }
      </ol>
    );
  }
}

export default RepeatLi;
