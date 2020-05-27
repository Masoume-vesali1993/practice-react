import React, { Component } from 'react';
import PostInsert from './Components/PostInsert';



class App extends Component {
  state = {
    title: 'my project title ',
    posts: [
      {id:1, title: 'post 1', body: 'post 1 body'},
    ]
  }
  

  render(){
    return (
      <div> 
        <h1>{this.state.title}</h1>

        <PostInsert />

        <div className="post-panel">
          <h2>my post:</h2>

          {this.state.posts.map(
            post => (
              <div className="post">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default App;
