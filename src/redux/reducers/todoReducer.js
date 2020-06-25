const ADD_TODO_ACTION = 'ADD';
const REMOVE_TODO_ACTION = 'REMOVE_TODO';

const addTodo = (todo) => ({
    'type': ADD_TODO_ACTION,
    todo
});

const removeTodo = (id) => ({
    'type' : REMOVE_TODO_ACTION,
    id
});



const initialState = {
    items: [
        {id:1, title: 'todo 1', done: false},
        {id:2, title: 'todo 2', done: false},
    ]
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_ACTION:
            console.log('add todo action', action.todo);
            break;
            
        case REMOVE_TODO_ACTION:
            console.log('remove todo action', action.id);
            break;
    }

    return state;
}

export {
    addTodo,
    removeTodo
};

export default todoReducer;