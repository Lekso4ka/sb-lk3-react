import React, {useState} from 'react';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";

const Header = ({searchText, changeText}) => {
    return (
        <header>
            <Logo/>
            <Search text={searchText} foo={changeText}/>
            <nav>{searchText}</nav>
        </header>
    )
}

export default Header;