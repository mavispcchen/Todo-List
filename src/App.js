import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoListView from './TodoListView';

class App extends Component {

  render() {
    return (
      <div className = "App">
        <AddTodo />
        <TodoListView />
      </div>
    );
  }
}

export default App;
