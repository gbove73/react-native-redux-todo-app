const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case 'addTodo':
            return state.concat({disabled: false, text: action.text, id: Math.random().toString()});
        case 'delTodo':
            return state.filter((item) => item.id !== action.id);
        case 'sortTodo':
            return action.data.data;
        case 'toggleTodo':
            return state.map((item) => item.id == action.id ? { disabled: !item.disabled, text: item.text, id: item.id } : item);
        case 'delDisabledTodo':
            return state.filter((item) => !item.disabled);
                
        default:
            return state;
    }
}

export default todoListReducer;