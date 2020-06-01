import React,{ Component } from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <header>
                <nav className="navication">
                <ul>
                    <li> <Link to={{
                        pathname:"/new-post",
                        hash: '#foo',
                        search: '?x=26'
                    }}>New Post</Link> </li>
                    <li> <Link to="/blog">Blog</Link> </li>
                </ul>
            </nav>
          </header>
        );
    }
}

export default Navbar;