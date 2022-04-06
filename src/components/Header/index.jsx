import React from 'react';
import Logo from '../Logo';
import './index.css';

const Header = () => {
    return (
        <header>
            <Logo/>
            <p>Search</p>
            <nav>Nav</nav>
        </header>
    )
}

export default Header;