import * as React from "react";
import { Component } from "react"
import { observer } from "mobx-react"
import { ObservableTodoStore } from "../store"
import { TodoView } from "./TodoView";

@observer
export class TodoList extends Component<{ store: ObservableTodoStore }> {
    render() {
        const store = this.props.store;
        return (
            <div>
                {store.report}
                <ul>
                    {store.todos.map(
                        (todo, idx) => <TodoView todo={todo} key={idx} />
                    )}
                </ul>
                {store.pendingRequests > 0 ? <p>Loading...</p> : null}
                <button onClick={this.onNewTodo}>New Todo</button>
                <small> (double-click a todo to edit)</small>
            </div>
        );
    }

    onNewTodo = () => {
        this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz') as string);
    }
}