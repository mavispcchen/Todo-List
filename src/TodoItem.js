import React from 'react';

const TodoItem = ({ onDelete, item }) => (
  <div>
    <li>
      {item.todo}
      <button
        style = {{marginLeft: 20, marginRight: 20}}
        onClick = {() => onDelete(item.id)}
      >Delete
      </button>
    </li>
  </div>
);

export default TodoItem;
