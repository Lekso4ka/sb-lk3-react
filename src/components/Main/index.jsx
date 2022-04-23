import React from "react";
import "./index.css";
import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Catalog from '../../pages/Catalog';
import Cart from '../../pages/Cart';
import Product from "../../pages/Product";
import Favorites from "../../pages/Favorites";
import Profile from "../../pages/Profile";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";

const Main = ({search}) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/catalog" element={<Catalog searchText={search}/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </main>
    )
}

export default Main;