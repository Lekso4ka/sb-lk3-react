import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";

import { BannerCtx, BannerValue } from './context/BannerContext';
import { UserCtx, UserValue } from './context/UserContext';
import { FavCtx } from './context/FavoritesContext';
// SPA - single page application

const App = () => {
    const [searchText, changeText] = useState("");
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    const [favorites, updFav] = useState([]);
    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id);
    }
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data);
    }
    const setFavorites = (obj) => {
        // console.log(user);
        // console.log(obj);
        if (obj.likes.includes(user)) {
            if (!favorites.includes(el => el._id === obj._id)) {
                updFav([...favorites, obj]);
            }
        } else {
            updFav(favorites.filter(el => el._id !== obj._id));
        }
    }
    return (
        <BannerCtx.Provider value={BannerValue}>
            <FavCtx.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
                <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler }}>
                    <div className='container'>
                        <Header searchText={searchText} changeText={changeText} likes={favorites.length}/>
                        <Main search={searchText} updFav={updFav}/>
                        <Footer/>
                    </div>
                </UserCtx.Provider>
            </FavCtx.Provider>
        </BannerCtx.Provider>
    )
}

export default App;