import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import SpecialistDoctors from './components/specalist';
import Features from "./components/features";
import Doctor from './components/doctor';
import CallToAction from './components/calltoaction';
import Testimonials from './components/testimonial';
import Login from './components/login';
import DoctorDetail from './components/DoctorDetail';
import AdminDashboard from './components/AdminDashboard';
import Appointments from './components/Appointments';

function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem('user')));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload(); // ✅ Force full UI refresh
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar user={user} onLogout={handleLogout} />
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
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/doctor/:id" element={<DoctorDetail />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
