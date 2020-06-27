import { createStore } from "redux";
import reducer, { addAction, minusAction }  from "./reducers/CounterReducer";

const store = createStore(reducer);

store.dispatch(addAction());

export default store;