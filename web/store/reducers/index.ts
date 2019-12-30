import { Reducer, combineReducers } from "redux"


import todos from "./todo"
import user from "./user"

interface Todo {
    title: string,
    id: string,
}

interface User {
    username: string,
    id: number,
}



export interface CombinedState {
    todos: Todo[],
    user: User,
}



export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }


const reducerMap: CombineReducerMap<CombinedState> = {
    todos: todos,
    user: user
}

const rootReducer = combineReducers<CombinedState>(reducerMap)


export default rootReducer