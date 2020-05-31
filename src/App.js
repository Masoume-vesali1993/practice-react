import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

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
        <BrowserRouter>
          <div>
            <Route path="/" component={Navbar} />
            <Route path="/new-post" render={(props) => <NewPost {...props} onPostCreated={this.addNewPost} />} />
            <Route path="/blog" render={(props) => <Blog {...props} posts={this.state.posts} /> } />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
