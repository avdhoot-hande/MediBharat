// src/components/Hospital.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './hospital.css';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/hospitals')
      .then(response => {
        setHospitals(response.data);
      })
      .catch(error => {
        console.error('Error fetching hospitals:', error);
      });
  }, []);

  return (
    <div className="hospital-container">
      <h2 className="hospital-title">Hospitals</h2>
      <div className="hospital-list">
        {hospitals.map(hospital => (
          <div key={hospital.hospital_id} className="hospital-card">
            <img src={hospital.image_url} alt={hospital.name} className="hospital-image" />
            <h3>{hospital.name}</h3>
            <p><strong>Location:</strong> {hospital.location}</p>
            <p><strong>Price Range:</strong> {hospital.price_range}</p>
            <p>{hospital.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospital;
