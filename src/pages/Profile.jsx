import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import { UserCtx } from "../context/UserContext";

export default () => {
    const navigate = useNavigate();
    const {setToken, setUser} = useContext(UserCtx);
    const st = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
    const logout = (e) => {
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
        setToken("");
        setUser("");
        navigate("/");
    }
    return (
        <div style={st}>
            <h1>Личный кабинет</h1>
            <span className="logout" onClick={logout}>Выйти</span>
        </div>
    )
}