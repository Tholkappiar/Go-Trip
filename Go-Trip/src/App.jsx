import React from 'react'
import LoginPage from './Project/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import HomePage from './Project/HomePage';
import PageOne from './Project/PageOne'
import Places from './Project/Places';
import './App.css'
import Support from './Project/Support';
import AboutUs from './Project/AboutUs';
import PageTwo from './Project/PageTwo';
import PageThree from './Project/PageThree';
import PageFour from './Project/PageFour';
import PageFive from './Project/PageFive';
import PageSix from './Project/PageSix';
import PayMent from './Project/PayMent';


function App() {
 

  return (
    <div ><BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/Places" element={<Places/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/malls" element={<PageOne/>}/>
      <Route path="/theatre" element={<PageTwo/>}/>
      <Route path="/theme" element={<PageThree/>}/>
      <Route path="/bus" element={<PageFour/>}/>
      <Route path="/rail" element={<PageFive/>}/>
      <Route path="/air" element={<PageSix/>}/>
      <Route path="/payment" element={<PayMent/>}/>
      </Routes>
      </BrowserRouter></div>
  )
}

export default App