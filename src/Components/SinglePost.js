import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SinglePost extends Component {
    state = {
        post:null
    }

    render() {
        if(this.state.post){
            return (
                <div className="single-post">
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.body}</p>
                </div>
            );
        }
        else{
            return 'dont file';
        }
    }

    componentDidMount(){

        }
    }

export default withRouter (SinglePost);