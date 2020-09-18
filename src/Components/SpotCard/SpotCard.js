import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../App";



const ShopCard = (props) => {
  const [showSpot,setShowSpot] = useContext(UserContext);
  const { title, img } = props.spot;

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    width: "215px",
    borderRadius:"10px",
    marginRight:"30px",
    border: "2px solid rgb(255 217 31)",
  };
  return (
    <Grid item xs={12} md={4}>
      <div onClick={() => setShowSpot(props.spot)} style={backgroundStyle}>
      <h2 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>
        {title}
      </h2>
    </div>
    </Grid>
  );
};

export default ShopCard;