import React, {useState} from "react";
import "./index.css";
import close from "./img/close.svg";
import icon from "./img/search.svg";

const Search = (props) => {
    const [val, updateVal] = useState(props.text);
    const changeText = (e) => {
        updateVal(e.target.value);
        props.foo(e.target.value);
    }
    const clearText = function() {
        updateVal("");
        props.foo("");
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