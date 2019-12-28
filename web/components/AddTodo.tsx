import React, { useState, useContext, useEffect } from "react";
import { add } from "../actions";
import { Store } from '../store/context';
import uuid from 'uuid';


const AddTodo = () => {
    const [title, setTitle] = useState("");
    const { state, dispatch } = useContext(Store);
    console.log(state)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (title === "") {
            return;
        }

        dispatch(add({ title, id: uuid.v4() }));
        setTitle("");
    };



    const status = state.length === 0;
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