import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';

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
            axios
            .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

export default withRouter (SinglePost);