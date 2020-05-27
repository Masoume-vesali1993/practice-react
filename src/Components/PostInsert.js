import React, {Component} from 'react';


class PostInsert extends Component{
    render (){
        return (
            <div className="post-insert">
                <form>
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