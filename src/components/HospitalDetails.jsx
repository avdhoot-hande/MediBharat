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
          <p><strong>Rating:</strong> {hospital.rating} / 5</p>
          <p><strong>Year Established:</strong> {hospital.yearEstablished}</p>
          <p><strong>Notable Achievements:</strong> {hospital.notableAchievements}</p>
          <p><strong>Specialties:</strong> {hospital.specialties.join(", ")}</p>
          
          <h4>Hospital Stats:</h4>
          <ul>
            <li><strong>Total Beds:</strong> {hospital.hospitalStats.totalBeds}</li>
            <li><strong>Surgeons:</strong> {hospital.hospitalStats.surgeons}</li>
            <li><strong>Annual Patients Treated:</strong> {hospital.hospitalStats.annualPatientsTreated}</li>
            <li><strong>Success Rate:</strong> {hospital.hospitalStats.successRate}</li>
          </ul>

          <h4>Treatments Offered:</h4>
          <ul>
            {hospital.treatmentsOffered.map((treatment, index) => (
              <li key={index}>{treatment}</li>
            ))}
          </ul>

          <h4>Departments:</h4>
          <ul>
            {hospital.departments.map((department, index) => (
              <li key={index}>{department}</li>
            ))}
          </ul>

          <h4>Wards:</h4>
          <ul>
            {hospital.wards.map((ward, index) => (
              <li key={index}>{ward}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
