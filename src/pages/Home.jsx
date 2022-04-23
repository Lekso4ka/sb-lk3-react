import React, {useContext} from "react";
import BannerContainer from "../components/BannerContainer";
import { BannerCtx } from "../context/BannerContext";

const Home = () => {
    const { b1, b2, b3, b4, b5 } = useContext(BannerCtx);

    return (
        <>
            <div className="main-banner">
                <h1>Крафтовые лакомства<br/>для собак</h1>
                <p>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
            </div>
            <div style={{display: "grid", gap: "20px"}}>
                <BannerContainer cards={[b1]}/>
                <BannerContainer cards={[b2, b3]}/>
                <BannerContainer cards={[b4, b5]}/>
                <BannerContainer cards={[b1]}/>
            </div>
        </>
    )
}

export default Home;