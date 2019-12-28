
enum ActionType {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
}

export const add = todo => {
    return {
        type: ActionType.ADD_TODO,
        payload: todo
    };
};

export const remove = todo => {
    return {
        type: ActionType.REMOVE_TODO,
        payload: todo
    };
};

