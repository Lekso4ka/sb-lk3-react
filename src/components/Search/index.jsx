import React, {useState, useContext} from "react";
import "./index.css";
import close from "./img/close.svg";
import icon from "./img/search.svg";
import { ProdCtx } from "../../context/ProductContext";
/*
    Когда работает поиск, но не на странице с каталогом товаров, что должно происходить?
    1) Проверять на какой странице пользователь и перенаправлять его на страницу каталога (navigate)
    2) Сделать кнопку отправки формы или при нажатии на Enter (form.onsubmit)
    3) Добавить выпадающее окно с названиями соответствующих товаров, на которые можно нажать и попасть на страницу товара
*/

const Search = (props) => {
    const {text, setText} = useContext(ProdCtx);
    const [val, updateVal] = useState(text);
    const changeText = (e) => {
        updateVal(e.target.value);
        setText(e.target.value);
    }
    const clearText = function() {
        updateVal("");
        setText("");
    } 
    return (
        <form>
            <input type="text" value={val} onInput={changeText} placeholder="Поиск"/>
            <button className="search-btn" type="button">
                {val ? <img src={close} onClick={clearText}/> : <img src={icon}/>}
            </button>
        </form>
    )
}

export default Search;