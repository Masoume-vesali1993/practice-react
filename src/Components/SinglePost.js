import React, { Component } from 'react';

class SinglePost extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="post">
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default SinglePost;