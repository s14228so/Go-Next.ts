import React, { useState, useContext, useEffect } from "react";
import { add } from "../../actions";
import { Store } from '../../store/context';
import uuid from 'uuid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Button from '@material-ui/core/Button';
const AddTodo = () => {
    const [title, setTitle] = useState("");
    const { state, dispatch } = useContext(Store);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title === "") {
            return;
        }

        dispatch(add({ title, id: uuid.v4() }));
        setTitle("");
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="component-simple">Todo</InputLabel>
                    <Input id="component-simple" value={title} onChange={handleChange} />
                </FormControl>
            </form>
            <style jsx>{`

    `}</style>
        </div >
    );
};

export default AddTodo;