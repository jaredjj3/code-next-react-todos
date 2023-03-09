import React, { useState } from 'react';

export const TodoInput = (props) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label for="new-todo" class="form-label">
        Create todo
      </label>

      <div class="input-group">
        <input id="new-todo" class="form-control" value={text} />
        <button type="submit" class="btn btn-primary">
          create
        </button>
      </div>
    </form>
  );
};
