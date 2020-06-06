import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SinglePost extends Component {
    render() {
        console.log('[Single-post]', this.props);
        if(this.props.post){
            return (
                <div className="single-post">
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.body}</p>
                </div>
            );
        }
        else{
            return <Redirect to="/blog" />;
        }
    }

    // componentDidMount(){
    //     if(!this.props.post){
    //         this.props.history.push('/blog');
    //     }
    // }
}

export default withRouter (SinglePost);