import React from "react";
import { Link } from "react-router-dom";
import {ListGroup,ListGroupItem} from 'reactstrap';
const Menus=()=>{
    return(
        <ListGroup>
          <ListGroupItem tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-customer">Add Customer</ListGroupItem>
            <ListGroupItem tag="a" href="/all-customer">All Customer</ListGroupItem>
            <ListGroupItem tag="a" href="/update-customer">Update Customer</ListGroupItem>
            

            <ListGroupItem tag="a" href="/add-roomtype">Add Rooms</ListGroupItem>
            <ListGroupItem tag="a" href="/all-roomtype">All Rooms</ListGroupItem>
            <ListGroupItem tag="a" href="/update-roomtype">Update Rooms</ListGroupItem>
            
            <ListGroupItem tag="a" href="/contact">Contact Us</ListGroupItem>
            <ListGroupItem tag="a" href="/about">About Us</ListGroupItem>

        </ListGroup>
    );
    
}
export default Menus;