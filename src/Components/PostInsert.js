import React, {Component} from 'react';


class PostInsert extends Component{
    onPostCreate = (e) => {
        e.preventDefult();
        let form = e.target;
        console.log(form);
        return;
        let post = {title: 'new', body: 'all'};
        this.props.onPostCreate(post);
    }

    render (){
        return (
            <div className="post-insert">
                <form onSubmit={this.onPostCreate}>
                    <div>
                        <input placeholder="post title" />
                    </div>


                    <div>
                        <textarea placeholder="post body"></textarea>
                    </div>

                    <button type="submit">create</button>

                </form>
            </div>
        )
    }
}

export default PostInsert;