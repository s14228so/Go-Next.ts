import * as React from "react"
const { createContext } = React

interface Todo {
    title: string,
    id: string,
}

type IState = Todo[]

export const initialState: IState = [];


interface StoreWithAction {
    state: IState;
    dispatch: React.Dispatch<IAction>;
}
enum ActionType {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
}

interface IAction {
    type: ActionType;
    payload: Todo | string
}

export const Store = createContext<StoreWithAction>({
    state: initialState,
    dispatch: () => { },
});