import User from "../types/user";
import { ActionType } from "./"

export const set_user = (user: User) => {
    console.log({ user })
    return {
        type: ActionType.SET_USER,
        payload: user
    };
};
