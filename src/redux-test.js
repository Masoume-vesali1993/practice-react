import { createStore } from 'redux';
//1- set initial state
const initState = {
    name: 'Masoume'
};

//2- create a reducer
const reducer = (state = initState, action) => {
    return state;
}

//3- create a store
const store = createStore(reducer);

//get store current store
console.log(store.getState());