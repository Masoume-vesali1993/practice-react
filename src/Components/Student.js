import React, {Component} from 'react';

export default class Student extends Component {
    render() {
        return (
            <div>
                {this.props.name} [{this.props.age}]
            </div>
        );
    }
}