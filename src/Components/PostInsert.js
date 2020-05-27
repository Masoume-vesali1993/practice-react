import React, {Component} from 'react';


class PostInsert extends Component{
    onPostCreate = (e) => {
        e.preventDefult();
        let form = e.target;
        console.log(form.lements);
        return;
        let post = {title: 'new', body: 'all'};
        this.props.onPostCreate(post);
    }

    render (){
        return (
            <div className="post-insert">
                <form onSubmit={this.onPostCreate}>
                    <div>
                        <input name="title" placeholder="post title" />
                    </div>


                    <div>
                        <textarea name="body" placeholder="post body"></textarea>
                    </div>

                    <button type="submit">create</button>

                </form>
            </div>
        )
    }
}

export default PostInsert;