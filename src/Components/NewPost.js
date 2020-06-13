import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';



class NewPost extends Component {
    bodyInput = null;
    titleInput = null;

    handleAddButtonClick = () => {
        let post = {
            body : this.bodyInput.value.trim(),
            title : this.titleInput.value.trim(),
            userId: 1
        };

        if(post.title.length && post.body.length ){
            // this.titleInput.value = '';
            // this.bodyInput.value = '';

            console.log(post);

            axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then(response => {
                this.props.onPostCreated(post);
            })
            .catch(err => {
                console.log(err);
            });

            // this.props.onPostCreated(post);
        }
        else{
                alert('please enter both inguts');
        }
    }

    render() {
        console.log('[NewPost]',this.props);
        return (
        <div className="new-post">
            <h1>Add New post title</h1>

            <input placeholder="enter the post title" ref={el => this.titleInput = el} />
            <textarea placeholder="enter the post body" ref={el => this.bodyInput = el}/>
  
            <button onClick={this.handleAddButtonClick}>Add new post</button>
        </div>
        );
    }
}

export default withRouter(NewPost);