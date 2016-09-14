import React, { Component } from 'react';

class ShowAddButton extends Component {
  render() {
    return (
      <button className="btn btn-success" id="add-question-btn" onClick={this.props.onToggleForm}>添加问题</button>
    );
  }
}

export default ShowAddButton;
