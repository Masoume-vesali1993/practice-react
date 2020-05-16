import React, { Component } from 'react';
import User from './Components/User';


class App extends Component {
  state = {
    users : [
      {name:"masoume" ,age:"26"},
      {name:"parham", age:"6"},
      {name:"arshia", age:"9"},
    ]
  }

  onButtonClick = () => {
    this.state.users[0].name = "nazanin";
    this.render();
  }

  render(){
  return (
    <div>
      <button onClick={this.onButtonClick}> change state </button>
      <User name= {this.state.users[0].name} age={this.state.users[0].age} />
      <User name={this.state.users[1].name} age={this.state.users[1].age} />
      <User name={this.state.users[2].name} age={this.state.users[2].age} />
    </div>
    );
  }
}

export default App;
