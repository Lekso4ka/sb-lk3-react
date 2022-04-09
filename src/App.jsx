import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";

const App = () => {
    const [searchText, changeText] = useState("");
    return (
        <div className='container'>
            <Header searchText={searchText} changeText={changeText}/>
            {searchText && <div>Вы ищите {searchText}</div>}
            <Main search={searchText}/>
            <Footer/>
        </div>
    )
}

export default App;