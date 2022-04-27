import React, {useState, useContext} from "react";
import "./index.css";
import pic from "./img/logo.svg";
import likeTrue from "../../assets/like_fill.svg";
import likeFalse from "../../assets/like_stroke.svg";
import {useNavigate} from "react-router-dom";
import api from "../../Api";
import { UserCtx } from "../../context/UserContext";
import { FavCtx } from "../../context/FavoritesContext";

const Card = (props) => {
    let st = {
        backgroundImage: `url(${pic || props.pictures})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        marginBottom: "20px"
    };
    const {setFavorites} = useContext(FavCtx);
    const {user} = useContext(UserCtx);
    const [like, setLike] = useState(props.likes.includes(user));
    const navigate = useNavigate();
    const likeHandler = (e) => {
        e.stopPropagation();
        setLike(!like);
        // console.log(like);
        api.setProductLike(props._id, like)
            .then(ans => {
                console.log(ans);
                setFavorites(ans);
            });
        
    }
    const replaceHandler = (e) => {
        navigate(`/product/${props._id}`);
    }
    return (
        <div className="card" onClick={replaceHandler}>
            {/* <div className="card__img" style={{backgroundImage: `url(${props.pic})`}}></div> */}
            <div className="card__img" style={st}></div>
            <div className="card__price">{props.price}</div>
            <div className="card__text">{props.name}</div>
            <img className="card__like" src={like ? likeTrue : likeFalse} onClick={likeHandler}/>
        </div>
    )
}

export default Card;