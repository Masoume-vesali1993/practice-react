import React, { Component } from 'react';

class SinglePost extends Component {
    render() {
        return (
            <div className="single-post">
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
            </div>
        );
    }
}

export default SinglePost;