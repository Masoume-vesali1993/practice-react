import React, { Component } from 'react';
import '../styles/ShopItem.css';

class ShopItem extends Component {

    render(){
        console.log(this.props);
        
        return(
            <div className="shop-item">
                <h3>{ this.props.name }</h3>
                <div className="shop-item-detail">
                    <b>{ this.props.price }</b>
                </div>
            </div>
        ); 
    }
}

export default ShopItem;