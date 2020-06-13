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
            return <p className="loding"></p>;
        }
    }

    componentDidMount(){
            axios
            .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log(response)
                let post = {
                    id: response.data.id,
                    title: response.data.id,
                    body: response.data.body,
                }

                setTimeout(() =>{
                    this.setState(oldState => {
                        return {
                            ...oldState,
                                post
                        };
                    });
                },2000);
                
               
            })
            .catch(err => {
                alert(err);
                console.log(err);
            })
        }
    }

export default withRouter (SinglePost);