import { createStore } from 'redux';
//1- set initial state
const initState = {
    counter: 0
};

//2- create a reducer
const reducer = (state = initState, action) => {
    return state;
}

//3- create a store
const store = createStore(reducer);

//4- create an action
const incrementAction = {type: 'INCREMENT'};
store.dispatch(incrementAction);

//get store current store
console.log(store.getState());