import {combineReducers} from 'redux';
import todoListReducer from './todoList';
import todoTextReducer from './todoText';

const rootReducer = combineReducers({
    todoList: todoListReducer,
    todoText: todoTextReducer,
});

export default rootReducer;