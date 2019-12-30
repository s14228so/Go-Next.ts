import React, { useState, useContext, useEffect } from "react";

import { Store } from '../store/context';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { remove } from "../actions"

const TodoList = ({ todos }) => {
    const { state, dispatch } = useContext(Store)
    console.log(state)

    return (
        <div>
            {state.todos.map((todo, i) => {
                return <div key={i}>
                    {todo.title}
                    <IconButton aria-label="delete" onClick={
                        () => {
                            if (confirm("削除しますか？")) dispatch(remove(todo));
                        }
                    }>
                        <DeleteIcon />
                    </IconButton>
                </div>
            })}
        </div >
    )
};

export default TodoList;