import React, { Component } from 'react';



class NewPost extends Component {
    bodyInput = null;
    titleInput = null;

    handleAddButtonClick = () => {
        let post = {
            body : this.bodyInput.value.trim(),
            title : this.titleInput.value.trim(),
        };

        if(post.title.length && post.body.length ){
            this.titleInput.value = '';
            this.bodyInput.value = '';
            this.props.onPostCreated(post);
        }
        else{
                alert('please enter both inguts');
        }
    }

    render() {
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

export default NewPost;