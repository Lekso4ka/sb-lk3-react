import React from "react";
import "./index.css";
import Card from "../Card";
import data from "../../data.json";

const Main = () => {
    return (
        <main>
            <div className="cards-container">
                {data.map(el => <Card text={el.name} key={el.id} pic={el.picture} price={el.price}/>)}
            </div>
        </main>
    )
}

export default Main;