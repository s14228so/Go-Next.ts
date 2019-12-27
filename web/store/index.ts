import React, { useReducer } from 'react'
import reducer from './reducers'





const initialState = {
    bus: {
        nextBuses: [],
        fromTo: {
        }
    },
    todos: [],
    count: 0,
    timer: {
        date: null,
        ms: null
    },
    data: {
        timeTable: null,
        holidays: []
    },
}

// 配列だけいけてる

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={ { state, dispatch } }> { children } < /Store.Provider>
}

export { Store, Provider }