import React from 'react'
import Hero from '../components/services/Hero';
import ServCus from '../components/services/ServCus';
import CompService from '../components/services/CompService';
import BottomCta from '../components/services/BottomCta';

const Page = () => {
  return (
    <div>
      <Hero/>
        <ServCus/>
        <CompService/>
        <BottomCta/>
    </div>
  )
}

export default Page;