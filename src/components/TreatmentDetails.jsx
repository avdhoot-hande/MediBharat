import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import treatmentData from "../data/treatmentData";
import "./treatmentdetail.css";

const TreatmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const treatment = treatmentData.find(t => t.id === parseInt(id));

  if (!treatment) return <div className="treatment-container">Treatment not found</div>;

  return (
    <div className="treatment-detail">
      {/* Reserved space for navbar/logo */}
      <div className="top-space" />

      {/* Back button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="treatment-content">
        {/* Main heading */}
        <h1 className="treatment-title">{treatment.name}</h1>

        <div className="treatment-columns">
          {/* Left Column */}
          <div className="column">
            <div className="card image-card">
              <img src={treatment.image} alt={treatment.name} className="block-image" />
            </div>

            <div className="card">
              <h2>Description</h2>
              <p>{treatment.description}</p>
              <p><strong>Duration:</strong> {treatment.duration}</p>
              <p><strong>Cost:</strong> {treatment.cost}</p>
              <p><strong>Recovery:</strong> {treatment.recovery}</p>
            </div>

            <div className="card">
              <h2>Procedure Details</h2>
              <p>{treatment.procedureDetails}</p>
            </div>

            <div className="card">
              <h2>Aftercare</h2>
              <ul>
                {treatment.aftercare.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="column">
            <div className="card hospital-card">
              <h2>Top Hospitals</h2>
              <ul>
                {treatment.hospitals.map((hospital, index) => (
                  <li key={index}>{hospital}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2>Benefits</h2>
              <ul>
                {treatment.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2>Risks</h2>
              <ul>
                {treatment.risks.map((risk, idx) => (
                  <li key={idx}>{risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
