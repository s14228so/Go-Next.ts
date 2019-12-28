

import * as React from 'react'

const { useReducer, createContext } = React
import { Store, initialState } from './context';

import todos from './reducers/todo'


export const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(todos, initialState);

    return (
        <Store.Provider value={{ state, dispatch }
        }>
            {children}
        </Store.Provider>
    );
};


