import React from "react";
import Banner from "../Banner";

const BannerContainer = ({cards}) => {
    const st = {
        display: "grid",
        gridTemplateColumns: `repeat(${cards.length}, 1fr)`,
        gap: "16px"
    }
    return (
        <div style={st}>
            {cards.map(el => <Banner data={el} size={cards.length} key={el.name}/>)}
        </div>
    )
}

export default BannerContainer;