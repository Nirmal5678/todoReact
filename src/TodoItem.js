import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.
  constructor() {
    super();
    this.state = {
      id: 1,
      text: "My Task",
      completed: true
    };
  }

  render() {
    const { id, text, completed } = this.state;
    return (
      <div className="todo-item">
        {completed ? (
          <input type="checkbox" checked />
        ) : (
          <input type="checkbox" />
        )}

        <p> {text}</p>
        <label></label>
      </div>
    );
  }
}

export default TodoItem;
