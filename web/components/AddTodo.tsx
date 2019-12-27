import React, { useState } from "react"
import { NextPage } from "next"


const AddTodo = props => {

    // interface ISignUpData {
    //     title: string;
    //     is_deleted: boolean;
    // }

    const [todo, setTodo] = useState("")

    const handleSubmit = () => {
        setTodo()

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>タイトル</label>
            <input type="text" onChange={(e) => setTodo(e.target.value)} />
            <input type="submit"></input>
            <div>{todo}</div>
        </form>
    )

}

export default AddTodo