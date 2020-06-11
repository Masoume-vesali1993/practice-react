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
                    <h3>{this.state.post.title}</h3>
                    <p>{this.state.post.body}</p>
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
                let post = {
                    id: response.data.id,
                    title: response.data.id,
                    body: response.data.body,
                }
                
                this.setState(oldState => {
                    return {
                        ...oldState,
                            post
                    };
                });
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

export default withRouter (SinglePost);