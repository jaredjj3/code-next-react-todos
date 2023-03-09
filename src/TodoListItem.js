import React, { useState } from 'react';

export const TodoListItem = (props) => {
  const [done, setDone] = useState(false);
  const todo = props.todo;

  const textDecoration = done ? 'line-through' : undefined;

  // There might be a bug in this template...
  return (
    <div
      class="d-flex justify-content-between"
      style={{ textDecoration }}
    >
      {todo.text}
      <button class="btn btn-primary btn-sm">done</button>
    </div>
  );
};
