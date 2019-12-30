import Todo from "../types/todo"
export enum ActionType {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    SET_USER = "SET_USER"
}

export const add = (todo: Todo) => {
    console.log({ todo })
    return {
        type: ActionType.ADD_TODO,
        payload: todo
    };
};


// export const init = data => {
//     return {
//         type: ActionType.INIT,
//         payload: data
//     };
// };

export const remove = (todo: Todo) => {
    return {
        type: ActionType.REMOVE_TODO,
        payload: todo
    };
};

