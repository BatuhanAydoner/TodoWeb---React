import React, { Component } from 'react'
import TaskItem from './TaskItem';

class Tasks extends Component {
    render() {
        return (
            <div className="task-container">
                <ul className="task-list">
                    {
                        this.props.tasks.map((task, index) => {
                            return <TaskItem key={index} task={task} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Tasks
