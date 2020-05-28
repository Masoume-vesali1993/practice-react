import React, { Component } from 'react';



class App extends Component {
  state = {
    posts: [
      {id:1, title: 'post 1', body: 'post 1 body'},
      {id:2, title: 'post 2', body: 'post 2 body'},
    ]
  }
  

  render(){
    return (
      <div>

        <div className="new-post">
          <input placeholder="enter the post title" />
          <textarea placeholder="enter the post body" />

          <button>Add new post</button>
        </div>

        <div className="blog">
          {this.state.posts.map(post => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
          }
        </div>
      </div>
    );
  }
}

export default App;
