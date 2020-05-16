import React, { Component } from 'react';

// class User extends Component  {
//     render(){
//         return(
//             <div>
//             some be {this.props.name}<br />
//             shoma {this.props.age} sal darid<br/>
//             {this.props.children}
//             </div>
//         );
//     }
// }


let user = function (props){

    return (
        <div>
            some be {props.name}<br />
            shoma {props.age} sal darid<br/>
            {props.children}
        </div>
    );
}

export default user;