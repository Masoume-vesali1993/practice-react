import React, { Component } from 'react';



class App extends Component {
  state = {
    title: 'my project title ',
    posts: [
      {id:1, title: 'post 1', body: 'post 1 body'},
      {id:1, title: 'post 2', body: 'post 2 body'},
      {id:1, title: 'post 3', body: 'post 3 body'},
    ]
  }
  

  render(){
    return (
      <div> 
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default App;
