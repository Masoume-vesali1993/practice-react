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

    if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter -1
        };
    }

    if(action.type === 'َADD'){
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
const incrementAction = {type: 'INCREMENT'};
store.dispatch(incrementAction);
console.log(store.getState());

const decrementActiion = {type:'DECREMENT'};
store.dispatch(decrementActiion);
console.log(store.getState());

const addAction = {type: 'ADD', value: 10};
store.dispatch(addAction);
console.log(store.getState());