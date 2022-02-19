import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'> home </Link>
            <Link to='/login'> se connecter </Link>
            <Link to='/signup'> s'inscrire </Link>
            <Link to='/tweet'> tweeter </Link>

            
        </nav>
    );
};

export default Navbar;