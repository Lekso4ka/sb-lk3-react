import React, {useState, useEffect, useContext} from "react";
import api from "../Api";
import Card from "../components/Card";
// import {Link} from "react-router-dom";
import { FavCtx } from "../context/FavoritesContext";
import data from "../data.json";
import { usePagination } from "../hooks";
import { ProdCtx } from "../context/ProductContext";

const Catalog = ({updFav}) => {
    const {products, text, search} = useContext(ProdCtx);
    const { setFavorites } = useContext(FavCtx);
    const _data = usePagination(search(products, text), 4);
    const [page, setPage] = useState(1);

    function setPagination(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(<div 
                className={(i+1) === page ? "active" : ""} 
                key={i} 
                onClick={() => {setPage(i+1); _data.jump(i+1)}}
            >{i+1}</div>)
        }
        return arr;
    }

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            api.token = token;
        }
        let user = localStorage.getItem("user");
        // if (!cards.length) {
            // api.getProductList().then(data => {
                // updateCards(data.products);
                // updFav(data.products.filter(el => el.likes.includes(user)));
                updFav(data.filter(el => el.likes.includes(user)));
                // updateProducts(data.products.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())));
                // updateProducts(data.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())));
            // });
        // }
    }, []);
    
    return (
        <>
            <h1>Каталог</h1>
            {text && <div className='search__item'>По запросу <strong>{text}</strong> найдено {search(products,text).length} товаров</div>}
            <div className="page-container">
                {setPagination(_data.maxPage)}
            </div>
            <h2>Страница {page}</h2>
            <div className="cards-container">
                {_data.current().map(el => (
                    // <Link to={"/product/" + el._id} key={el._id}>
                        // <Card key={el._id} {...el} />
                        <Card key={el.id} {...el} />
                    // </Link>
                ))}
            </div>
        </>
    )
}

export default Catalog;