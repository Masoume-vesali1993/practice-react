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

  render(){
  return (
    <div>
      <User name="{this.state.user[0].name}" age="26" />
      <User name="parham" age="6" />
      <User name="arshia" age="9" />
    </div>
    );
  }
}

export default App;
