

import * as React from 'react'

const { useReducer, createContext } = React
import { Store, initialState } from './context';

import reducers from './reducers'

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, initialState);

    return (
        <Store.Provider value={{ state, dispatch }
        }>
            {children}
        </Store.Provider>
    );
};


