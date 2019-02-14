import React from 'react';
import './App.css';
import uuidv4 from 'uuid/v4';
import { addTodo } from './actions';
import { connect } from 'react-redux';

let AddTodo = ({ dispatch, todoList }) => {
  let input = "";
  return (
    <div className = "AddTodo">
      <form
        onSubmit = {(e) => {
          e.preventDefault();
          dispatch(addTodo(input.value, uuidv4()));
          input.value = "";
      }}>
        <input
          placeholder = "write a todo item"
          ref={node => {input = node}}
        />
        <button
          disabled = {input.value === ""}
          type = "submit"
        >Add
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  };
}
export default connect(mapStateToProps)(AddTodo);
