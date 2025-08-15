import React from 'react';
import Hero from '../components/about/Hero';
import FounderProfile from '../components/about/FounderProfile';
import KeyPerson from '../components/about/KeyPerson';
import IntroVision from '../components/about/IntroVision';
import MissionObjectives from '../components/about/MissionObjectives';
import WhyChoose from '../components/about/WhyChoose';
import ServicesSection from '../components/about/ServicesSection';
import Arbitration from '../components/about/Arbitration';
import SpecializedConsulting from '../components/about/SpecializedConsulting.jsx';
import ClosingStatement from '../components/about/ClosingStatement';

const Page = () => {
  return (
    <div>
      <Hero />
      <FounderProfile />
      <KeyPerson />
      <IntroVision />
      <MissionObjectives />
      <WhyChoose />
      <ServicesSection />
      <Arbitration />
      <SpecializedConsulting />
      <ClosingStatement />
    </div>
  );
};

export default Page;
