export const add = title => {
    return {
        type: "ADD_TODO",
        title
    };
};

export const remove = id => {
    return {
        type: "REMOVE_TODO",
        id
    };
};

export const clear = () => {
    return {
        type: "CLEAR_ALL"
    };
};

export const setTodos = todos => ({
    type: "SET_TODOS",
    todos
});