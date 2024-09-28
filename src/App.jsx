// src/App.js
import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import SpecialistDoctors from './components/specalist';
import Features from "./components/features";
import WhyChooseUs from './components/choose_us';
import Testimonials from './components/testimonial';
import PartnerHospitals from './components/partnerhospital';
import CallToAction from './components/calltoaction';

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div>
          <Hero />
        
          <SpecialistDoctors/>
          <Features/>
          <WhyChooseUs/>
          <Testimonials/>
          <PartnerHospitals/>
          <CallToAction/>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default App;
