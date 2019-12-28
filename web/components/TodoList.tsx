import React, { useState, useContext, useEffect } from "react";

import { Store } from '../store/context';


import { remove } from "../actions"

const TodoList = () => {
    const { state, dispatch } = useContext(Store)
    return (
        <div>
            <h3>TodoList</h3>
            {state.map((todo, i) => {
                return <div key={i}>
                    {todo.title}
                    <button onClick={() => dispatch(remove(todo.id))}>削除</button>
                </div>
                return
            })}
        </div >
    )
};

export default TodoList;