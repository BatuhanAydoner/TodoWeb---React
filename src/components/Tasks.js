import React, { Component } from "react";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  return (
    <div className="task-container">
      <ul className="task-list">
        {props.tasks.map((task, index) => {
          return (
            <TaskItem
              key={task}
              task={task}
              deleteTask={props.deleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
