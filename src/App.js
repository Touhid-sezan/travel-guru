import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import SpotBooking from './Components/SpotBooking/SpotBooking';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import News from './Components/News/News';
import Contact from './Components/Contact/Contact';
import Hotel from './Components/Hotel/Hotel';
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LoginRegister from './Components/LoginRegister/LoginRegister';

export const UserContext=createContext();
firebase.initializeApp(firebaseConfig);

function App() {

  const [loggedIn,setLoggedIn]=useState(false)
  const [name, setName]=useState("user")

  const [showSpot, setShowSpot ]=useState(
    {
      id:1,
        title:"Cox's Bazar",
        description:"Cox's Bazar sea beach is the longest sea beach in the world, 120 km long, having no 2nd instance. The wavy water of Bay of Bengal touches the beach throughout this 120 km.Cox's Bazar sea beach is the longest sea beach in the world, 120 km long, having no 2nd instance. The wavy water of Bay of Bengal touches the beach throughout this 120 km.",
        img:"https://i.ibb.co/mFxCRPJ/Rectangle-1.png"
  }
  )

  return (
    <UserContext.Provider value={[showSpot,setShowSpot, loggedIn, setLoggedIn, name, setName]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/book">
          <SpotBooking></SpotBooking>
        </Route>
        <Route path="/destination">
          <Destination></Destination>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/news">
          <News></News>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/loginOrRegister">
          <LoginRegister></LoginRegister>
        </Route>
        <PrivateRoute path="/hotel">
          <Hotel></Hotel>
        </PrivateRoute>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
