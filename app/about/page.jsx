import React from 'react'
import Hero from '../components/about/Hero'
import Founder from '../components/about/Founder'
import Mission from '../components/about/Mission'
import Firm from '../components/about/Firm'
import Team from '../components/about/Team'
import CtaSection from '../components/about/CtaSection'

const page = () => {
  return (
    <div>
      <Hero/>
      <Founder/>
      <Mission/>
      <Firm/>
      <Team/>
      <CtaSection/>
    </div>
  )
}

export default page
