import React, {useState} from "react";
import "./index.css";

const Search = (props) => {
    const [val, updateVal] = useState(props.text); //хук состояния
    // onInput, onChange, onBlur, onFocus
    const changeText = (e) => {
        updateVal(e.target.value); //вызвать функцию updateVal и передать в нее новое значение переменной val
        props.foo(e.target.value);
    }
    return (
        <form>
            <input type="text" value={val} onInput={changeText}/>
            <div>{val}</div>
        </form>
    )
}

export default Search;