import React, { Component } from 'react'

class TaskItem extends Component {
    render() {
        return (
            <div className="task-item">
                <li className="task-desc">{this.props.task}</li>
                <button className="task-btn task-completed"><i class="far fa-check-square"></i></button>
                <button className="task-btn task-delete"><i class="far fa-trash-alt"></i></button>
            </div>
        )
    }
}

export default TaskItem