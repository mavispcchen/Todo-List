import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { removeTodo } from './actions';

let TodoListView = ({ dispatch, todoList }) => {
  return (
    todoList.map((item) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={(id) => {dispatch(removeTodo(id));}}
        />
      );
    })
  );
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  };
}
export default connect(mapStateToProps)(TodoListView);
