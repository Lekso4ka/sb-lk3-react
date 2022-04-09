import React from "react";
import "./index.css";
import Card from "../Card";
import data from "../../data.json";

const Main = ({search}) => {
    const cards = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <main>
            <div className="cards-container">
                {cards.map(el => <Card text={el.name} key={el.id} pic={el.picture} price={el.price}/>)}
            </div>
        </main>
    )
}

export default Main;