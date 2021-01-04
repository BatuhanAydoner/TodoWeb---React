import React, { Component } from "react";

const Action = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    let item = e.target.children[0];
    props.addTask(item.value);
    item.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="task-form">
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
};

export default Action;
