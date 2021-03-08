const redux = require('redux');

const createStore = redux.createStore;

// REDUCER

const initialState = {
    counter: 1,
}

// ACTION
const increment = () => {
    return {
        type: "INC", 
    }
}

const add = (value) => {
    return {
        type: "SUM",
        value: value 
    }
}

const reducer = (state = initialState, action) => {
    if (action.type === "INC") {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === "SUM") {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

// STORE
const store = createStore(reducer);
console.warn(store.getState());

// SUBSCRIPTION
store.subscribe(() => {
    console.warn("from subscription ", store.getState());
});

// DISPATCHER ACTION
store.dispatch(increment());
store.dispatch(add(11));

console.log(store.getState());

