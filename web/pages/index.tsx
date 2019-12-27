import React from "react"
import { NextPage } from "next"

import AddTodo from "../components/AddTodo"
import Header from "../components/layout/Header"

const Page: NextPage = props => (
    <div>
        <Header />
        <h1>Welcome to next+TypeScript!!</h1>
        <AddTodo />
    </div>

)

export default Page