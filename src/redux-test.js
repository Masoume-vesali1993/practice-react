import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
//1- set initial state
const initState = {
    counter: 0
};

//2- create a reducer
const reducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'INCREMENT' ){
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    return state;
}

//3- create a store
const store = createStore(reducer);
console.log(store.getState());


//4- create an action
const incrementAction = {type: 'INCREMENT'};
store.dispatch(incrementAction);

//get store current store
console.log(store.getState());