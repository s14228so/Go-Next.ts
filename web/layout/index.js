import * as React from 'react'
import Head from 'next/head'
import Header from "./Header"
import { Provider } from "../store"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Layout = ({
    children,
    title = 'This is the default title',
}) => (
        <div >
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <style jsx global>{`
      * { 
        font-family:  menlo;
        margin: 0;
        padding: 0;
      }
      .float-btn{
          position: absolute;
          bottom: 10%;
          right: 10%;
      }
    `}</style>
            <div style={{ margin: "30px auto", width: "80%" }}>
                <Provider>
                    {children}
                </Provider>
                <div className="float-btn">
                    <Fab color="primary" aria-label="add" onClick={() => }>
                        <AddIcon />
                    </Fab>
                </div>

            </div>
        </div>
    )

export default Layout
