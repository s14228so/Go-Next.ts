
import * as React from 'react';


enum ActionType {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
}


interface Todo {
    title: string,
    id: string
}


type TState = Todo[]

interface IAction {
    type: ActionType;
    payload: Todo
}

const todos: React.Reducer<TState, IAction> = (state, action) => {
    console.log({ action })
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
