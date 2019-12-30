import * as React from "react"
import { userInfo } from "os";
const { createContext } = React
import { Reducer, combineReducers } from "redux"

import User from "../../types/user"
import Todo from "../../types/todo"




interface State {
    todos?: Todo[],
    user?: User
}

type IState = State

export const initialState: {
    todos: Todo[];
    user?: User;
} = { todos: [], }

enum ActionType {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    SET_USER = "SET_USER"
}


console.log(ActionType)
interface IAction {
    type: ActionType;
    payload: Todo | User
}

interface StoreWithAction {
    state: IState;
    dispatch: React.Dispatch<IAction>;
}


export const Store = createContext<StoreWithAction>({
    state: initialState,
    dispatch: () => { },
});