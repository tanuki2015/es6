import React, { Component } from 'react';
import QuestionItem from './questionItem.jsx';

class QuestionList extends Component {
  render() {
    let questions = this.props.questions;
    if (!Array.isArray(questions)) throw new Error('this.props.questions 必需是数组');

    let questionsComp = questions.map((item) => {
      return <QuestionItem
          key={item.key}
          title={item.title}
          description={item.description}
          voteCount={item.voteCount}
        />;
    });
    console.log(questionsComp);
    return (
      <div id="questionList">
        {questionsComp}

      </div>
    );
  }
}

export default QuestionList;
