let id = 0;

// A simple class that models todos.
export class Todo {
  static create(text) {
    return new Todo(id++, text, false);
  }

  static fromJSON(todo) {
    return new Todo(todo.id, todo.text, todo.done);
  }

  constructor(id, text, done) {
    this.id = id;
    this.text = text;
    this.done = done;
  }

  copy() {
    return new Todo(this.id, this.text, this.done);
  }

  toJSON() {
    return { id: this.id, text: this.text, done: this.done };
  }
}
