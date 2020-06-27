const ADD_ACTION = 'ADD-ACTION';
const MINUS_ACION = 'MINUS-ACION'; 


const addAction = () => ({
    type: ADD_ACTION
});

const minusAction = () => ({
    type: MINUS_ACION
});

const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case ADD_ACTION:
            return {
                ...state,
                count: state.count < 10 ? state.count + 1 : state.count
            };
        case MINUS_ACION:
            return {
                ...state,
                count: state.count > 1 ? state.count - 1 : 0
            };
    }

     return state;
}

export {
    addAction,
    minusAction
};

export default reducer;