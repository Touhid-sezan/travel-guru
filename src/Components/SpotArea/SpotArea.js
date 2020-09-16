import { Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import { touristSpot } from "../../fakeData/travelGuruData";
import SpotCard from "../SpotCard/SpotCard";
const SpotArea = () => {
    const [showArea] = useContext(MyContext);
    return (
        <Grid container item xs={12} justify="space-between">
            <Grid item md={4} style={{ padding: "20px" }}>
                <h1 style={{ color: "white", fontSize: "60px", textAlign: "center",lineHeight:"70px",marginTop:"120px" }}>
                    {showArea.title}
                </h1>
                <p style={{ color: "white",fontSize: "14px",fontWeight:"300", marginLeft:"40px"}}>{showArea.description}</p>
                <Link to="/book" style={{textDecoration:'none', color:"black"}}>
                    <Button style={{background:"orange", marginLeft:"40px"}}  variant="contained">Booking</Button>
                </Link>

            </Grid>
            <Grid container item md={8} justify="center" style={{ display: "flex", marginTop: "100px" }}>
                {touristSpot.map((spot) => {
                    return <SpotCard key={spot.id} spot={spot}></SpotCard>;
                })}
            </Grid>
        </Grid>
    );
};

export default SpotArea;