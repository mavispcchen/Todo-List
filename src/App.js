import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo';

class App extends Component {

  render() {
    return (
      <div className = "App">
        <AddTodo />
      </div>
    );
  }
}

export default App;
