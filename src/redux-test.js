import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import {addAction, decrementActiion, incrementAction. 
         ADD_ACTION,INC_ACTION,DEC_ACTION
        } from './redux-test-action';

//1- set initial state
const initState = {
    counter: 0
};

//2- create a reducer
const reducer = (state = initState, action) => {
    console.log(action);
    if(action.type === INC_ACTION ){
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type === DEC_ACTION){
        return {
            ...state,
            counter: state.counter -1
        };
    }

    if(action.type === ADD_ACTION){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
}

//3- create a store
const store = createStore(reducer);
console.log(store.getState());


//4- create an action

store.dispatch(incrementAction);
console.log(store.getState());


store.dispatch(decrementActiion);
console.log(store.getState());


store.dispatch(addAction);
console.log(store.getState());