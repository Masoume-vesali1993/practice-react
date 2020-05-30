import React, { Component } from 'react';
import Post from './Components/Post';
import addNewPost from './Components/NewPost';
import NewPost from './Components/NewPost';


class App extends Component {
  state = {
    posts: [
      {id:1, title: 'post 1', body: 'post 1 body'},
      {id:2, title: 'post 2', body: 'post 2 body'},
    ]
  }
  
  

  addNewPost= (post) => {  
    this.setState((oldState, props) => (
        {
        ...oldState,
        posts: [
          ...oldState.posts,

          {
            id: oldState.posts[oldState.posts.length -1].id +1,
            ...post
          }

       ]
      }
    ));
  }

  render(){
    return (
      <div>

        <NewPost onPostCreated={this.addNewPost} />

        <div className="blog">
          <h1>Blog Posts</h1>
          {this.state.posts.map(post => (
            <Post key={post.id} {...post} />
          ))
          }
        </div>
      </div>
    );
  }
}

export default App;
