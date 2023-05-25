import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const RoomType=({roomtype,update})=>{

  //delete grocery
  const deleteRoomType=(roomNo)=>{
    axios.delete(`${base_url}/rooms/${roomNo}`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Room deleted successfully");
        update(roomNo);
      })
       .catch((error)=>{
       console.error(error);
        toast.error("Room not deleted");
      });
    
  }
  //form handler function
  const handleForm=(e)=>{
    console.log(roomtype);
    postDatatoServer(roomtype);
    e.preventDefault();
}
//creating function to post data on server
const postDatatoServer=(data)=>{
axios.post(`${base_url}/rooms`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("room deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
    <CardSubtitle className="font-weight-bold">Room No:{roomtype.roomNo}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">Room Type:{roomtype.roomType}</CardSubtitle>
          <CardText>No Of Person:{roomtype.noofPerson}</CardText> 
          <CardText>Rent:{roomtype.rent}</CardText>  
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteRoomType(roomtype.roomNo);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-roomtype">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default RoomType;