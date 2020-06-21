import { createStore } from 'redux';
import * as Acts from './reducer2-actions';

const initialState = {
    products: [
        {id:1 , title: 'product1' , price: 25000 },
        {id:2 , title: 'product2' , price: 45000 },
    ]
};

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case Acts.ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.product]
            }
    }
    return state;
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log('[store 2 subscriber]' , store.getState());
})

store.dispatch(Acts.addProduct({id: 2, title: 'product 2', price: 15000 }));