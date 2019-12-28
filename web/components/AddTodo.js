import React, { useState, useContext, useEffect } from "react";
import { add, clear } from "../actions";

import { Store } from "../store";
import uuid from 'uuid';


const AddTodo = () => {
    const [title, setTitle] = useState("");
    const { state, dispatch } = useContext(Store);
    console.log(state)

    const handleChange = e => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (title === "") {
            return;
        }
        dispatch(add({ title, id: uuid.v4() }));
        setTitle("");
    };


    const deleteAllEvent = e => {
        e.preventDefault();
        dispatch(clear());
    };
    const status = state.todos.length === 0;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div >
    );
};

export default AddTodo;