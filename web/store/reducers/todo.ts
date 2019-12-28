
import * as React from 'react';


enum ActionType {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
}


interface Todo {
    title: string,
    id: number
}


type IState = Todo[]

interface IAction {
    type: ActionType;
    payload: {
        id: number
        title: string
    };
}

// const initialState: IState = [];

const todos: React.Reducer<IState, IAction> = (state, action) => {
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


// const todos = (state = [], action) => {
//     switch (action.type) {
//         case "ADD_TODO":
//             return [...state, action.payload]
//         case "REMOVE_TODO":
//             return state.filter(item => {
//                 return item.id !== action.id
//             })
//         default:
//             return state
//     }
// }

export default todos
