import * as React from "react"
import { userInfo } from "os";
const { createContext } = React
import { Reducer, combineReducers } from "redux"



interface Todo {
    title: string,
    id: string,
}

interface User {
    username: string,
    id: number,
}


interface State {
    todos?: Todo[],
    user?: User
}

type IState = State

export const initialState: {
    todos: Todo[];
    user?: User;
} = { todos: [], }

interface IAction {
    type: ActionType;
    payload: Todo | User
}

interface StoreWithAction {
    state: IState;
    dispatch: React.Dispatch<IAction>;
}
enum ActionType {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    SET_USER = "SET_USER"
}



export const Store = createContext<StoreWithAction>({
    state: initialState,
    dispatch: () => { },
});