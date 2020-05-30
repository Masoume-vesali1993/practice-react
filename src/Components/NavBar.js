import React,{ Component } from "react";

class Navbar extends Component {
    render(){
        return (
            <header>
                <nav className="navication">
                <ul>
                    <li> <a href="./new-post">New Post</a> </li>
                    <li> <a href="./blog">Blog</a> </li>
                </ul>
            </nav>
          </header>
        );
    }
}

export default Navbar;