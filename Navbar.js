import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/LoginForm">LoginForm</Link>
            </li>
        </ul>
    )
}
export default Navbar;