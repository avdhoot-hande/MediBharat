// src/pages/HospitalDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hospitalData from '../data/hospitalData';
import './HospitalDetails.css';

const HospitalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hospital = hospitalData.find(h => h.id === id);

  if (!hospital) return <p>Hospital not found.</p>;

  return (
    <div className="hospital-detail-container">
      <button className="btn btn-outline-primary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="hospital-card">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="hospital-image"
          onError={(e) => { e.target.src = "https://via.placeholder.com/300x200"; }}
        />
        <div className="hospital-info">
          <h2>{hospital.name}</h2>
          <p><strong>Location:</strong> {hospital.location}</p>
          <p><strong>Description:</strong> {hospital.description}</p>
          <p><strong>Services:</strong> {hospital.services.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
