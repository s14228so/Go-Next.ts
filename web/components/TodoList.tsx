import React from "react";

const TodoList = ({ todos, remove }) => {
    const items = todos.map(todo => {
        return <div>{todo.title}</div>;
    });
    return <div>{items}</div>;
};

export default TodoList;