const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
        case "REMOVE_TODO":
            return state.filter(item => {
                return item.id !== action.id
            })
        default:
            return state
    }
}

export default todos
