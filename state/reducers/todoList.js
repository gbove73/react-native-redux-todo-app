const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case 'addTodo':
            return state.concat({text: action.text, id: Math.random().toString()});
        case 'delTodo':
            return state.filter((item) => item.id !== action.id);
        case 'sortTodo':
            return action.data.data;
        default:
            return state;
    }
}

export default todoListReducer;