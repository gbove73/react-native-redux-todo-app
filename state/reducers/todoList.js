const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case 'addTodo':
            return [{disabled: false, text: action.text, id: Math.random().toString()}].concat(state);
        case 'delTodo':
            return state.filter((item) => item.id !== action.id);
        case 'sortTodo':
            return action.data.data;
        case 'toggleTodo':
            return state.map((item) => item.id == action.id ? { disabled: !item.disabled, text: item.text, id: item.id } : item);
        case 'delDisabledTodo':
            return state.filter((item) => !item.disabled);
        case 'sortActiveFirst':
            return state.sort((a, b) => {
                if (a.disabled && !b.disabled) return 1;
                if (a.disabled === b.disabled) return 0;
                return -1;
            }).filter((a) => true); // TODO: capire perche' non triggera la modifica senza filter
        default:
            return state;
    }
}

export default todoListReducer;