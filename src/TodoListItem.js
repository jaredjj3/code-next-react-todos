import React, { useState } from 'react';

export const TodoListItem = (props) => {
  const [done, setDone] = useState(false);
  const todo = props.todo;

  const textDecoration = done ? 'line-through' : undefined;

  return (
    <li
      class="list-group-item list-group-item-action"
      style={{ textDecoration }}
    >
      {todo.text}
    </li>
  );
};
