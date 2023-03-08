let id = 0;

// A simple class that models todos.
export class Todo {
  static create(text) {
    return new Todo(text);
  }

  constructor(text) {
    this.text = text;
    this.id = id++;
  }
}
