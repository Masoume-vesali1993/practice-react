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

        if(action.type === Acts.REMOVE_ACTION){
            return {
                ...state,
                todo: state.todo.filter(item => item.title !== action.title)
            }
        }
        return state;
    }

    //create store
    const store = createStore(reducer);

    //listen to store
    store.subscribe(() => {
        console.log(store.getState());
    });

//dispatch add items
    store.dispatch(Acts.addAction({title: 'todo 1',body: 'ccccccccccc'}));
    store.dispatch(Acts.addAction({title: 'todo 2',body: 'aaaaaaaaaaaa'}));
    store.dispatch(Acts.addAction({title: 'todo 3',body: 'bbbbbbbbbbbb'}));


    //dispatch delet item
    store.dispatch(Acts.removeAction('todo 2'));
 