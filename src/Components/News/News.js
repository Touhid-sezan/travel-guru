import React, { useContext } from 'react';
import Header from '../Header/Header';
import newsPic from '../../Images/news-cox.jpg';
import { MyContext } from '../../App';


const News = () => {
    const [showArea] = useContext(MyContext);
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showArea.img})`, height: "140vh", backgroundSize: "cover", padding: "0 30px", color: "white" }}>

            <Header></Header>
            <div className="container">
                <h1>Cox's Bazar businesses getting ready to host tourists after Eid</h1>
                <p>Published:  July 27, 2020 20:30:22 </p>
                <img style={{ height: "290px" }} src={newsPic} alt="" />
                <br/>
                <br/>
                <p> Hit hard by Covid-19 fallout, businesses in the tourism sector in the beach town of Cox's   
                    Around 470 hotels and motels, over 2,000 food outlets, Burmese Market, tourism-based business houses and thousands of workers in the sector have remained almost idle since March 18 following the coronavirus outbreak in the country.
                    "Tourism and relevant businesses will be allowed to reopen after Eid-ul-Azha with strict conditions (health protocols) in place," Deputy Commissioner of Cox's Bazar M Kamal Hossain said, reports UNB.
                </p>
                <p>
                    Residential hotels, restaurants and businesses linked to the tourism industry will be given permission to reopen if they can maintain health guidelines strictly and take other preventive measures to stop transmission of COVID-19 virus, he said.
                    "It's true that the tourism industry is hit hard and suffered losses amid the closure of tourism activities due to COVID-19. The sector will gradually regain pace if businesses are reopened after Eid-ul-Azha," Kamal Hossain said.On March 18, the authorities imposed a ban on public gatherings at different tourist spots in Cox's Bazar, Sylhet, Chattogram and Patuakhali to slow down the coronavirus transmission among people.Cox's Bazar district administration enforced restrictions on arrival of tourists in the city and all sorts of gathering at beaches.
                </p>
            </div>
        </div>
    );
};

export default News;