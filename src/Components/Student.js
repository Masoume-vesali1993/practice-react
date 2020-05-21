import React, {Component} from 'react';

export default class Student extends Component{
    getColor = () => {
        return this.props.age >= 18 ? 'green' : 'red';
    }
    render(){
        return(
            <div style={{background: this.getColor()}}>
                {this.props.name} [{this.props.age}]
            </div>
        );
    }
}