import React, { Component } from 'react';
import Post from './Components/Post';


class App extends Component {
  state = {
    posts: [
      {id:1, title: 'post 1', body: 'post 1 body'},
      {id:2, title: 'post 2', body: 'post 2 body'},
    ]
  }
  
  titleInput = null;
  bodyInput = null;

  addNewPost= () => {  
    this.setState((oldState, props) => (
        {
        ...oldState,
        posts: [
          ...oldState.posts,
        {
          id: oldState.posts[oldState.posts.length -1].id +1,
          title : this.titleInput.value,
          body : this.bodyInput.value,
        }
       ]
      }
    ));
  }

  render(){
    return (
      <div>
        <h1>Add New post title</h1>
        <div className="new-post">
          <input placeholder="enter the post title" ref={el => this.titleInput = el} />
          <textarea placeholder="enter the post body" ref={el => this.bodyInput = el}/>

          <button onClick={this.addNewPost}>Add new post</button>
        </div>

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
