import React, { component, Component } from 'react';

class SinglePost extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="post">
                <Link to={{ pathname: this.props.match.path + "/" + this.props.id}}> <h3>{this.props.title}</h3>
                </Link>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default SinglePost;