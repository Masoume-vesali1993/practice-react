import React from 'react';

let User = function (props){

    return (
        <div>
            some be {props.name}<br />
            shoma {props.age} sal darid<br/>
            {props.children}
        </div>
    );
}

export default User;