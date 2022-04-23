import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";
import icFav from "../../assets/like_stroke.svg";
import icProf from "../../assets/profile.svg";
import { UserCtx } from "../../context/UserContext";

const Header = ({searchText, changeText}) => {
    const { user } = useContext(UserCtx);
    return (
        <header>
            <Logo/>
            <Search text={searchText} foo={changeText}/>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/catalog">Каталог</Link>
                <Link to="/cart">Корзина</Link>
                <Link to="/favorites">
                    <img src={icFav} alt="Избранные товары"/>
                </Link>
                <Link to={user ? "/profile" : "/signin"}>
                    <img src={icProf} alt="Войти в личный кабинет"/>
                </Link>
            </nav>
        </header>
    )
}

export default Header;