import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { FormGroup, Grid } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './SpotBooking.css';
import { MyContext } from '../../App';

const SpotBooking = () => {
    const [showArea] = useContext(MyContext);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showArea.img})`,  height:"100vh", backgroundSize:"cover", padding:"0 30px"}}>

            <Header></Header>
            
            <Grid container item xs={12} justify="space-around"> 

                <Grid item xs={12} md={6} style={{padding:"0 9%"}}>
                    <h1 style={{ color: "white", fontSize: "60px", textAlign: "center",lineHeight:"70px",marginTop:"120px" }}>
                        {showArea.title}
                    </h1>
                    <p style={{ color: "white",fontSize: "14px",fontWeight:"300", marginLeft:"50px"}}>{showArea.description}</p>
                </Grid>

                <Grid item xs={12} md={6} style={{padding:"70px 8%"}}>
                    <form className="SpotBooking-form" style={{padding:"30px"}}>
                        <FormGroup className="form-group" >
                            <label htmlFor="origin">Origin</label>
                            <input id="origin" type="text" required/>

                            <label htmlFor="origin">Destination</label>
                            <input id="origin" type="text" required/>

                            <div style={{display:"flex"}}>
                                <div className="date-pick">
                                    <label htmlFor="origin">From</label>
                                    <DatePicker selected={from} onChange={date => setFrom(date)} required></DatePicker>
                                </div>

                                <div className="date-pick">
                                    <label htmlFor="origin">To</label>
                                    <DatePicker selected={to} onChange={date => setTo(date)}required></DatePicker>
                                </div>
                            </div>
                                <input type="submit" value="Start SpotBooking"/>   
                        </FormGroup>
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default SpotBooking;