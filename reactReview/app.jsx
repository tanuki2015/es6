import React, { Component } from 'react';
import { render } from 'react-dom';
import QuestionApp from './component/questionApp.jsx';

class App extends Component{
  render() {
    return <QuestionApp />;
  }
}

render(<App />, document.getElementById('main'));
