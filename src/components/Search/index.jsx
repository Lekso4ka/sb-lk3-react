import React, {useState} from "react";

const Search = () => {
    const [val, updateVal] = useState("tralala"); //хук состояния
    // onInput, onChange, onBlur, onFocus
    const changeText = (e) => {
        updateVal(e.target.value); //вызвать функцию updateVal и передать в нее новое значение переменной val
    }
    return (
        <form>
            <input type="text" value={val} onInput={changeText}/>
            <div>{val}</div>
        </form>
    )
}

export default Search;