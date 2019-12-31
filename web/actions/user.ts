import User from "../types/user";
import { ActionType } from "./"

export const set_user = (user: User) => {
    return {
        type: ActionType.SET_USER,
        payload: user
    };
};
