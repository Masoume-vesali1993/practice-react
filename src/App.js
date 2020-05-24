import React, { Component } from 'react';
import Student from './Components/Student';


class App extends Component {
  state = {
    students : [
      {id: 1, name:'Masoume'},
      {id: 2, name:'Zahra'},
      {id: 3, name:'Fateme'},
    ],

    randomUser = null
  }

  randomUserHidden = () => {
    randomUser = Math
  }

  render(){
    return (
      <div> 
        <button onClick={this.randomUserHidden}>hide random state</button>
        {
          this.state.students.map(
            s => ( 
            <Student name={s.name} />
            )
          )
        }
      </div>
    );
  }
}

export default App;
