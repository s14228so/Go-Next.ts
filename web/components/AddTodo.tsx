import React, { useState, useContext, useEffect } from "react";
import { add } from "../actions";
import { Store } from '../store/context';
import uuid from 'uuid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
const AddTodo = ({ open, handleClose }) => {
    const [title, setTitle] = useState("");
    const { state, dispatch } = useContext(Store);
    console.log(state)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        if (title === "") {
            return;
        }

        dispatch(add({ title, id: uuid.v4() }));
        setTitle("");
        handleClose()
    };


    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
          </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Todo"
                    fullWidth
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
                <Button onClick={handleSubmit} color="primary">
                    Subscribe
          </Button>
            </DialogActions>
        </Dialog>
        //     <div>
        //         <form onSubmit={handleSubmit}>
        //             <FormControl>
        //                 <InputLabel htmlFor="component-simple">Todo</InputLabel>
        //                 <Input id="component-simple" value={title} onChange={handleChange} />
        //             </FormControl>
        //         </form>
        //         <style jsx>{`

        // `}</style>
        //     </div >
    );
};

export default AddTodo;