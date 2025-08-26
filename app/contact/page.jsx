import React from "react";
import Hero from "../components/contact/Hero";
import Map from "../components/contact/Map";
import ContactForm from "../components/contact/ContactForm";



const page = () => {
  return (
    <div>
      <Hero />
      <ContactForm/>
      <Map />
    </div>
  );
};

export default page;
