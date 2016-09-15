import React, { Component } from 'react';
import QuestionItem from './questionItem.jsx';

class QuestionList extends Component {
  render() {
    let questions = this.props.questions;
    if (!Array.isArray(questions)) throw new Error('this.props.questions 必需是数组');

    let questionsComp = questions.map((item) => {
      return <QuestionItem
        key={item.key}
        questionKey={item.key}
        title={item.title}
        description={item.description}
        voteCount={item.voteCount}
        onVote={this.props.onVote}
        />;
    });
    return (
      <div id="questionList">
        {questionsComp}
      </div>
    );
  }
}

export default QuestionList;
