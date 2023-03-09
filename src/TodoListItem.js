import React from 'react';

export const TodoListItem = (props) => {
  const todo = props.todo;

  const textDecoration = todo.done ? 'line-through' : undefined;
  const buttonText = todo.done ? 'undo' : 'done';

  // There might be a bug in this template...
  return (
    <div
      className="d-flex justify-content-between"
      style={{ textDecoration }}
    >
      {todo.text}
      <button className="btn btn-primary btn-sm">{buttonText}</button>
    </div>
  );
};
