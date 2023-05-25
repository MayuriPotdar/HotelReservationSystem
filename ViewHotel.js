import React, { Fragment } from "react";
import logo1 from './../Images/ac-room.jpeg';
import img2 from './../Images/img2.webp';
import img3 from './../Images/img3.jpg';

function ViewHotel()
{
    return(
        <Fragment>
        
             <div>
             <h4>Single Bed Room</h4>
             <img src={img2} alt="hotelimg"/>
             <h4>Double Bed Room</h4>
             <img src={img3} alt="hotelimg" height={450} width={500}/>
             <h4>A/C Bed Room</h4>
             <img src={logo1} alt="hotelimg" height={450} width={500}/><br/>
             </div>
             </Fragment>
    )

}
export default ViewHotel;