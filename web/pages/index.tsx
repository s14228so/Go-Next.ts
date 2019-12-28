import React from 'react'
import Head from 'next/head'
import AddTodo from "../components/AddTodo"
import { Provider } from "../store"
import TodoList from '../components/TodoList'
import Layout from "../layout"
import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string | undefined }> = ({ userAgent }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Layout>
      <div className="wrapper">
        <AddTodo />
        <TodoList />
      </div>

    </Layout>


    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .wrapper {
        width: 50%;
        display: flex;
        justify-content: space-around;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home
