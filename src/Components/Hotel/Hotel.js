import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { hotelData } from '../../fakeData/travelGuruData';
import Header from '../Header/Header';
import Map from '../Maps/Map';
import Room from './Room/Room';

const Hotel = () => {
    const [showSpot] = useContext(UserContext);

    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showSpot.img})`,  height:"125vh", backgroundSize:"cover", padding:"0 30px", color:"white"}}>
            <Header></Header>
            <Grid container item xs={12} justify="space-between" style={{marginTop:"30px"}}>

               <Grid item xs={12} md={6}>
                   <div style={{marginLeft:"15px"}}>
                        <p>252 Stays here</p>
                        <h3 style={{margin:0}}>Stay in Cox's Bazar</h3>
                   </div>
                {
                    hotelData.map(room=>{
                        return (
                            <Room room={room}></Room>
                        )
                    })
                }
               </Grid>

               <Grid item xs={12} md={6}>
                <Map></Map>
               </Grid>
           </Grid>
        </div>
    );
};

export default Hotel;