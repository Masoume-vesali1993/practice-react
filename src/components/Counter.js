import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterStore from '../redux/CounterStore';

class Counter extends Component{
    render(){
        return(
            <Provider store={CounterStore}>
                <div className="counter">
                    0
                </div>
            </Provider>
        )
    }
}

export default Counter;