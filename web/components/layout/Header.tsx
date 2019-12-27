import * as React from 'react'


import Link from 'next/link'


type Props = {
    title?: string
}
const Header: React.FunctionComponent<Props> = () => (
    <header>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
                <a>About</a>
            </Link>{' '}
            |{' '}
            <Link href="/users">
                <a>Users List</a>
            </Link>
        </nav>
    </header>
)

export default Header


