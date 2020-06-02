import React, { component, Component } from 'react';
import { withRouter,Link } from 'react-router-dom';

class Post extends Component {
    render() {
        console.log(this.props);
        return (
            <Link to={{
                pathname: "/blog"
            }}>
                <div className="post">
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
                </div>
            </Link>
        );
    }
}

export default withRouter(Post);