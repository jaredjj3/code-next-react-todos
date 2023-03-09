import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
  const todos = props.todos;

  return (
    <div>
      <h2>Todos</h2>

      <ul class="list-group" style={{ cursor: 'pointer' }}>
        {todos.map((todo) => (
          <li class="list-group-item">
            <TodoListItem key={todo.id} todo={todo} />
          </li>))}
      </ul>
    </div>
  );
};