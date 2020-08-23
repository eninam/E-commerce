import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css'
class Navbar extends Component {
    render() {
        return (
    <nav>
        <ul className="nav_links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
        </ul>
    </nav>
        );
    }
}

export default Navbar;