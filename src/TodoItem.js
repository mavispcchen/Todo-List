import React, { Component } from 'react';

class TodoItem extends Component {
  render(){
    const {item} = this.props;
    return(
      <div>
        <li>
          {item.todo}
          <button style = {{marginLeft: 20, marginRight: 20}}
            onClick = {() => this.props.onDelete(item.id)}
          >Delete
          </button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
