import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
  const todos = props.todos;
  const onUpdate = props.onUpdate;

  return (
    <div>
      <h2>Todos</h2>

      {todos.length === 0 ? (
        <div className="d-flex justify-content-evenly">
          <h3>You're all caught up!</h3>
        </div>
      ) : (
        <ul className="list-group" style={{ cursor: 'pointer' }}>
          {todos.map((todo) => (
            <li className="list-group-item">
              <TodoListItem key={todo.id} todo={todo} onUpdate={onUpdate} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
