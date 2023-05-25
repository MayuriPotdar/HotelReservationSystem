import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
import ViewHotel from "./ViewHotel";
import logo1 from './../Images/img1.webp';
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Learn Code with Amruta";
},[]);
    return(
        
    <div >
       
       <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>Reserve Your Room Here..</CardTitle>
            
            <p> 
                    This is my hotel reservation system.for admin only for manage customer and rooms.
            </p>
            <Container className="text-center">
                <Button color="primary" outline href="view-hotel" >See Hotel</Button>
                
            </Container>
           
        </CardBody>
        </Card> 
        <div>
            <img src={logo1} alt="hotelimg" height={400} width={750}/>
            </div>
     </div>
    );
};
export default Home;