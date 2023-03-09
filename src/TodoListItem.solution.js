import React from 'react';

export const TodoListItem = (props) => {
  const todo = props.todo;
  const onUpdate = props.onUpdate;

  const onClick = () => {
    if (onUpdate) {
      const nextTodo = todo.copy();
      nextTodo.done = !todo.done;
      onUpdate(nextTodo);
    }
  };

  const textDecoration = todo.done ? 'line-through' : undefined;
  const buttonText = todo.done ? 'undo' : 'done';

  // There might be a bug in this template...
  return (
    <div class="d-flex justify-content-between" style={{ textDecoration }}>
      {todo.text}
      <button class="btn btn-primary btn-sm" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
