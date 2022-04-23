import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";

import { BannerCtx, BannerValue } from './context/BannerContext';
import { UserCtx, UserValue } from './context/UserContext';

// SPA - single page application

const App = () => {
    const [searchText, changeText] = useState("");
    const [user, setUser] = useState(localStorage.getItem("user") || "");

    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id);
    }
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data);
    }
    return (
        <BannerCtx.Provider value={BannerValue}>
            <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler }}>
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