import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";



// SPA - single page application

const App = () => {
    const [searchText, changeText] = useState("");
    return (
        <div className='container'>
            <Header searchText={searchText} changeText={changeText}/>
            <Main search={searchText} />
            <Footer/>
        </div>
    )
}

export default App;