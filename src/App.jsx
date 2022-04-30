import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";

import { BannerCtx, BannerValue } from './context/BannerContext';
import { UserCtx, UserValue } from './context/UserContext';
import { FavCtx } from './context/FavoritesContext';
import { ProdCtx } from './context/ProductContext';
// SPA - single page application
import data from "./data.json";
data = data.map(el => {
    el.likes = [];
    return el;
});

const App = () => {
    const [searchText, changeText] = useState("");
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    const [favorites, updFav] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
        // Здесь подключается API
    }, [])
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
    const searchHandler = () => {
        console.log("hello");
        return products.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    return (
        <BannerCtx.Provider value={BannerValue}>
            <FavCtx.Provider value={{favorites: favorites, setFavorites: setFavorites}}>
                <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler }}>
                    <ProdCtx.Provider value={{
                        products: products,
                        text: searchText,
                        setText: changeText,
                        setProducts: setProducts,
                        search: searchHandler
                    }}>
                        <div className='container'>
                            <Header likes={favorites.length}/>
                            <Main updFav={updFav}/>
                            <Footer/>
                        </div>
                    </ProdCtx.Provider>
                </UserCtx.Provider>
            </FavCtx.Provider>
        </BannerCtx.Provider>
    )
}

export default App;