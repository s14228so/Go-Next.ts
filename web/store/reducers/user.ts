
import * as React from 'react';


enum ActionType {
    SET_USER = 'SET_USER',
}



interface User {
    username: string,
    id: number,
}


type UState = User

interface UAction {
    type: ActionType;
    payload: User
}

const user: React.Reducer<UState, UAction> = (state, action) => {
    debugger
    switch (action.type) {
        case ActionType.SET_USER:
            return { ...state }
        default:
            return state
    }
}

export default user
