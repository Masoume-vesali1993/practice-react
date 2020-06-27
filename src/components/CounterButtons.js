import React, { Component } from 'react';
import { addAction, minusAction } from '../redux/reducers/CounterReducer';
import { connect } from 'react-redux';

class CounterButtons extends Component{
    render(){
        return (
            <div className="counter-buttons">
                <button onClick={ this.props.addToCounter }>+1</button>
                <button onClick={ this.props.reducerCounter }>-1</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCounter: () => dispatch(addAction()),
        reducerCounter: () => dispatch(minusAction())
    };
};

export default connect(null, mapDispatchToProps)(CounterButtons);