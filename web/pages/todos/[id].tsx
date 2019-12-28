import * as React from 'react'
import { NextPageContext } from 'next'

import { Todo } from '../../interfaces'
import Layout from '../../components/layout'
import ListDetail from '../../components/ListDetail'
import { sampleFetchWrapper } from '../../utils/sample-api'

type Props = {
    item?: Todo
    errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
    static getInitialProps = async ({ query }: NextPageContext) => {
        try {
            const { id } = query
            const item = await sampleFetchWrapper(
                `http://localhost:8080/todos/${Array.isArray(id) ? id[0] : id}`
            )
            return { item }
        } catch (err) {
            return { errors: err.message }
        }
    }

    render() {
        const { item, errors } = this.props

        if (errors) {
            return (
                <Layout title={`Error | Next.js + TypeScript Example`}>
                    <p>
                        <span style={{ color: 'red' }}>Error:</span> {errors}
                    </p>
                </Layout>
            )
        }

        return (
            <Layout
                title={`${
                    item ? item.title : 'Todo Detail'
                    } `}
            >
                {item && <ListDetail item={item} />}
            </Layout>
        )
    }
}

export default InitialPropsDetail
