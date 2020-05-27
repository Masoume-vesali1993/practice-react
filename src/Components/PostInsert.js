import React, {Component} from 'react';


class PostInsert extends Component{
    titleInput=null;
    bodyInput =null;
    onPostCreate = (e) => {
        e.preventDefault();

        // let post = {
        //     title: e.target.elements.title.value,
        //     body: e.target.elements.body.value
        // };

        let post = {
            title: this.titleInput.value.trim(),
            body: this.bodyInput.value.trim()
        };

        if(post.title.length && post.body.length){
            this.titleInput.value = '';
            this.bodyInput.value = '';

            this.props.onPostCreate(post);

        }
        else{
            alert('please fill input');
        }

        this.props.onPostCreate(post);
    }

    render (){
        return (
            <div className="post-insert">
                <form onSubmit={this.onPostCreate}>
                    <div>
                        {/* <input name="title" placeholder="post title" /> */}
                        <input ref={el => this.titleInput = el } placeholder="post title" />
                    </div>


                    <div>
                        {/* <textarea name="body" placeholder="post body"></textarea> */}
                        <textarea ref={el => this.bodyInput = el } placeholder="post body"></textarea>
                    </div>

                    <button type="submit">create</button>

                </form>
            </div>
        );
    }
}

export default PostInsert;