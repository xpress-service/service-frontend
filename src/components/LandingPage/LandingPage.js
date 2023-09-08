import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import OnDemand from './OnDemand'
import HowWeWork from '../HowWeWork/HowWeWork'
import Services from '../HowWeWork/Services'
import Footer from '../HowWeWork/Footer'

const LandingPage = () => {
  return (
    <div>
        <LandingPageHeader/>
        <OnDemand/>
        <HowWeWork/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default LandingPage