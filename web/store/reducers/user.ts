
import * as React from 'react';

import { ActionType } from "../../actions"

import User from "../../types/user"

type UState = User

interface UAction {
    type: ActionType;
    payload: User
}

const initialState: UState = {}

const user: React.Reducer<UState, UAction> = (state = initialState, action) => {
    console.log("rdeucerきたy")
    switch (action.type) {
        case ActionType.SET_USER:
            return { ...action.payload }
        default:
            return state
    }
}

export default user
