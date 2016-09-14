import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class QuestionForm extends Component {
  render() {
    let styleObj = {
      display: this.props.isDispyForm ? 'block' : 'none',
    };

    // 因为是在提交表单的事件中进行，所以要用箭头函数的调用方式（line27）绑定到元素得到e，
    // 但是在事件处理程序中又需要组件的this.refs,和this.props，没办法，只好作为参数分别传入
    function handleForm(e, refs, props) {
      e.preventDefault();
      // 填写表单不能为空
      if (!refs.title.value) { return; }
      // 生成表单数据
      let newQuestion = {
        key: '',
        title: refs.title.value,
        description: refs.description.value,
        voteCount: 0,
      };
      refs.addQuestionForm.reset();
      // 传入的cb拿表单数据
      props.onNewQuestion(newQuestion);
    }

    return (
      <form ref="addQuestionForm" style={styleObj} className="clearfix" role="form" onSubmit={(e) => handleForm(e, this.refs, this.props)}>
        <div className="form-group">
          <label htmlFor="question-title">问题</label>
          <input ref="title" type="text" className="form-control" id="question-title" placeholder="问题的标题" />
        </div>
        <div className="form-group">
          <textarea ref="description" className="form-control" rows={3} placeholder="问题的描述" defaultValue={""} />
        </div>
        <div className="form-group pull-right">
          <button type="submit" className="btn btn-default" onClick={this.props.onToggleForm}>取消</button>
          <button type="submit" className="btn btn-success">确认</button>
        </div>
      </form>
    );
  }
}

export default QuestionForm;
