import React, { Component } from 'react';
import { connect } from 'react-redux';

class Shop extends Component {    
    render() {
        console.log(this.props);
        return (
            <div className='shop'>
                shop...
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

export default connect(mapStateToProps)(Shop);