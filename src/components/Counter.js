import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component{
    render(){
        return(
                <div className="counter">
                    0
                </div>
        )
    }
}

export default connect()(Counter);