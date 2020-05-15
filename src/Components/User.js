import React from 'react';
function sayHello(){
    return 'Hello';
}
let User = function (){
    let u = {'name': 'Masoume'};
    return (
        <h2>some {sayHello()} text</h2>
    );
}

export default User;