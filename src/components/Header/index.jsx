import React from 'react';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";

const Header = () => {
    return (
        <header>
            <Logo/>
            <Search/>
            <nav>Nav</nav>
        </header>
    )
}

export default Header;