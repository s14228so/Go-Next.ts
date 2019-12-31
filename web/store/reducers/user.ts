
import * as React from 'react';

import { ActionType } from "../../actions"

import User from "../../types/user"

type UState = User

interface UAction {
    type: ActionType;
    payload: User
}

const initialState: UState = { username: "タオル", email: "ok" }

const user: React.Reducer<UState, UAction> = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SET_USER:
            return { ...action.payload }
        default:
            return state
    }
}

export default user
