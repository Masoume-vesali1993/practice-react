import React, { Component } from 'react';
import Student from './Components/Student';


class App extends Component {
  state = {
    students : [
      {id: 1, name:'Masoume'},
      {id: 1, name:'Zahra'},
      {id: 1, name:'Fateme'},
    ]
  }
  render(){
    return (
      <div> 
        {
          this.state.students.map(s => <Student name={s.name} />)
        }
      </div>
    );
  }
}

export default App;
