import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import OnDemand from './OnDemand'
import HowWeWork from '../HowWeWork/HowWeWork'
import Services from '../HowWeWork/Services'
import Footer from '../HowWeWork/Footer'
import Comments from './Comments'

const LandingPage = () => {
  return (
    <div>
        <LandingPageHeader/>
        <OnDemand/>
        <HowWeWork/>
        <Services/>
        <Comments/>
        <Footer/>
    </div>
  )
}

export default LandingPage