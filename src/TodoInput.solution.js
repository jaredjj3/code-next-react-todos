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
    if (onCreate) {
      const todo = Todo.create(text);
      onCreate(todo);
    }
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
        <button type="submit" class="btn btn-primary">
          create
        </button>
      </div>
    </form>
  );
};
