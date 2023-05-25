import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const UpdateRoomType=()=>{
    useEffect(()=>{
        document.title="UPDATE Room || Update Room information of hotel";
},[]);

    const [roomtype,setroomtype]=useState({});

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
            toast.success("Course updated successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-3">Update Room Details</h1>
        <Form onSubmit={handleForm}>

           
        <FormGroup>
                <label for="roomNo">Customer Id</label>
                <Input
                        Type="text"
                        placeholder="Enter Room No here"
                        name="roomNo"
                        Id="roomNo"
                        onChange={(e)=>{
                            setroomtype({...roomtype,roomNo:e.target.value});
                        }}
                />
            </FormGroup>
               
            <FormGroup>
                <label for="roomType">Room Type</label>
                <Input
                        Type="text"
                        placeholder="Enter Room Type(like A/C Room/Non A/C Room) "
                        name="roomType"
                        Id="roomType"
                        onChange={(e)=>{
                            setroomtype({...roomtype,roomType:e.target.value});
                        }}
                />
                </FormGroup>
                
                <FormGroup>
                <label for="noofPerson">No Of Person:</label>
                <Input
                        Type="text"
                        placeholder="Enter No Of person(Capacity of room) "
                        name="noofPerson"
                        Id="noofPerson"
                        onChange={(e)=>{
                            setroomtype({...roomtype,noofPerson:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="rent">Rent Of Room</label>
                <Input
                        Type="text"
                        placeholder="Enter Rent Of Room(As per Person)"
                        name="rent"
                        Id="rent"
                        onChange={(e)=>{
                            setroomtype({...roomtype,rent:e.target.value});
                        }}
                />
                </FormGroup>
                
                
                
                <Container className="text-center">
                    <Button type="submit" color="success">Update Room</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default UpdateRoomType;