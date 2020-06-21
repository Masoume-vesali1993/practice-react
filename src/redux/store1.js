import { createStore } from 'redux';

const initialState = {
    users: [
        {id:1 , name: 'Masoume' , family: 'vesali'}
    ],
    auth: null
};

const reducer = (state, action) =>{
    return state;
};

const store = createStore(reducer);