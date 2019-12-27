import * as React from "react";
import { observer } from "mobx-react"
import { Todo } from "../types/todo"

@observer
export class TodoView extends React.Component<{ todo: Todo }> {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={this.onRename}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={this.onToggleCompleted}
                />
                {todo.task}
                { /* todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        */ }
            </li>
        );
    }

    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }

    onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task name', todo.task) || todo.task;
    }
}

// <RenderCounter />
