import React from "react"
import { NextPage } from "next"

import AddTodo from "../components/AddTodo"
import Header from "../components/layout/Header"
import { Provider, Store } from '../store'


const Page: NextPage = props => (

    <div>
        {/* <Provider> */}
        <Header />
        <h1>Welcome to next+TypeScript!!</h1>
        <AddTodo />
        {/* </Provider> */}
    </div>

)

export default Page


