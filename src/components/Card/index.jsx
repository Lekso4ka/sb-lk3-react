import React from "react";
import "./index.css";
import pic from "./img/logo.svg";

const Card = (props) => {
    let st = {
        backgroundImage: `url(${pic || props.pic})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        marginBottom: "20px"
    };
    return (
        <div className="card">
            {/* 
                background-image
                    + ставится именно так, как нам надо
                    - картинка не является картинкой
                img
                    + это - картинка
                    - кривая
            */}
            {/* <div className="card__img" style={{backgroundImage: `url(${props.pic})`}}></div> */}
            <div className="card__img" style={st}></div>
            <div className="card__price">{props.price}</div>
            <div className="card__text">{props.text}</div>
        </div>
    )
}

export default Card;