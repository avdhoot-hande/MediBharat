// src/pages/TreatmentDetails.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import treatmentData from '../data/treatmentData';
import './HospitalDetails.css'; // reuse the same CSS for consistent styling

const TreatmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const treatment = treatmentData.find(t => t.id === parseInt(id));

  if (!treatment) return <div className="not-found">Treatment not found.</div>;

  return (
    <div className="hospital-detail-container">
      <button className="btn btn-outline-primary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="hospital-card">
        <img
          src={treatment.image}
          alt={treatment.name}
          className="hospital-image"
          onError={(e) => { e.target.src = "https://via.placeholder.com/300x200"; }}
        />
        <div className="hospital-info">
          <h2>{treatment.name}</h2>
          <p><strong>Description:</strong> {treatment.description}</p>
          <p><strong>Duration:</strong> {treatment.duration}</p>
          <p><strong>Cost:</strong> {treatment.cost}</p>
          <p><strong>Hospitals:</strong> {treatment.hospitals.join(', ')}</p>
          <div>
            <strong>Benefits:</strong>
            <ul>
              {treatment.benefits.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetails;
