import React, { useReducer } from 'react'
import reducer from './reducers'


const initialState = {
    todos: [],
}


const Store = React.createContext(initialState)


// 配列だけいけてる

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

export { Store, Provider }