import React, { Component } from "react";

class Action extends Component {
  render() {
    return (
        <div>
            <form action="#" className="task-form">
                <input type="text" className="form-item input-task" placeholder="Enter a task"/>
                <button type="submit" className="form-item btn-task-add"><i className="far fa-plus-square"></i></button>
            </form>
        </div>
    );
  }
}

export default Action;
