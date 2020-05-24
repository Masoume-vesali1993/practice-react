import React, {Component} from 'react';

export default class Student extends Component {
    render() {
        return (
            <div>
                <h1>Student:</h1>
                {this.props.name} [{this.props.age}]
            </div>
        );
    }
}