import React from 'react';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';

const Room = (props) => {
    const {title, star, reviewed, bedroom, bed, bath, img, guests, price, shortDescription}=props.room
    return (
        <div style={{display:"flex", padding:"10px", alignItems:"center"}}>
           <div>
               <img style={{width:"250px"}} src={img} alt=""/>
           </div>
           <div className="hotel-text-container" style={{marginLeft:"10px"}}>
               <h4 style={{margin:"0"}}>{title}</h4>
               <div className="hotel-features">
                   <span> guests : {guests},</span>
                   <span> bedrooms : {bedroom},</span>
                   <span> beds : {bed},</span>
                   <span> baths : {bath}</span>
               </div>
               <p>{shortDescription}</p>
               <div className="hotel-review" style={{display:"flex", alignItems:"center"}}>
               <StarRateOutlinedIcon style={{color:"orange"}}/>
                    <span>   {star}({reviewed})</span>
                    <b style={{marginLeft:"10px"}}>${ price}/<b>Night</b></b>
                    <span style={{marginLeft:"10px"}}>$167 total</span>
               </div>
           </div>
        </div>
    );
};

export default Room;