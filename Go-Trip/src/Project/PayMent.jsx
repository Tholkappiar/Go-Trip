import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import './PayMent.css';
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
import payimg from '../images/payyy.jpeg'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      setError(null);
      console.log(result);
      setSuccess(true);
    }
  };
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
        <div className='pay-image'>
        <img  src={payimg} ></img>
        </div>
      
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement className="card-element" />
      <button type="submit" disabled={!stripe} className="pay-button">
        Pay
      </button>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Payment successful!</p>}
    </form>
    </div>
    </div>
  );
};

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentForm;
