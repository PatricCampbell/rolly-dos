import React, { Component } from 'react';
import './todosContainer.css'

import TodosList from 'todosList';

class TodosContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos:
        [
          { id: '1', body: 'Take out the trash' },
          { id: '2', body: 'Get a goddamn job you schlub' }
        ]
    }
  }

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <TodosList todos={todos} />
      </React.Fragment>
    );
  }
}

export default TodosContainer;