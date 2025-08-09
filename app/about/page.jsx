import React from 'react'
import Hero from '../components/about/Hero'
import Mission from '../components/about/Mission'
import Team from '../components/about/Team'
import GccPresence from '../components/about/GccPresence'
import Partners from '../components/about/Partners'
import CtaSection from '../components/about/CtaSection'

const page = () => {
  return (
    <div>
      <Hero/>
      <Mission/>
      <Team/>
      <GccPresence/>
      <Partners/>
      <CtaSection/>
    </div>
  )
}

export default page
