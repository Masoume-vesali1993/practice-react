import React, { Component } from 'react';
import Student from './Components/Student';


class App extends Component {
  state = {
    users : [
      {id: 1, name:'Masoume'},
      {id: 1, name:'Zahra'},
      {id: 1, name:'Fateme'},
    ]
  }
  render(){
    return (
      <div> 
        <Student name={this.state.users[0].name} />
      </div>
    );
  }
}

export default App;
