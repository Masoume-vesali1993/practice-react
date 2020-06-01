import React, { component, Component } from 'react';
import { withRouter } from 'react-router-dom';

class Post extends Component {
    render() {
        console.log('[post]',this.props);
        return (
            <div className="post">
              <h3>{this.props.title}</h3>
              <p>{this.props.body}</p>
            </div>
        );
    }
}

export default withRouter(Post);