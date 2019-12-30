
import * as React from 'react';
import User from "../../types/user"
import Todo from "../../types/todo"

import { ActionType } from "../../actions"


type TState = Todo[]

interface IAction {
    type: ActionType;
    payload: Todo
}
const initialState: Todo[] = []

const todos: React.Reducer<TState, IAction> = (state = initialState, action) => {
    console.log("todosのreducer")
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [...state, action.payload]
        case ActionType.REMOVE_TODO:
            return state.filter(item => {
                return item.id !== action.payload.id
            })
        default:
            return state
    }
}

export default todos
