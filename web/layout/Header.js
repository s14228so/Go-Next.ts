import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        cursor: "pointer"
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const router = useRouter()
    const authUser = useSelector(state => state.user)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} onClick={() => router.push("/")}>
                        Todo App
                    </Typography>
                    {authUser ?
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => router.push("/account")}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton> :
                        <Button color="inherit" onClick={() => router.push("/login")}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}