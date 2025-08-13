import React from 'react'
import Hero from '../components/about/Hero'
import Mission from '../components/about/Mission'




import NewServices from '../components/about/NewServices'
import Founder from '../components/about/Founder'
import Vision from '../components/about/Vision'
import OurTeam from '../components/about/OurTeam'
import AboutContact from '../components/about/Aboutcontact'

const page = () => {
  return (
    <div>
      <Hero/>
      <Mission/>
     <Founder/>
      <Vision/>
      <NewServices/>
        <OurTeam/>
        <AboutContact/>
    </div>
  )
}

export default page
