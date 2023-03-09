let id = 0;

// A simple class that models todos.
export class Todo {
  static create(text) {
    return new Todo(id++, text, false);
  }

  constructor(id, text, done) {
    this.id = id;
    this.text = text;
    this.done = done;
  }

  copy() {
    return new Todo(this.id, this.text, this.done);
  }
}
