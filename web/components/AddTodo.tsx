import React, { useState } from 'react'
// import { Todo } from '../interfaces'

import axios from "axios"

const AddTodo: React.FunctionComponent = () => {

    const [title, setTitle] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title) return
        setTitle("")
        const { data } = await axios.post("http://localhost:8080/todos", {
            user_id: 1,
            title
        })
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="タイトル" onChange={e => setTitle(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default AddTodo
