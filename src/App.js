import React, { Component } from 'react';
import User from './Components/User';


class App extends Component {
  state = {
    users : [
      {id:1 ,name:"masoume" ,age:"26"},
      {id:2 ,name:"parham", age:"6"},
      {id:3 ,name:"arshia", age:"9"},
    ]
  }

  onButtonClick = () => {
  }

  onUserDateChange = (userId,params) => {
    console.log('change' , userId,params)
  }
 
  render(){
  return (
    <div>
      <button onClick={this.onButtonClick}> change state </button>
      <User name= {this.state.users[0].name} age={this.state.users[0].age} id={this.state.users[0].id} onChange={this.onUserDateChange}/>
      {/* <User name={this.state.users[1].name} age={this.state.users[1].age} id={this.state.users[1].id} onChange={this.onUserDateChange} />
      <User name={this.state.users[2].name} age={this.state.users[2].age} id={this.state.users[2].id} onChange={this.onUserDateChange} /> */}
    </div>
    );
  }
}

export default App;
