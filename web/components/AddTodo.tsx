import React, { useState, useContext } from 'react'
// import { Todo } from '../interfaces'
import { Store } from "../store";

import axios from "axios"
import { add } from "../actions";

const AddTodo: React.FunctionComponent = () => {

    const [title, setTitle] = useState("")
    const { state, dispatch } = useContext(Store);
    console.log({ state })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title) return
        const { data } = await axios.post("http://localhost:8080/todos", {
            user_id: 1,
            title
        })

        setTitle("")
        dispatch(add(title));

        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="タイトル" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default AddTodo
