import React, { Component } from 'react';

class QuestionItem extends Component {
  voteUp() {
    // 因为拿不到key，所以在父组件questionList中用questionKey把key传过来用
    let newCount = parseInt(this.props.voteCount) + 1;
    this.props.onVote(this.props.questionKey, newCount);
  }
  voteDown() {
    // 因为拿不到key，所以在父组件questionList中用questionKey把key传过来用
    let newCount = parseInt(this.props.voteCount) - 1;
    this.props.onVote(this.props.questionKey, newCount);
  }
  render() {
    return (
      <div className="questionBody clearfix">
        <div className="questionBtn">
          <button className="btn btn-default questionBtn" onClick={() => { this.voteUp(); }}>
            <span className="glyphicon glyphicon-chevron-up" /><br />
            <span className="vote-count">{this.props.voteCount}</span>
          </button>
          <button className="btn btn-default questionBtn" onClick={() => { this.voteDown(); }}>
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
