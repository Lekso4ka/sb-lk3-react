import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default ({login}) => {
    const [val, changeVal] = useState("");
    const [pwd, changePwd] = useState("");
    const handler = (e) => {
        console.log("send form");
    }
    return (
        <div>
            <form className="auth" onSubmit={handler}>
                <h1>{login ? "Вход" : "Регистрация"}</h1>
                <input type="email" placeholder="email" name="email" value={val} required onInput={e => changeVal(e.target.value)}/>
                <input type="password" placeholder="password" name="password" value={pwd} required onInput={e => changePwd(e.target.value)}/>
                <button type="submit">{login ? "Войти" : "Зарегистрироваться"}</button>
                <Link to={login ? "/signup" : "/signin"}><button type="button">{login ? "Регистрация" : "Вход"}</button></Link>
            </form>
        </div>
    )
}