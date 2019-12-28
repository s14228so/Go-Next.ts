import * as React from 'react'
import Layout from '../components/layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
    // const title = {
    //     textAlign: "center"

    // }
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <div style={{ textAlign: "center" }} >
                <h2 >This is Todo App with Next.js x Golang</h2>
            </div>

        </Layout >
    )
}

export default IndexPage
