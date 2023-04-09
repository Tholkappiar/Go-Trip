import React, { useEffect, useState } from 'react';
import './Home.css';
import backgroundvideo from './video/Arial Trimmed.mp4';
import Typewriter from "typewriter-effect";
import { TwitterOutlined , WhatsAppOutlined , FacebookOutlined , InstagramOutlined } from '@ant-design/icons';
import styled from "styled-components";
import HotelIcon from '@mui/icons-material/Hotel';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KingBedIcon from '@mui/icons-material/KingBed';
import singapore from './video/places/Singapore.jpg';
import Thailand from './video/places/Thailand.jpg';
import Paris from './video/places/Paris.jpg';
import NewZealand from './video/places/NewZealand.jpg';
import BoraBora from './video/places/BoraBora.jpg';
import London from './video/places/London.jpg';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import feed from './video/images/feed.jpg';
import feed1 from './video/images/feed1.jpg';
import feed2 from './video/images/feed2.jpg';
import feed3 from './video/images/feed3.jpg';
import prof from './video/images/prof.jpg';
import pers1 from './video/images/pers1.jpg';
import pers2 from './video/images/pers2.jpg';
import pers3 from './video/images/pers3.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Navigate } from 'react-router-dom';
import { Payment } from '@mui/icons-material';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: feed,
    srcPath: prof
  },
  {
    imgPath: feed1,
    srcPath: pers1
  },
  {
    imgPath: feed2,
    srcPath: pers2
  },
  {
    imgPath: feed3,
    srcPath: pers3
  },
];



function Home() {
  

                             // ---FIRST PAGE---

    const [scrollY, setScrollY] = useState(0);

    // Update the scroll position when the window is scrolled
    useEffect(() => {
      function handleScroll() {
        setScrollY(window.scrollY);
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Calculate the navbar and text colors based on the scroll position
    let navbarColor = scrollY > 200 ? 'black' : 'transparent';
    let TextColor = scrollY > 200 ? "white" : "white";

                           // ---SECOND PAGE---

                        const data = [
                            {
                              image: singapore,
                              title: "Singapore",
                              subTitle: "Singapore, officialy thr Republic of Singapore, is a",
                              cost: "38,800",
                              duration: "Approx 2 night trip",
                            },
                            {
                              image: Thailand,
                              title: "Thailand",
                              subTitle: "Thailand is a Southeast Asia country. It's known for",
                              cost: "54,200",
                              duration: "Approx 2 night trip",
                            },
                            {
                              image: Paris,
                              title: "Paris",
                              subTitle: "Paris, France's capital, is a major European city and a",
                              cost: "45,500",
                              duration: "Approx 2 night trip",
                            },
                            {
                              image: NewZealand,
                              title: "New Zealand",
                              subTitle: "New Zealand is an island country in the",
                              cost: "24,100",
                              duration: "Approx 1 night trip",
                            },
                            {
                              image: BoraBora,
                              title: "Bora Bora",
                              subTitle: "Bora Bora is a small South Pacific island northwest of",
                              cost: "95,400",
                              duration: "Approx 2 night 2 day trip",
                            },
                            {
                              image: London,
                              title: "London",
                              subTitle: "London, the capital of England and the United",
                              cost: "38,800",
                              duration: "Approx 3 night 2 day trip",
                            },
                          ];
                        
                          const [active, setActive] = useState(1);

                              // ---FOURTH PAGE---

                              const theme = useTheme();
                              const [activeStep, setActiveStep] = React.useState(0);
                              const maxSteps = images.length;
                            
                              const handleNext = () => {
                                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                              };
                            
                              const handleBack = () => {
                                setActiveStep((prevActiveStep) => prevActiveStep - 1);
                              };
                            
                              const handleStepChange = (step) => {
                                setActiveStep(step);
                              };

                              {/*-----FIFTH PAGE----- */}
      const today = new Date();
      const[homee,setHomee]=React.useState(false)
  const[places,setPlaces]=React.useState(false)
  const[aboutuss,setAboutuss]=React.useState(false)
  const[supportt,setSupportt]=React.useState(false)
  const[logoutt,setLogoutt]=React.useState(false)
  const[payment,setPayment]=React.useState(false)
  
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
  if(payment)
  {
    return <Navigate to="/payment"/>
  }
  return (
                            //---FIRST PAGE---
 <div>
    <div>
      <div className='first'>
                
        <div className='nav' style={{  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',backgroundColor: navbarColor }}>
                    <p className='nav-title' style={{ color: TextColor,transition: 'color 0.7s' }}>
                        goTrip
                    </p>
           <div className='nav-heading'>
                        <button style={{ color: TextColor,transition: 'color 0.7s'}} className='nav-head' onClick={()=>{setHomee(true)}}>Home</button>
                        <button style={{ color: TextColor,transition: 'color 0.7s' }} className='nav-head' onClick={()=>{setPlaces(true)}}>Places</button>
                        <button style={{ color: TextColor,transition: 'color 0.7s' }} className='nav-head' onClick={()=>{setAboutuss(true)}}>About us</button>
                        <button style={{ color: TextColor,transition: 'color 0.7s' }} className='nav-head' onClick={()=>{setSupportt(true)}}>Support</button>
                        <button style={{ color: TextColor,transition: 'color 0.7s' }} className='nav-head' onClick={()=>{setPayment(true)}}>Payment</button>
                        <button style={{ color: TextColor,transition: 'color 0.7s' }} className='nav-head' onClick={()=>{setLogoutt(true)}}>Logout</button>
                    </div>
                </div>
            
            </div>
            <div className='first' style={{position: 'relative', textAlign: 'center'}}>
                <video autoPlay muted loop
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '90vh',
                    objectFit: 'cover',
                    margin: "0px"
                }} >
                
                    <source src={backgroundvideo} type='video/mp4' />
                </video>
                <h1 className='web-title' style={{position: 'absolute', top: '45%', left: '5%', transform: 'translate(-50%, -50%),'}}>
                    <Typewriter
                        onInit={(typewriter)=> {
                        typewriter
                        .typeString("Travel the world with us...") 
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("goTrip Welcomes You")
                        .start();
                        }}
                    />
                </h1>
                <p className='title-quote' style={{position: 'absolute', top: '58%', left: '5%', transform: 'translate(-50%, -50%),'}}> - A journey of a thousand miles begins with a single step</p>
                
                <div className='below' style={{position: 'absolute', top: '74%', left: '15%', transform: 'translate(-50%, -50%),'}}>
                    <div>
                        Get Started
                    </div>
                    <button className='start-button'>
                        Learn More
                    </button>
                </div>
                <div className='icons-div' style={{position: 'absolute', top: '30%', left: '95%', transform: 'translate(-50%, -50%),'}}>
                    <button className='icon-button'><InstagramOutlined className='icons' /></button>
                    <button className='icon-button'><FacebookOutlined className='icons' /></button>
                    <button className='icon-button'><WhatsAppOutlined className='icons' /></button>
                    <button className='icon-button'><TwitterOutlined className='icons' /></button>

                </div>
            </div>
        </div>

                            {/*------ SECOND PAGE-----*/}

                            
      <Section>
      <div className='client-div'>
  <p className='happy'>
    Destinations
  </p>
  <hr style={{width: '400px'}}/>
</div>
        <div className="destinations">
            {data.map((destination) => {
              return (
                <div className="destination">
                  <img src={destination.image} alt="" onClick={()=>{setPayment(true)}}/>
                  <h3>{destination.title}</h3>
                  <p>{destination.subTitle}</p>
                  <div className="info">
                    <div className="services">
                      <HotelIcon/>
                      <AcUnitIcon />
                      <KingBedIcon />
                    </div>
                    <h4>{destination.cost}</h4>
                  </div>
                  <div className="distance">
                    <span>1000 Kms</span>
                    <span>{destination.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
    </Section>


                          {/*------THIRD PAGE------- */}
                          <div className='client-div'>
  <p className='happy'>
    Our Achievements
  </p>
  <hr style={{width: '400px'}}/>
</div>
                          <div className='page'>
         <section className="section-work-data">
            
                <div>
                    <h2 className="counter-numbers">100+</h2>
                    <p>project completed</p>
                </div>
                <div>
                    <h2 className="counter-numbers">1000+</h2>
                    <p>Happy Clients</p>
                </div>
                <div>
                    <h2 className="counter-numbers">10000+</h2>
                    <p>cups of coffee</p>
                </div>
                <div>
                    <h2 className="counter-numbers">200+</h2>
                    <p>real professionals</p>
                </div>
            
        </section>
    </div>

                          {/*------FOURTH PAGE------ */}

                          <div>


<div className='client-div'>
  <p className='happy'>
    Happy Clients
  </p>
  <hr style={{width: '400px'}}/>
</div>
<div className='Testimonal'><center>
<Box className='box' sx={{ maxWidth: 500, flexGrow: 1 }}>
  <AutoPlaySwipeableViews
    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
  >
    {images.map((step, index) => (
      <div  key={step.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
>
        {Math.abs(activeStep - index) <= 2 ? (
          <Box
            component="img"
            sx={{
              height: 200,
              display: 'block',
              maxWidth: 600,
              overflow: 'hidden',
              width: '100%',
              alignItems: 'center'
            }}
            src={step.srcPath}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%'
              
            }}
          />
          
          
        ) : null}
        </div>
    
    ))}
  </AutoPlaySwipeableViews>
</Box>


                {/* <-------!   Second Box   !--------->*/} 

<Box className='box' sx={{ maxWidth: 700, flexGrow: 1 }}>

<AutoPlaySwipeableViews
axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
index={activeStep}
onChangeIndex={handleStepChange}
enableMouseEvents
>
{images.map((step, index) => (
  <div key={step.label} style={{
display: 'flex',
alignItems: 'center',
justifyContent: 'center'
}}
>
    {Math.abs(activeStep - index) <= 2 ? (
      <Box
        component="img"
        sx={{
          height: 200,
          display: 'block',
          maxWidth: 700,
          overflow: 'hidden',
          width: '100%',
          alignItems: 'center',
        }}
        src={step.imgPath}
      />
    ) : null}
  </div>
))}
</AutoPlaySwipeableViews>


</Box>
</center>
</div>
</div>

                        {/*------FIFTH PAGE------ */}
  

                        <div style={{backgroundColor: 'rgb(118, 117, 116)'}}>
        <div className='footer-div'>
              <div className='para'>
                

                      <div className='icons'>
                          <InstagramIcon/>
                          <YouTubeIcon/>
                          <FacebookIcon/>
                          <WhatsAppIcon/>
                          <TwitterIcon/>
                      </div>
                  
              </div>
              <div style={{color: "white"}}>
                  {today.getFullYear()} | All rights Reserved | Terms of Service | Privacy and Policy
              </div>
        </div>
        

        
    </div>
 </div>

 
 ); 
}
const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
export default Home