import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Main from "./components/Main";

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

// SPA - single page application

const App = () => {
    const [searchText, changeText] = useState("");
    const [searchCnt, setCnt] = useState(0);
    return (
        <div className='container'>
            <Header searchText={searchText} changeText={changeText}/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/catalog" element={<Catalog searchText={searchText} setCnt={setCnt}/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
            
            <Footer/>
        </div>
    )
}

export default App;