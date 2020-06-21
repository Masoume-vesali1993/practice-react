import { createStore, combineReducers } from 'redux';
import reducer1 from './store1';
import reducer2 from './reducer2';

import * as Acts1 from './store1-actions';
import * as Acts2 from './reducer2-actions';

const reducer = combineReducers();
const store = createStore(reducer1);

store.subscribe(() => {
    console.log('[store 1 subscriber]' , store.getState());
})

store.dispatch(Acts1.addUser({id: 2, name: 'parham', family: 'vesali'}));


// const store = createStore(reducer);

// store.subscribe(() => {
//     console.log('[store 1 subscriber]' , store.getState());
// })

// store.dispatch(Acts.addUser({id: 2, name: 'parham', family: 'vesali'}));