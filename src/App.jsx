import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import SpecialistDoctors from "./components/specalist";
import Features from "./components/features";
import Doctor from "./components/doctor";
import CallToAction from "./components/calltoaction";
import Testimonials from "./components/testimonial";
import Login from "./components/login";
import DoctorDetail from "./components/DoctorDetail";
import AdminDashboard from "./components/AdminDashboard";
import Appointments from "./components/Appointments";
import About from "./components/about";


function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar user={user} onLogout={handleLogout} onLoginClick={() => setShowLogin(true)} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <SpecialistDoctors />
                  <Testimonials />
                  <CallToAction />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/doctor/:id" element={<DoctorDetail />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </main>
        <Footer />

        {/* Blurred Background + Login Modal */}
        {showLogin && (
          <>
            <div className="login-backdrop" />
            <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />
          </>
        )}
      </Router>
    </AuthProvider>
  );
}

export default App;