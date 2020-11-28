import React, { Component } from 'react'
import Header from './Header';
import Action from './Action';
import Tasks from './Tasks';

export class TodoWeb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ["1", "2", "3"]
        }
    }
    render() {
        return (
            <div>
                <Header title={"TodoWeb"} />
                <Action />
                <Tasks tasks={this.state.items} />
            </div>
        );
    }
}

export default TodoWeb
