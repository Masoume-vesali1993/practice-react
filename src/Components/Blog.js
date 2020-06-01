import React, {Component} from 'react';
import Post from './Post';



class Blog extends Component {
    render() {
        console.log('[blog]',this.props);
        return(
            <div className="blog">
            <h1>Blog Posts</h1>
            {this.props.posts.map(post => (
                <Post key={post.id} {...post} />
            ))
            }
            </div>
    );
  }
}

export default Blog;