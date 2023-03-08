import React, { useState } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { Todo } from './Todo';

const INITIAL_TODOS = [
  Todo.create('study react'),
  Todo.create('master react'),
  Todo.create('change the world'),
];

export default function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const onCreate = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  return (
    <div class="container">
      <h1>My Todo App</h1>

      <TodoInput onCreate={onCreate} />

      <hr />

      <TodoList todos={todos} />
    </div>
  );
}
