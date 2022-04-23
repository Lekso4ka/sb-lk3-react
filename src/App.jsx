import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";

import { BannerCtx, BannerValue } from './context/BannerContext';
import { UserCtx, UserValue } from './context/UserContext';

// SPA - single page application

const App = () => {
    const [searchText, changeText] = useState("");

    return (
        <BannerCtx.Provider value={BannerValue}>
            <UserCtx.Provider value={UserValue}>
                <div className='container'>
                    <Header searchText={searchText} changeText={changeText}/>
                    <Main search={searchText} />
                    <Footer/>
                </div>
            </UserCtx.Provider>
        </BannerCtx.Provider>
    )
}

export default App;