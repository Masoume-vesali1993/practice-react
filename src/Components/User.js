import React, { Component } from 'react';

export default class User extends Component  {
    state = {
        name : this.props.name,
        age : this.props.age,
    }

    onButtonChangeClicked = () => {
        this.props.onChange('learn')
    }

    render(){
        return(
            <div>
                <button onClick={this.onButtonChangeClicked}>change</button>
                some be {this.props.name}<br />
                shoma {this.props.age} sal darid<br/>
                {this.props.children}
            </div>
        );
    }
}


// let user = function (props){

//     return (
//         <div>
//             some be {props.name}<br />
//             shoma {props.age} sal darid<br/>
//             {props.children}
//         </div>
//     );
// }

// export default user;