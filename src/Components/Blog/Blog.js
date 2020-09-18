import React, { useContext } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../Images/Logo.png';
import Header from '../Header/Header';


const Blog = () => {
    const [showSpot] = useContext(UserContext);
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showSpot.img})`,  height:"120vh", backgroundSize:"cover", padding:"0 30px"}}>

            <Header img={logo} color="white"></Header>
        <CardDeck>
  <Card>
    <Card.Img style={{width:"100%", height:"350px"}} variant="top" src="https://i.ibb.co/mFxCRPJ/Rectangle-1.png" />
    <Card.Body>
      <Card.Title>Cox Bazar</Card.Title>
      <Card.Text>
      Cox's Bazar sea beach is the longest sea beach in the world, 120 km long, having no 2nd instance. The wavy water of Bay of Bengal touches the beach throughout this 120 km.Cox's Bazar sea beach is the longest sea beach in the world, 120 km long, having no 2nd instance. The wavy water of Bay of Bengal touches the beach throughout this 120 km.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 days ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img style={{width:"100%", height:"350px"}} variant="top" src="https://i.ibb.co/Zd6g35F/Sreemongol.png" />
    <Card.Body>
      <Card.Title>SreeMongol</Card.Title>
      <Card.Text>
      Those who visit Srimangal do not forget to taste the satarang tea. Ramesh Ram Gaur (42) has been making a seven-color tea for almost 12 years. He has two shops – in the canteen of 14 rifle Battalion of Ramnagar and Kalighat Road in Manipuri area of ​​Srimangal.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 1 days ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img style={{width:"100%", height:"350px"}} variant="top" src="https://i.ibb.co/tq5qG4s/sundorbon.png" />
    <Card.Body>
      <Card.Title>Sundarban</Card.Title>
      <Card.Text>
      The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India’s Sundarbans World Heritage site inscribed in 1987.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 5 days ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
    );
};

export default Blog;