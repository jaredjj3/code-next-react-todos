import React, { useState } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { Todo } from './Todo';
import { useLocalStorage } from './useLocalStorage';

const INITIAL_TODOS = [
  Todo.create('study react'),
  Todo.create('master react'),
  Todo.create('change the world'),
];

export default function App() {
  const [todos, setTodos] = useLocalStorage('todos', INITIAL_TODOS);

  const onCreate = (todo) => {
    setTodos((todos) => [...todos.map((t) => t.copy()), todo]);
  };

  const onUpdate = (todo) => {
    setTodos((todos) =>
      todos.map((t) => (t.id === todo.id ? todo.copy() : t.copy()))
    );
  };

  const onRemoveDoneClick = () => {
    setTodos((todos) => todos.map((t) => t.copy()).filter((t) => !t.done));
  };

  return (
    <div class="container">
      <h1>My Todo App</h1>

      <TodoInput onCreate={onCreate} />

      <hr />

      <TodoList todos={todos} onUpdate={onUpdate} />

      <br />

      <div class="d-flex justify-content-evenly">
        <button class="btn" onClick={onRemoveDoneClick}>
          remove done todos
        </button>
      </div>
    </div>
  );
}
