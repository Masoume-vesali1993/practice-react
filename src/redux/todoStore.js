import { createStore } from 'redux';
import reducer, {addTodo, removeTodo} from './reducers/todoReducer';

const store = createStore(reducer);