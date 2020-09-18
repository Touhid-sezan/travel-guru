import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import SpotArea from '../SpotArea/SpotArea';



const Home = () => {
    const [showSpot]=useContext(UserContext);


    return (
        <div>
            <div className="home-container" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showSpot.img})`,  height:"100vh", backgroundSize:"cover"}}>
            <Header></Header>
            <SpotArea></SpotArea>
            </div>
        </div>
    );
};

export default Home