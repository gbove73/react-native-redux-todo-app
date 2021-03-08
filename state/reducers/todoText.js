const todoTextReducer = (state = "", action) => {
    switch (action.type) {
        case 'changeTodo':
            return action.text;
        default:
            return state;
    }
}

export default todoTextReducer;