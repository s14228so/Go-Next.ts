import * as React from 'react'
import Head from 'next/head'
import Header from "./Header"
type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
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
    `}</style>
      <div style={{ margin: "30px auto", width: "80%" }}>
        {children}

      </div>
    </div>
  )

export default Layout
