import React, { component, Component } from 'react';
import { withRouter,Link } from 'react-router-dom';

class Post extends Component {
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

export default withRouter(Post);