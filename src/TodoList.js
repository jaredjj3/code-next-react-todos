import React from 'react';

export const TodoList = (props) => {
  const todos = props.todos;

  return (
    <div>
      <h2>Todos</h2>

      <ul class="list-group">
      </ul>
    </div>
  );
};