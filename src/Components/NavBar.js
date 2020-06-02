import React,{ Component } from "react";
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <header>
                <nav className="navication">
                <ul>
                    <li> <NavLink to={{
                        pathname:"/new-post",
                        hash: '#foo',
                        search: '?x=26'
                    }}>New Post</NavLink> </li>
                    <li> <NavLink to="/blog">Blog</NavLink> </li>
                </ul>
            </nav>
          </header>
        );
    }
}

export default Navbar;