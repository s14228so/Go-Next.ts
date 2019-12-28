import React from 'react'
import Head from 'next/head'
import AddTodo from "../components/AddTodo"
import { Provider } from "../store"
import TodoList from '../components/TodoList'
import Layout from "../layout"
import { NextPage } from 'next';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const { useState } = React

const Home: NextPage<{ userAgent: string | undefined }> = ({ userAgent }) => {

  const [dialog, setDialog] = useState(false)

  const handleClick = () => {
    setDialog(!dialog)
  }

  const style = {
    none: {
      display: "none"
    },
    block: {
      display: "block"
    }
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Layout>
        <div className="wrapper">
          <div style={dialog ? style.block : style.none}>
            <AddTodo open={dialog} handleClose={handleClick} />
          </div>
          <TodoList />
        </div>
        <div className="float-btn">
          <Fab color="primary" aria-label="add" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </div>

      </Layout>


      <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .wrapper {
        width: 50%;
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
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Home
