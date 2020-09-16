import React, { createContext, useContext, useState } from 'react';
import { MyContext } from '../../App';
import Header from '../Header/Header';
import SpotArea from '../SpotArea/SpotArea';



const Home = () => {
    const [showArea]=useContext(MyContext);


    return (
        <div>
            <div className="home-container" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showArea.img})`,  height:"100vh", backgroundSize:"cover"}}>
            <Header color="white"></Header>
            <SpotArea></SpotArea>
            </div>
        </div>
    );
};

export default Home