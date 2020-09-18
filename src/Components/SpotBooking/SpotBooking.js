import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { FormGroup, Grid } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './SpotBooking.css';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

const SpotBooking = () => {
    const [showSpot] = useContext(UserContext);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const history = useHistory();
    const handleBookingForm =(event)=>{
        event.preventDefault()
        history.push("hotel")
    }
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showSpot.img})`,  height:"100vh", backgroundSize:"cover", padding:"0 30px"}}>
            <Header></Header>
            <Grid container item xs={12} justify="space-around"> 

                <Grid item xs={12} md={6} style={{padding:"0 9%"}}>
                    <h1 style={{ color: "white", fontSize: "60px", textAlign: "center",lineHeight:"70px",marginTop:"120px" }}>
                        {showSpot.title}
                    </h1>
                    <p style={{ color: "white",fontSize: "14px",fontWeight:"300", marginLeft:"50px"}}>{showSpot.description}</p>
                </Grid>

                <Grid item xs={12} md={6} style={{padding:"70px 8%"}}>
                    <form onSubmit={handleBookingForm} className="SpotBooking-form" style={{padding:"30px"}}>
                        <FormGroup className="form-group" >
                            <label htmlFor="origin">Origin</label>
                            <input id="origin" type="text" required/>

                            <label htmlFor="origin">Destination</label>
                            <input id="origin" type="text" required/>

                            <div style={{display:"flex"}}>
                                <div className="date-pick">
                                    <label htmlFor="origin">From</label>
                                    <DatePicker selected={fromDate} onChange={date => setFromDate(date)} required></DatePicker>
                                </div>

                                <div className="date-pick">
                                    <label htmlFor="origin">To</label>
                                    <DatePicker selected={toDate} onChange={date => setToDate(date)}required></DatePicker>
                                </div>
                            </div>
                                <button style={{width:"100%", background:"#f79f1b", border:"none",height:"40px",borderRadius:"20px"}}>Start Booking</button>   
                        </FormGroup>
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default SpotBooking;