let id = 0;

// A simple class that models todos.
export class Todo {
  static create(text) {
    return new Todo(id++, text);
  }

  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
}
