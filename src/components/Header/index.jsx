import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";
import icFav from "../../assets/like_stroke.svg";
import icProf from "../../assets/profile.svg";
import { UserCtx } from "../../context/UserContext";
import { ProdCtx } from '../../context/ProductContext';

const Header = ({likes}) => {
    const { user } = useContext(UserCtx);
    const { search, text } = useContext(ProdCtx);
    return (
        <>
            <header>
                <Logo/>
                <Search />
                <nav>
                    <Link to="/">Главная</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/cart">Корзина</Link>
                    <Link to="/favorites">
                        <img src={icFav} alt="Избранные товары"/>
                        {likes}
                    </Link>
                    <Link to={user ? "/profile" : "/signin"}>
                        <img src={icProf} alt="Войти в личный кабинет"/>
                    </Link>
                </nav>
            </header>
            <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                {text && search().length && search().map((el, i) => <Link key={i} to={"/product/" + el.id}>{el.name}</Link>)}
            </div>
        </>
    )
}

export default Header;