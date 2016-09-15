import React, { Component } from 'react';
import render from 'react-dom';
import ShowAddButton from './showAddButton.jsx';
import QuestionForm from './questionForm.jsx';
import QuestionList from './questionList.jsx';


class Question extends Component {
  state = {
    questions: [
      {
        key: 1,
        title: '什么是 JSX!',
        description: 'JSX 语法听上去很讨厌，但当真正使用的时候会发现，JSX 的写法在组件的组合和属性的传递上提供了非常灵活的解决方案。在学习本节的时候，希望读者在阅读的同时能够实际编码体验 JSX ，写代码的意思是真的要写.代.码',
        voteCount: 6,
      },
      {
        key: 2,
        title: 'JavaScript中的作用域scope',
        description: 'avaScript中的作用域scope 和上下文 context 是这门语言的独到之处，每个函数有不同的变量上下文和作用域。这些概念是JavaScript中一些强大的设计模式的后盾。在ES5规范里，我们可以遵循一个原则——每个function内的上下文this指向该function的调用方',
        voteCount: 3,
      }
    ],
    questionFormDisplay: false,
  }

  toggleQuestionForm = () => {
    this.setState({
      questionFormDisplay: !this.state.questionFormDisplay,
    })
  }

  // 这是传给form的cb，传的时候要bind this才能用this来操作这个组件的state。（line60）
  onNewQuestion(newQuestion) {
    // 别忘记 let questionArr
    let questionArr = this.state.questions;
    newQuestion.key = questionArr.length + 1;
    questionArr.push(newQuestion);
    questionArr.sort((a, b) => {
      return b.voteCount - a.voteCount;
    });
    this.setState({
      questions: questionArr,
    })
  }

  // 传递给questionItem的投票handler
  onVote(questionKey, newCount) {
    // 拿到这一项index
    let questionArr = this.state.questions;
    let index = 0;
    for(let i=0, len=questionArr.length; i<len; i++){
      if(questionArr[i].key == questionKey){
        index = i;
        break;
      }
    }
    // 更新voteCount
    questionArr[index].voteCount = newCount;
    questionArr.sort((a, b) => {
      return b.voteCount - a.voteCount;
    });
    console.log(questionArr);
    this.setState({
      questions: questionArr,
    })
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <h1>React 问答</h1>
            <ShowAddButton onToggleForm={this.toggleQuestionForm}/>
          </div>
        </div>
        <div className="container">
          <QuestionForm
            isDispyForm={this.state.questionFormDisplay}
            onToggleForm={this.toggleQuestionForm}
            onNewQuestion={this.onNewQuestion.bind(this)}
            />
          <QuestionList questions={this.state.questions} onVote={this.onVote.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Question;
