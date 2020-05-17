import React, { Component } from 'react';

export default class User extends Component  {
    state = {
        name : this.props.name,
        age : this.props.age,
    }

    onButtonChangeClicked = () => {
        let newState = {
            name : 'fariba',
            age : 30,
        };

        this.setState(newState);

        this.props.onChange(this.props.id,newState);
    }

    render(){
        let style = {color: 'red'};
        return(
            <div>
                <button onClick={this.onButtonChangeClicked}>change</button>
                some be {this.props.name}<br />
                shoma {this.props.age} sal darid<br/>
                {this.props.children}

                <h2 style={style}>some text</h2>
                <h3>another text</h3>
            </div>
        );
    }
}


