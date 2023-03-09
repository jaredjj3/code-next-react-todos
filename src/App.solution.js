import React, { useMemo } from 'react';
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
  const [todos, setTodos] = useLocalStorageTodos();

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
    <div className="container">
      <h1>My Todo App</h1>

      <TodoInput onCreate={onCreate} />

      <hr />

      <TodoList todos={todos} onUpdate={onUpdate} />

      <br />

      <div className="d-flex justify-content-evenly">
        <button
          className="btn btn-outline-danger"
          disabled={todos.every((t) => !t.done)}
          onClick={onRemoveDoneClick}
        >
          remove done todos
        </button>
      </div>
    </div>
  );
}

const useLocalStorageTodos = () => {
  const [json, setJson] = useLocalStorage(
    'todos',
    INITIAL_TODOS.map((t) => t.toJSON())
  );

  // We need to cache the array to prevent infinite re-renders.
  const todos = useMemo(() => json.map((o) => Todo.fromJSON(o)), [json]);

  const setTodos = (update) => {
    const nextJson = update(todos).map((t) => t.toJSON());
    setJson(nextJson);
  };

  return [todos, setTodos];
};
