import React from "react";
import { CardFooter, CardText, CardTitle } from "reactstrap";

function Contact()
{
    return(
        <div className="border text-center">
            <card>
                <CardTitle><h2>Contact Us :</h2></CardTitle>
                <CardText>
                    <h3>
                    Customer Care Number: 199-90-200</h3>
                </CardText><br/>
                <CardTitle><h2>Address :</h2></CardTitle>
                <CardText>
                    <h4>Shri Krishna Hotel,5/A Gulab Estate, Safed Pool, Sakinaka, T2 Link Road, Andheri Kurla Road, Mumbai, Maharashtra, 400072
                    </h4>
                </CardText><br/>
                
               <CardText><h5>Contcat Us On Our Customer Care Number If You Have Any Query...</h5></CardText><br/>
               <CardFooter><h3>Thank You....</h3></CardFooter>
            </card>

        </div>
    )
}
export default Contact;