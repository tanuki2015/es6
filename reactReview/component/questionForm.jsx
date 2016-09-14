import React, { Component } from 'react';

class QuestionForm extends Component {
  render() {
    let styleObj = {
      display: this.props.isDispyForm ? 'block' : 'none',
    };
    return (
      <form style={styleObj} className="clearfix" role="form">
        <div className="form-group">
          <label htmlFor="question-title">问题</label>
          <input type="text" className="form-control" id="question-title" placeholder="问题的标题" />
        </div>
        <div className="form-group">
          <textarea className="form-control" rows={3} placeholder="问题的描述" defaultValue={""} />
        </div>
        <div className="form-group pull-right">
          <button type="submit" className="btn btn-default">取消</button>
          <button type="submit" className="btn btn-success" onClick={this.props.onToggleForm}>确认</button>
        </div>
      </form>
    );
  }
}

export default QuestionForm;
