import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import * as ARTactions from './redux-test-action';

//1- set initial state
const initState = {
    counter: 0
};

//2- create a reducer
const reducer = (state = initState, action) => {
    console.log(action);
    if(action.type === ARTactions.INC_ACTION ){
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type === ARTactions.DEC_ACTION){
        return {
            ...state,
            counter: state.counter -1
        };
    }

    if(action.type === ARTactions.ADD_ACTION){
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

//5- Listen to changes 
store.subscribe(() => {
    console.log(store.getState());
});

//4- create an action

store.dispatch(ARTactions.incrementAction() );


store.dispatch(ARTactions.decrementActiion() );


store.dispatch(ARTactions.addAction(2) );


store.dispatch(ARTactions.addAction(5) );

