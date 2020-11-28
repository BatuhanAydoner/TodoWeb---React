import React, { Component } from "react";
import Header from "./Header";
import Action from "./Action";
import Tasks from "./Tasks";

export class TodoWeb extends Component {
  constructor(props) {
    super(props);
    this.getTasksFromLocalStorage = this.getTasksFromLocalStorage.bind(this);
    this.deleteTaskFromLocalStorage = this.deleteTaskFromLocalStorage.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getTasksFromLocalStorage();
  }

  render() {
    return (
      <div>
        <Header title={"TodoWeb"} />
        <Action addTask={this.addTask} />
        <Tasks
          tasks={this.state.items}
          deleteTask={this.deleteTaskFromLocalStorage}
        />
      </div>
    );
  }

  addTask(task) {
    this.addTaskToLocalStorage(task);

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(task),
      };
    });
  }

  deleteTask(task) {
      this.deleteTaskFromLocalStorage(task);
  }

  // Return local storage items as an array.
  localStorageToArray() {
    let arr;

    if (localStorage.getItem("todoweb") === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("todoweb"));
    }

    return arr;
  }

  // Get task items from local storage.
  getTasksFromLocalStorage(params) {
    let arr = this.localStorageToArray();
    this.setState({ items: arr });
  }

  // Save a task to local storage.
  addTaskToLocalStorage(task) {
    let arr = this.localStorageToArray();

    arr.push(task);

    localStorage.setItem("todoweb", JSON.stringify(arr));
  }

  // Delete a task from local storage.
  deleteTaskFromLocalStorage(task) {
    let arr = this.state.items;

    let indexOfTask = arr.indexOf(task);

    let item = arr.splice(indexOfTask, 1);
    localStorage.setItem("todoweb", JSON.stringify(arr));

    this.setState({
      items: arr,
    });
  }
}

export default TodoWeb;
