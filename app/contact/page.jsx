import React from 'react'
import Hero from '../components/contact/Hero'
import ContactForm from '../components/contact/ContactForm'
import MapSection  from '../components/contact/MapSection'

const page = () => {
  return (
    <div>
      <Hero/>
      <ContactForm/>
      <MapSection />
    </div>
  )
}

export default page
