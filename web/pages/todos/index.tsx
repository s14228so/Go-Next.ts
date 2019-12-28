import { NextPage } from 'next'
import Layout from '../../components/layout'
import List from '../../components/List'
import { Todo } from '../../interfaces'
import { sampleFetchWrapper } from '../../utils/sample-api'
import AddTodo from "../../components/AddTodo"
import React, { useContext } from "react"

import { Store } from "../../store";



type Props = {
    items: Todo[]
    pathname: string
}




const WithInitialProps: NextPage<Props> = ({ items }) => {

    return (
        < Layout title="Todos List" >
            <AddTodo />
            <h1>Todos List</h1>
            <List items={items} />
        </Layout >

    )
}




WithInitialProps.getInitialProps = async ({ pathname }) => {

    const items: Todo[] = await sampleFetchWrapper(
        'http://localhost:8080/todos'
    )

    return { items, pathname }
}

export default WithInitialProps
