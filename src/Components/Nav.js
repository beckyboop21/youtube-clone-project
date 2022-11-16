import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav(props) {
   
    return (
        <nav>
            <h1>YouTube :)</h1>
            <ul className='nav-links'>
                <Link style={{color:'white', textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={{color:'white', textDecoration: 'none'}} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
            
        </nav>
    );
}

export default Nav;