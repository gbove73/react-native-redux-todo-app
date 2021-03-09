import {combineReducers} from 'redux';
import globalReducer from './global';
import todoListReducer from './todoList';
import todoTextReducer from './todoText';

const rootReducer = combineReducers({
    todoList: todoListReducer,
    todoText: todoTextReducer,
    global: globalReducer,
});

export default rootReducer;