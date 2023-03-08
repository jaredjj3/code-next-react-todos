import React from 'react';

export const TodoListItem = (props) => {
  const todo = props.todo;

  return <li class="list-group-item">{todo.text}</li>
};