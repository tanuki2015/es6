import React, { Component } from 'react';

class QuestionItem extends Component {
  render() {
    return (
      <div className="questionBody clearfix">
        <div className="questionBtn">
          <button className="btn btn-default questionBtn">
            <span className="glyphicon glyphicon-chevron-up" /><br />
            <span className="vote-count">{this.props.voteCount}</span>
          </button>
          <button className="btn btn-default questionBtn">
            <span className="glyphicon glyphicon-chevron-down" />
          </button>
        </div>
        <div className="questionItem">
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default QuestionItem;
