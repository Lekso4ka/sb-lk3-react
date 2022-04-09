import React from "react";
import Main from "../components/Main"

const Catalog = ({searchText, setCnt}) => {
    return (
        <>
            <h1>Каталог</h1>
            {searchText && <div className='search__item'>По запросу <strong>{searchText}</strong> найдено {searchCnt} товаров</div>}
            <Main search={searchText} setCnt={setCnt}/>
        </>
    )
}

export default Catalog;