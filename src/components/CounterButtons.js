import React, { Component } from 'react';

class CounterButtons extends Component{
    render(){
        return (
            <div className="counter-buttons">
                <button>+1</button>
                <button>-1</button>
            </div>
        );
    }
}

export default CounterButtons;