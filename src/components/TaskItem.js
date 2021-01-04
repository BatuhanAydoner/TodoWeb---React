import React, { Component } from "react";

const TaskItem = (props) => {
  const taskCompleted = (e) => {
    let container = e.target.parentElement;
    container.classList.toggle("task-completed");
  };

  const deleteTask = (e) => {
    let container = e.target.parentElement;
    container.classList.toggle("anim");

    container.addEventListener("transitionend", (e) => {
      let task = container.children[0].textContent;
      props.deleteTask(task);
    });
  };

  return (
    <div className="task-item">
      <li className="task-desc">{props.task}</li>
      <button className="task-btn task-completed" onClick={taskCompleted}>
        <i className="far fa-check-square"></i>
      </button>
      <button className="task-btn task-delete" onClick={deleteTask}>
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default TaskItem;
