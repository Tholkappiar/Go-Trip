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
import './Places.css'

export default function Places() {
  
      React.useEffect(() => {
        AOS.init();
      }, [])
  const[homee,setHomee]=React.useState(false)
  const[places,setPlaces]=React.useState(false)
  const[aboutuss,setAboutuss]=React.useState(false)
  const[supportt,setSupportt]=React.useState(false)
  const[logoutt,setLogoutt]=React.useState(false)
  const[malls,setMalls]=React.useState(false)
  const[theatre,setTheatre]=React.useState(false)
  const[theme,setTheme]=React.useState(false)
  const[bus,setBus]=React.useState(false)
  const[rail,setRail]=React.useState(false)
  const[air,setAir]=React.useState(false)
  const[payment,setPayment]=React.useState(false)
  if(homee)
  {
    return <Navigate to="/home"/>
  }
  
  if(aboutuss)
  {
    return <Navigate to="/aboutus"/>
  }
  if(supportt)
  {
    return <Navigate to="/support"/>
  }
  if(logoutt)
  {
    return <Navigate to="/"/>
  }
  if(malls)
  {
    return <Navigate to="/malls"/>
  }
  if(theatre)
  {
    return <Navigate to="/theatre"/>
  }
  if(theme)
  {
    return <Navigate to="/theme"/>
  }
  if(bus)
  {
    return <Navigate to="/bus"/>
  }
  if(rail)
  {
    return <Navigate to="/rail"/>
  }
  if(air)
  {
    return <Navigate to="/air"/>
  }
  if(payment)
  {
    return <Navigate to="/payment"/>
  }
  return (
    <div className='Places'>
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
      <div className='align-places'>
        <div className='button-flex'>

        <img src='/images/mallh.jpg' className='mallh' onClick={()=>setMalls(true)}></img>
        <Button style={{backgroundColor: "#093545",color:'white'}} onClick={()=>setMalls(true)}> Malls </Button>
        </div>
        <div className='button-flex'>

        <img src='/images/theatre.jpg' className='mallh'   onClick={()=>setTheatre(true)} ></img>
        <Button className='but' style={{backgroundColor: "#093545",color:'white'}}  onClick={()=>setTheatre(true)}>Theatres</Button>
        </div>
        <div className='button-flex'>

        <img src='/images/themeh.jpg' className='mallh'  onClick={()=>setTheme(true)}></img>
       
        <Button className='but' style={{backgroundColor: "#093545",color:'white'}} onClick={()=>setTheme(true)}>Theme Parks</Button>
        </div>
        <div className='button-flex'>

        <img src='/images/bush.jpg' className='mallh'  onClick={()=>setBus(true)}></img>
        
        <Button className='but'  style={{backgroundColor: "#093545",color:'white'}} onClick={()=>setBus(true)}>Bus Stands</Button>
        </div>
        <div className='button-flex'>

        <img src='/images/railh.jpg' className='mallh'  onClick={()=>setRail(true)}></img>
        <Button className='but' style={{backgroundColor: "#093545",color:'white'}} onClick={()=>setRail(true)}>Railway Stations</Button>
        </div>
        <div className='button-flex'>

        <img src='/images/airhh.jpg' className='mallh' onClick={()=>setAir(true)}></img>
        <Button className='but'  style={{backgroundColor: "#093545",color:'white'}} onClick={()=>setAir(true)}>Airports</Button>
        </div>
      </div>
  </div>
  );
}

