import React from 'react';
let User = function (){
    let u = {'name': 'Masoume'};
    return (
        <h2>some {(function(){return 'my friennds'; })()} text</h2>
    );
}

export default User;