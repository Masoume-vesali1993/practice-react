import React, { Component } from 'react';

class SinglePost extends Component {
    render() {
        console.log('[Single-post]');
        if(this.props.post){
            return (
                <div className="single-post">
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.body}</p>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default SinglePost;