import React, {useState, useEffect} from "react";
import api from "../Api";
import Card from "../components/Card";
// import {Link} from "react-router-dom";

const Catalog = ({searchText}) => {
    // const cards = data.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase()));
    const [cards, updateCards] = useState([]);
    const [products, updateProducts] = useState(cards);
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            api.token = token;
        }
        // if (!cards.length) {
            api.getProductList().then(data => {
                console.log(data);
                updateCards(data.products);
                updateProducts(data.products.filter(el => el.name.toLowerCase().includes(searchText.toLowerCase())));
            });
        // }
    }, []);
    
    return (
        <>
            <h1>Каталог</h1>
            {searchText && <div className='search__item'>По запросу <strong>{searchText}</strong> найдено {products.length} товаров</div>}
            <div className="cards-container">
                {products.map(el => (
                    // <Link to={"/product/" + el._id} key={el._id}>
                        <Card key={el._id} {...el} />
                    // </Link>
                ))}
            </div>
        </>
    )
}

export default Catalog;