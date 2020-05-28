import React, { Component } from 'react';



class App extends Component {
  state = {
    posts: [
      {id:1, title: 'post 1', body: 'post 1 body'},
      {id:2, title: 'post 2', body: 'post 2 body'},
    ]
  }
  
  titleInput = null;
  bodyInput = null;

  addNewPost= () =>{
    let post = {
      id: this.state.posts[this.state.posts.length -1].id +1,
      title : this.titleInput.value,
      body : this.bodyInput.value,
    }
    console.log(post);
  }

  render(){
    return (
      <div>

        <div className="new-post">
          <input placeholder="enter the post title" ref={el => this.titleInput = el} />
          <textarea placeholder="enter the post body" ref={el => this.bodyInput = el}/>

          <button onClick={this.addNewPost}>Add new post</button>
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
