import React, { Component, useEffect, useState } from "react";
import Header from "./Header";
import Action from "./Action";
import Tasks from "./Tasks";

const TodoWeb = () => {
  const [items, setItems] = useState([]);

  const addTask = (task) => {
    addTaskToLocalStorage(task);

    setItems(items.concat(task));
  };

  const deleteTask = (task) => {
    this.deleteTaskFromLocalStorage(task);
  };

  // Return local storage items as an array.
  const localStorageToArray = () => {
    let arr;

    if (localStorage.getItem("todoweb") === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("todoweb"));
    }

    return arr;
  };

  // Get task items from local storage.
  const getTasksFromLocalStorage = (params) => {
    let arr = localStorageToArray();
    setItems(arr);
  };

  // Save a task to local storage.
  const addTaskToLocalStorage = (task) => {
    let arr = localStorageToArray();

    arr.push(task);

    localStorage.setItem("todoweb", JSON.stringify(arr));
  };

  // Delete a task from local storage.
  const deleteTaskFromLocalStorage = (task) => {
    let arr = items;

    let indexOfTask = arr.indexOf(task);

    let item = arr.splice(indexOfTask, 1);
    console.log(arr);
    localStorage.setItem("todoweb", JSON.stringify(arr));

    setItems(arr);
  };

  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);

  return (
    <div>
      <Header title={"TodoWeb"} />
      <Action addTask={addTask} />
      <Tasks
        tasks={items}
        deleteTask={deleteTaskFromLocalStorage}
      />
    </div>
  );
};

export default TodoWeb;
