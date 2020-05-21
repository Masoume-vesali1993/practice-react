import React, { Component } from 'react';
import Student from './Components/Student';


class App extends Component {
  render(){
    return (
      <div>
        <Student name="Masoume" age={26} />
      </div>
    );
  }
}

export default App;
