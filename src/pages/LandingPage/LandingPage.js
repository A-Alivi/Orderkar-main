import React from 'react'
import Home from '../Home/Home'
import Services from '../Services/Services'
import About from '../AboutUs/About'
import Prices from '../Pricing/Pricing'
import Contact from '../ContactUs/Contact'
import Features from '../Features/Features'

function LandingPage() {
  return (
    <div>
     
      <Home />
      <Services /> 
      <Prices/>
      <Features/>
      <About />
      <Contact />
      
    </div>
  )
}

export default LandingPage
