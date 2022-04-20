import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";

import { BannerCtx, BannerValue } from './context/BannerContext';

// SPA - single page application

const App = () => {
    const [searchText, changeText] = useState("");
    return (
        <BannerCtx.Provider value={BannerValue}>
        <div className='container'>
            <Header searchText={searchText} changeText={changeText}/>
            <Main search={searchText} />
            <Footer/>
        </div>
        </BannerCtx.Provider>
    )
}

export default App;