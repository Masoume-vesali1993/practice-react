
import * as Acts from './reducer2-actions';

const initialState = {
    products: [
        {id:1 , title: 'product1' , price: 25000 },
        {id:2 , title: 'product2' , price: 45000 },
    ]
};

const reducer = (state = initialState , action) =>{
    console.log('reducer 2', action);
    switch(action.type){
        case Acts.ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.product]
            }
    }
    return state;
};

export default reducer;