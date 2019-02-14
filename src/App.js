import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addTodo(this.state.inputValue, uuidv4()));
    this.setState({ inputValue : "" });
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleDelete = (id) => {
      this.props.dispatch(removeTodo(id));
  }

  render() {
    let todoList =[];
    return (
      <div className = "App">
        <form onSubmit = {this.handleSubmit}>
          <input
            placeholder = "write a todo item"
            onChange = {this.handleChange}
            value = {this.state.inputValue}
          />
          <button
            disabled = {this.state.inputValue === ""}
            type = "submit"
          >Add
          </button>
        </form>


        {this.props.todoList.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              onDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
  };
}

export default connect(mapStateToProps)(App);
