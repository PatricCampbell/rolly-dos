import React from 'react';
import './todosList.css';

import TodoItem from 'todoItem';

const TodosList = props => {
  const { todos } = props;

  return (
    <React.Fragment>
      {todos.map(todo => {
        return <TodoItem key={todos.id} body={todos.body} />;
      })}
    </React.Fragment>
  );
}

export default TodosList;