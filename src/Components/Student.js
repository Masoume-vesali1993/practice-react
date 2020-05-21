import React, {Component} from 'react';

export default class Student extends Component{
    static defultProps = {
        age:0
    }

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

// Student.defaultProps = {
//     age : 15
// }