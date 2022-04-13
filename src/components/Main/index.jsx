import React from "react";
import "./index.css";
import {Routes, Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home';
import Catalog from '../../pages/Catalog';
import Cart from '../../pages/Cart';
import Product from "../../pages/Product";

const Main = ({search}) => {
    return (
        <main>
            <Routes>
                <Route path="/catalog" element={<Home/>} />
                <Route path="/" element={<Catalog searchText={search}/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/product/:id" element={<Product/>}/>
            </Routes>
        </main>
    )
}

export default Main;