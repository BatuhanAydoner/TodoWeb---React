import React, { Component } from 'react'

class TaskItem extends Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    taskCompleted(e) {
        let container = e.target.parentElement;
        container.classList.toggle('task-completed');
    }

    deleteTask(e) {
        let container = e.target.parentElement;
        container.classList.toggle("anim");

        container.addEventListener('transitionend', (e) => {
            let task = container.children[0].textContent;
        this.props.deleteTask(task);
        });
    }
    render() {
        return (
            <div className="task-item">
                <li className="task-desc">{this.props.task}</li>
                <button className="task-btn task-completed" onClick={this.taskCompleted}><i className="far fa-check-square"></i></button>
                <button className="task-btn task-delete" onClick={this.deleteTask} ><i className="far fa-trash-alt"></i></button>
            </div>
        );
    }
}

export default TaskItem