
import * as Acts from './store1-actions';

const initialState = {
    users: [
        {id:1 , name: 'Masoume' , family: 'vesali'}
    ],
    auth: null
};

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case Acts.ADD_USER:
            return{
                ...state,
                users: [...state.users, action.user]
            }
    }
    return state;
};

export default reducer;