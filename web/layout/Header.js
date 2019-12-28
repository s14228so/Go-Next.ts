import * as React from 'react'


import Link from 'next/link'

const Header = () => {


    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Todo",
            path: "/todos"
        },
    ];

    const header = {
        width: "100vw",
        background: "lightGray",
        lineHeight: "70px"
    };

    const items = links.map((item, i) => {
        return (
            <Link key={i} href={item.path}>
                {item.title}
            </Link>
        );
    });
    return (
        <header style={header}>
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    width: "25vw",
                    justifyContent: "space-around"
                }}
            >
                {items}
            </ul>
        </header>
    );
};

export default Header;
