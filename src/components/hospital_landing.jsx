import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Users, BedDouble, UserCheck, TrendingUp } from "lucide-react";
import hospitalData from "../data/hospitalData";
import "./HospitalSection.css";

const HospitalSection = () => {
  const [visibleHospitals, setVisibleHospitals] = useState(hospitalData.slice(0, 3)); // Show first 3
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  // Automatically rotate hospitals every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % hospitalData.length);
      setVisibleHospitals([
        hospitalData[(startIndex + 1) % hospitalData.length],
        hospitalData[(startIndex + 2) % hospitalData.length],
        hospitalData[(startIndex + 3) % hospitalData.length],
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <section className="hospital-section">
      <div className="container">
        <div className="section-header">
          <h2>Leading Healthcare Institutions</h2>
          <p>Discover world-class medical facilities and expert care</p>
        </div>

        <div className="hospital-grid">
          {visibleHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="hospital-card"
              onClick={() => navigate(`/hospital/${hospital.name.toLowerCase().replace(/\s+/g, "-")}`)}
            >
              <div className="hospital-image">
                <img src={hospital.image} alt={hospital.name} />
                <div className="hospital-rating">
                  <Star className="icon star" />
                  <span>{hospital.rating}</span>
                </div>
              </div>

              <div className="hospital-content">
                <div className="hospital-header">
                  <h3>{hospital.name}</h3>
                  <div className="hospital-location">
                    <MapPin className="icon" />
                    <span>{hospital.location}</span>
                  </div>
                </div>

                <p className="hospital-description">{hospital.description}</p>

                <div className="hospital-stats">
                  <div>
                    <BedDouble className="icon blue" />
                    <span>{hospital.hospitalStats.totalBeds} Beds</span>
                  </div>
                  <div>
                    <UserCheck className="icon blue" />
                    <span>{hospital.hospitalStats.surgeons} Surgeons</span>
                  </div>
                  <div>
                    <Users className="icon blue" />
                    <span>{(hospital.hospitalStats.annualPatientsTreated / 1000).toFixed(0)}K+ Patients/Year</span>
                  </div>
                  <div>
                    <TrendingUp className="icon blue" />
                    <span>{hospital.hospitalStats.successRate} Success Rate</span>
                  </div>
                </div>

                <div className="details-button">
                  <button>View Full Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalSection;
