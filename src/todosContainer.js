import React, { Component } from 'react';

import TodoList from 'todoList';

class TodosContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: {
        '1': 'Take out the trash',
        '2': 'Get a goddamn job you schlub'
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <TodoList />
      </React.Fragment>
    );
  }
}

export default TodosContainer;