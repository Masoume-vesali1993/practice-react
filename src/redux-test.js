import { createStore } from 'redux';
import * as Acts  from './redux-test-action';

//create store
    //initial state
    const initState = {
        todo: []
    };

    //create reducer
    const reducer = (state = initState, action) => {
        if(action.type === Acts.ADD_ACTION ){
            return {
                ...state,
                todo: [...state.todo, action.item]
            };
        }
        return state;
    }

    //create store
    const store = createStore(reducer);

    //listen to store
    store.subscribe(() => {
        console.log(store.getState());
    });

//dispatch actions
    store.dispatch({type: Acts.ADD_ACTION , item: {title: 'todo 1', body: 'fffff'}});
    store.dispatch({type: Acts.ADD_ACTION , item: {title: 'todo 2', body: 'fffffkk'}});
    store.dispatch({type: Acts.ADD_ACTION , item: {title: 'todo 3', body: 'fffffhh'}});