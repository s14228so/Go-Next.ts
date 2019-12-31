import React from 'react'
import Head from 'next/head'
import Layout from "../layout"
import { NextPage } from 'next';;
const { useState, useEffect, } = React
import { authCheck } from "../plugins/authCheck";
import { set_user } from "../actions/user"
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import firebase from "../plugins/firebase"
import { useRouter } from 'next/router'


const Account: NextPage<{ userAgent: string | undefined }> = ({ userAgent }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const storeTodos = useSelector(state => state.todos)
    const user = useSelector(state => state.user)

    const logOut = () => {
        firebase.auth().signOut().then(() => {
            router.push("/login")
            dispatch(set_user({}))
        })
            .catch((error) => {
                console.log(`ログアウト時にエラーが発生しました (${error})`);
            });
    }

    useEffect(() => {
        const user = authCheck().then(user => {
            dispatch(set_user(user))
        })
    }, [])

    return (
        <div>
            <Head>
                <title>Account</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <Layout>

                <h3 className="mb-2">アカウント</h3>
                <Avatar alt={user.username} src="/static/images/avatar/1.jpg" />
                <p>email: {user.email}</p>
                <p>ユーザー名: {user.username}</p>
                <button onClick={logOut}>ログアウト</button>

            </Layout>


            <style jsx>{`
      .wrapper {
        width: 50%;
      }
      .mt-5 {
        margin-top: 50px;
    }
      .mb-2 {
          margin-bottom: 20px;
      }
    `}</style>
        </div>
    )
}

Account.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Account
