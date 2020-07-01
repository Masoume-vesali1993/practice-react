import React, { Component } from 'react';
import { connect } from 'react-redux';

class Shop extends Component {    

    renderItems = () => {
        return 'items here';
    }
 
    render() {
        return (
            <div className='shop'>
                { this.renderItems() }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

export default connect(mapStateToProps)(Shop);