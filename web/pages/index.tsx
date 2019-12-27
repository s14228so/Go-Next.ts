import React from "react"
import { NextPage } from "next"

import { TodoList } from "../components/TodoList"
import Header from "../components/layout/Header"
import { ObservableTodoStore } from "../store";


const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo("read MobX tutorial");


const Page: NextPage = props => (

    <div>
        <Header />
        <TodoList store={observableTodoStore} />,
        {/* <Provider> */}
        {/* </Provider> */}
    </div>

)

export default Page


