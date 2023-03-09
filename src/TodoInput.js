import React, { useState } from 'react';

export const TodoInput = (props) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label for="new-todo" className="form-label">
        Create todo
      </label>

      <div className="input-group">
        <input id="new-todo" className="form-control" value={text} />
        <button type="submit" className="btn btn-primary">
          create
        </button>
      </div>
    </form>
  );
};
