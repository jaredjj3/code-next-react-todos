import React, { useState } from 'react';
import { Todo } from './Todo';

export const TodoInput = (props) => {
  const onCreate = props.onCreate;

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    if (onCreate) {
      const todo = Todo.create(text);
      onCreate(todo);
    }
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label for="new-todo" class="form-label">
        Create todo
      </label>

      <div class="input-group">
        <input
          id="new-todo"
          class="form-control"
          value={text}
          onChange={onChange}
        />
        <button type="submit" class="btn btn-primary" disabled={!text}>
          create
        </button>
      </div>
    </form>
  );
};
