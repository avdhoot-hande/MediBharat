// src/App.js
import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import SpecialistDoctors from './components/specalist';
import Features from "./components/features";

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
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default App;
