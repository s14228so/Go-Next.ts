

import rootReducer from './reducers'
import { createStore } from 'redux';
export default initialState => createStore(rootReducer, initialState)

// export const store = createStore(reducers)
// export const Provider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducers, initialState);

//     return (
//         <Store.Provider value={{ state, dispatch }
//         }>
//             {children}
//         </Store.Provider>
//     );
// };



// export const Provider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducers, initialState);

//     return (
//         <Store.Provider value={{ state, dispatch }
//         }>
//             {children}
//         </Store.Provider>
//     );
// };



