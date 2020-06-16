export const ADD_ACTION = 'ADD';
export const INC_ACTION = 'INCREMENT';
export const DEC_ACTION = 'DECREMENT';


export const incrementAction = () => ({type: INC_ACTION});

export const decrementActiion = () => ({type:DEC_ACTION});

export const addAction = () => ({type: ADD_ACTION , value: 10});