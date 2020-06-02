import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import NewPost from './Components/NewPost';
import Blog from './Components/Blog';

import Navbar from './Components/NavBar';

import SinglePost from './Components/SinglePost';


class App extends Component {
  state = {
    posts: [
      {id:1, title: 'post 1', body: 'post 1 body'},
      {id:2, title: 'post 2', body: 'post 2 body'},
      {id:3, title: 'post 3', body: 'post 3 body'},
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

  findPostById = (postId) => {
    return this.state.posts.filter(post => post.id === parseInt(postId));
  }

  render(){
    return (
        <BrowserRouter>
          <div>
            <Route path="/" component={Navbar} />
            <Route path="/new-post" render={(props) => <NewPost {...props} onPostCreated={this.addNewPost} />} />
            <Route path="/blog" exact render={(props) => <Blog {...props} posts={this.state.posts} x={true} /> } />
            <Route path="/blog/:id" render={(props) => <singlePost post={this.findPostById(props.match.params.id)} /> } />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
