import emailjs from '@emailjs/browser';
import {useRef, useState } from "react";
import './Support.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './PageOne.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { red } from '@mui/material/colors';
import { Navigate } from 'react-router-dom';

function Support() {
  

  const form = useRef();
  const[submiterror,setsubmiterror]=useState(true)
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_f1gyr7v', 'template_np880ww', form.current, '3OmwcuWocmcP7Yhmo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const[homee,setHomee]=React.useState(false)
  const[places,setPlaces]=React.useState(false)
  const[aboutuss,setAboutuss]=React.useState(false)
  const[supportt,setSupportt]=React.useState(false)
  const[logoutt,setLogoutt]=React.useState(false)
  const[payment,setpayment]=React.useState(false)
  if(homee)
  {
    return <Navigate to="/home"/>
  }
  if(places)
  {
    return <Navigate to="/places"/>
  }
  if(aboutuss)
  {
    return <Navigate to="/aboutus"/>
  }
  
  if(logoutt)
  {
    return <Navigate to="/"/>
  }
  if(payment)
  {
    return <Navigate to="/payment"/>
  }

  return (
    <>
     <Box sx={{ flexGrow: 1, color:red}}>
          <AppBar style={{backgroundColor:'black'}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="static"
                aria-label="menu"
                sx={{ mr: 4 }}
              >
                <img src='imageOne.png' className='logo-size'></img>
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <p className='gotrip-index'>goTrip!</p>
              </Typography>
              <div  className='home-button'>
              <Button color="inherit" onClick={()=>{setHomee(true)}}>Home</Button>
              </div>
              <div  className='places-button'>
              <Button color="inherit" onClick={()=>{setPlaces(true)}}>Places</Button>
              </div>
              <div  className='places-button'>
              <Button color="inherit" onClick={()=>{setPlaces(true)}}>Payment</Button>
              </div>
              <div  className='aboutus-button'>
              <Button color="inherit" onClick={()=>{setAboutuss(true)}}>AboutUs</Button>

              </div>
              <div  className='support-button'>
              <Button color="inherit" onClick={()=>{setSupportt(true)}}>Support</Button>

              </div>
              <div className='logout'>
                <Button color="inherit" onClick={()=>{setLogoutt(true)}}>Logout</Button>
              </div>
              
            </Toolbar>
          </AppBar>
        </Box>
    
    <div className='center'>
      <div className='support-div'>
          <div>
            <img className='logo-img' src='ImageOne.png'></img>
          </div>
        <div className='support2-div'>

        <form ref={form} onSubmit={sendEmail}>
        <div className='align'>
          <p>Name</p>
          <input className='name-input' type="text" name="user_name"/>
        </div>
          <div className='align'>
            <p >Email</p>
            <input className='email-input' type="email" name="user_email" />
          </div>
          <div className='align'>
            <p className='mess-para'>Message</p>
            <textarea className='mess-input' name="message" />
          </div>
          <div>
            <input className='submit-box' type="submit" value="Submit" />
            
            <div>
                  {submiterror}
            </div>
          </div>
          
        </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Support