import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component{
    render(){
        console.log(this.props);
        return(
                <div className="counter">
                    0
                </div>
        )
    }
}

export default connect()(Counter);