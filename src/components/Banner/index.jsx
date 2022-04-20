import React from "react";
import img from "./img/logo.svg";
import "./index.css";

const Banner = ({size, data}) => {
    const st = {
        backgroundColor: data.bg,
        backgroundImage: `url(${img})`,
        backgroundPosition: "90% 60%",
        backgroundRepeat: "no-repeat",
        backgroundSize: size === 1 ? "15%" : "30%",
        padding: size === 1 ? "54px 84px" : "54px 42px"
    }
    return (
        <div style={st} className="banner-card">
            <h2>{data.name}</h2>
            <p>{data.text}</p>
        </div>
    )
}

export default Banner;