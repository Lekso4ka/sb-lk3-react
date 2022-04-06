import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Card from "./components/Card";
import Main from "./components/Main";

// const data = ["Cat", "Dog", "Parrot", "Humster", "Human", "Mouse", "Rabbit", "Pig"];
// const dataCards = data.map((pet, i) => <Card text={pet} key={i}/>);

const App = () => {
    return (
        <div className='container'>
            <Header/>
            {/* <Card/> */}
            {/* {dataCards} */}
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;