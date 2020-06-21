import { createStore } from 'redux';
import * as Store1Actions from './store1-actions';

const initialState = {
    users: [
        {id:1 , name: 'Masoume' , family: 'vesali'}
    ],
    auth: null
};

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case Store1Actions.ADD_USER:
            return{
                ...state,
                users: [...state.users, action.user]
            }
    }
    return state;
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log('[store subscriber]' , store.getState());
})

store.dispatch(Store1Actions.addUser({id: 2, name: 'parham', family: 'vesali'}));