import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import addNewPost from './Components/NewPost';
import NewPost from './Components/NewPost';
import Blog from './Components/Blog';
import Navbar from './Components/NavBar';


class App extends Component {
  state = {
    posts: [
      {id:1, title: 'post 1', body: 'post 1 body'},
    ]
  }
  
  

  addNewPost= (post) => {  
    this.setState((oldState, props) => {
      console.log(oldState);
        let newState = {
          ...oldState,
          posts: [
            ...oldState.posts,

            {
              id: oldState.posts[oldState.posts.length -1].id +1,
              ...post
            }
        ]
      };
      console.log(newState);

      return newState;
    });
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <NewPost onPostCreated={this.addNewPost} />
          <Blog posts={this.state.posts} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
