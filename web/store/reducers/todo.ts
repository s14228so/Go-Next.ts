const todo = (state = {}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [{ ...state, }, action.payload]
    }
    return state
}


export default todo