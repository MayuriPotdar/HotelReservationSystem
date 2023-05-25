import React from "react";
import { Card, CardBody } from "reactstrap";
import logo1 from './../Images/logo1.png';

function Header({name,title}){
    return(
        <div className="bg-info">
           
            
        <div>
            <img src={logo1} alt="hotelimg" height={150} width={200}/>
            </div>

                <div>
                <h1 className="text-center"> Welcome To Hotel Shri Krishna..</h1>
                </div>
            
        </div>
    );
}

export default Header;