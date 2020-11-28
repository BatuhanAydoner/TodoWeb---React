import React, { Component } from "react";

class Action extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

  onSubmit(e) {
      e.preventDefault();
      let item = e.target.children[0];
      this.props.addTask(item.value);
      item.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="task-form">
          <input
            type="text"
            className="form-item input-task"
            placeholder="Enter a task"
          />
          <button type="submit" className="form-item btn-task-add">
            <i className="far fa-plus-square"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Action;
