import React, { Component } from 'react';

import '../styles/Card.css';

class Card extends Component{

    render(){
        return(
            <div className="card">
                <i>item count: { 0 }</i>
                <b>total price: { 0 }</b>
            </div>
        );
    }
}

export default Card;