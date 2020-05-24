import React, { Component } from 'react';
import Student from './Components/Student';


class App extends Component {
  state = {
    students : [
      {id: 1, name:'Masoume'},
      {id: 2, name:'Zahra'},
      {id: 3, name:'Fateme'},
    ],

    randomUserId: null
  }

  randomUserHidden = () => {
    let newState = {...this.state};
    newState.randomUserId = Math.ceil(Math.random() *3);
    console.log(newState);
    this.setState(newState);
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
