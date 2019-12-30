
enum ActionType {
    SET_USER = 'SET_UER',
}

export const set_user = user => {
    return {
        type: ActionType.SET_USER,
        payload: user
    };
};
