import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import SpecialistDoctors from './components/specalist';
import Features from "./components/features";
import Hospital from './components/hospital'; 
import HospitalDetail from './components/hospital_detail_page';
import CallToAction from './components/calltoaction'; 
import Testimonials from './components/testimonial'; 
import Login from './components/login';
import Doctors from './components/doctors'; // Import Doctors component

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <SpecialistDoctors />
                                <Features />
                                <Testimonials />
                                <CallToAction />
                            </>
                        } />
                        <Route path="/hospital" element={<Hospital />} />
                        <Route path="/hospital/:hospitalName" element={<HospitalDetail />} />
                        <Route path="/doctors" element={<Doctors />} /> {/* Add Doctors Route */}
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
