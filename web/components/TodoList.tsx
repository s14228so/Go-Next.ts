import React, { useState, useContext, useEffect } from "react";

import { Store } from '../store/context';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { remove } from "../actions"

const TodoList = () => {
    const { state, dispatch } = useContext(Store)
    return (
        <div>
            {state.map((todo, i) => {
                return <div key={i}>
                    {todo.title}
                    <IconButton aria-label="delete" onClick={() => dispatch(remove(todo))}>
                        <DeleteIcon />
                    </IconButton>
                </div>
                return
            })}
        </div >
    )
};

export default TodoList;