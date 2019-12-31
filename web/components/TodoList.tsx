import React, { useState, useContext, useEffect } from "react";

import { Store } from '../store/context';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { remove } from "../actions"
import { useDispatch } from 'react-redux'

const TodoList = ({ todos }) => {
    const dispatch = useDispatch()
    return (
        <div>
            {todos.map((todo, i) => {
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