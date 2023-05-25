import logo from './logo.svg';
import './App.css';

import{ Button,Container, Row,col} from 'reactstrap';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Routes,
   RouterProvider
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Menus from './Components/Menus';
import AddCustomer from './Components/AddCustomer';
import AllCustomer from './Components/AllCustomer';
import UpdateCustomer from './Components/UpdateCustomer';
import Customer from './Components/Customer';
import AddRoomType from './Components/AddRoomType';
import AllRoomType from './Components/AllRoomType';
import UpdateRoomType from './Components/UpdateRoomType';
import RoomType from './Components/RoomType';
import Contact from './Components/Contact';
import About from './Components/About';
import ViewHotel from './Components/ViewHotel';



function App() {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <Container>
          <div className="row">
            <div className="col-4 col-md-4"><Menus/></div>
            <div className="col-8 col-md-8">
              <Router>
                <Routes>
                <Route path="/" element={<Home/>}exact/>
                    <Route path="/add-customer" element={<AddCustomer/>}exact/>
                    <Route path="/all-customer" element={<AllCustomer/>}exact/>
                    <Route path="/update-customer" element={<UpdateCustomer/>}exact/>
                    

                    <Route path="/add-roomtype" element={<AddRoomType/>}exact/>
                    <Route path="/all-roomtype" element={<AllRoomType/>}exact/>
                    <Route path="/update-roomtype" element={<UpdateRoomType/>}exact/>
                    <Route path="/contact" element={<Contact/>}exact/>
                    <Route path="/about" element={<About/>}exact/>
                    <Route path="/view-hotel" element={<ViewHotel/>}exact/>
                    
                    
                   
                </Routes>
              </Router>
            </div>
          </div>
      </Container>
      <br/>
      
    </div>
  );
}

export default App;