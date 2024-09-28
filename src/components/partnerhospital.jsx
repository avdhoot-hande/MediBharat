import React from 'react';
import './partnerhospital.css';

const PartnerHospitals = () => {
  const hospitals = [
    { name: "Hospital A", logo: "logo-url-1", loaction:"Mumbai" },
    { name: "Hospital B", logo: "logo-url-2" , loaction:"Delhi"},
    { name: "Hospital C", logo: "logo-url-3", loaction:"Pune" },
  ];

  return (
    <div className="partner-hospitals-section">
      <h2>Our Partner Hospitals</h2>
      <div className="hospitals-container">
        {hospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <img src={hospital.logo} alt={`${hospital.name} logo`} />
            <h5>{hospital.name}</h5>
            <h3>{hospital.location}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerHospitals;
