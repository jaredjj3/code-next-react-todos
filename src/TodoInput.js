import React from 'react';

export const TodoInput = () => {
  return (
    <>
      <label for="new-todo" class="form-label">Create todo</label>
      
      <div class="input-group">
        <input autofocus id="new-todo" class="form-control" />
        <button class="btn btn-primary">Create</button>
      </div>
    </>
  );
};