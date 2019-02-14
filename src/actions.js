/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

/*
 * action creators
 */

export function addTodo(todo, id) {
  return {
    type: ADD_TODO,
    todo: todo,
    id: id
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id: id
  }
}
