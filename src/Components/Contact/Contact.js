import React, { useContext } from 'react';
import Header from '../Header/Header';
import logo from '../../Images/Logo.png';
import { UserContext } from '../../App';

const Contact = () => {
    const [showSpot] = useContext(UserContext);
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showSpot.img})`,  height:"120vh", backgroundSize:"cover", padding:"0 30px"}}>

            <Header img={logo} color="white"></Header>
            <div className="container" style={{textAlign:"center", color:"white", marginTop:"150px"}}>
                <h1>We'd love to hear from you</h1>
                <p>Whether you have questions about features, pricing, or anything else, our team</p>
                <p>is ready to answer all your question</p>
                <button className="btn btn-primary">Get in touch</button>
            </div>
        </div>
    );
};

export default Contact;