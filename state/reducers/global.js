const globalReducer = (state = {locked: false}, action) => {
    switch (action.type) {
        case 'toggleLock':
            return {locked: !state.locked};
        default:
            return state;
    }
}

export default globalReducer;