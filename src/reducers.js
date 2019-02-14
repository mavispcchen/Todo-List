import { combineReducers } from 'redux';
import {
  ADD_TODO,
  REMOVE_TODO
} from './actions';

const todoList = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, {
          todo: action.todo,
          id: action.id
        }
      ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todoList
})
export default rootReducer;
