import React from 'react'
import { Navigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import './AboutUs.css'

// src/components/Home/Home.js

// import CSS
import './Home.css';

const Home = (props) => {

  const[homee,setHomee]=React.useState(false)
  const[places,setPlaces]=React.useState(false)
  const[aboutuss,setAboutuss]=React.useState(false)
  const[supportt,setSupportt]=React.useState(false)
  const[logoutt,setLogoutt]=React.useState(false)
  const[payment,setPayment]=React.useState(false)
  if(homee)
  {
    return <Navigate to="/home"/>
  }
  if(places)
  {
    return <Navigate to="/places"/>
  }
  
  if(supportt)
  {
    return <Navigate to="/support"/>
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
      <div className='page-one'>
      <Box sx={{ flexGrow: 1, color:red}}>
    <AppBar style={{backgroundColor:'black',height: '50px',display: 'flex',justifyContent: 'center'}}>
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
              <Button color="inherit" onClick={()=>{setPayment(true)}}>Payment</Button>
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
</div>
        <div>
            <div className="banner-container-2">
                <div className="text-center">
                  <h1 className='home-title-2'>About this Page</h1>
                    <p className='para'>
                    On a daily basis, Travel Guides sell travel packages. They give advice on sightseeing and shopping.
A typical day for a Travel Guide will also include:
Set up camps, and prepare meals for tour group members.Plan tour itineraries, applying knowledge of travel routes and destination sites.Resolve any problems with itineraries, service, or accommodations.Attend to special needs of tour participants.Arrange for tour or expedition details such as accommodations, transportation, equipment, and the availability of medical personnel.
                    </p>
                </div>
            </div>
        </div>
       
        </>
    );
};

export default Home;