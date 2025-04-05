import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import hospitalData from "../data/hospitalData";
import "./HospitalDetails.css";

const HospitalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hospital = hospitalData.find(h => h.id === id);
  if (!hospital) return <div className="hosp-loading">Loading...</div>;

  return (
    <div className="hosp-detail-wrapper">
      <button className="hosp-back-btn" onClick={() => navigate(-1)}>← Back</button>

      {/* TOP SECTION */}
      <div className="hosp-main-detail">
        <img src={hospital.image} alt={hospital.name} className="hosp-image-left" />

        <div className="hosp-info-right">
          <h2 className="hosp-title">{hospital.name}</h2>
          <p className="hosp-location">{hospital.location}</p>
          <p className="hosp-description">{hospital.description}</p>

          <div className="hosp-meta">
            <p><strong>Rating:</strong> ⭐ {hospital.rating}</p>
            <p><strong>Established:</strong> {hospital.yearEstablished}</p>
          </div>

          <div className="hosp-stats">
            <h4>Hospital Stats</h4>
            <ul>
              <li><strong>Total Beds:</strong> {hospital.hospitalStats.totalBeds}</li>
              <li><strong>Surgeons:</strong> {hospital.hospitalStats.surgeons}</li>
              <li><strong>Annual Patients Treated:</strong> {hospital.hospitalStats.annualPatientsTreated}</li>
              <li><strong>Success Rate:</strong> {hospital.hospitalStats.successRate}</li>
            </ul>
          </div>

          <div className="hosp-achievements">
            <h4>Notable Achievements</h4>
            <p>{hospital.notableAchievements}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM TABLE SECTION */}
      <div className="hosp-table-section">
        <h3 className="hosp-table-heading">Hospital Services Overview</h3>
        <table className="hosp-data-table">
          <thead>
            <tr>
              <th>Services Offered</th>
              <th>Specialties</th>
              <th>Treatments</th>
              <th>Departments</th>
              <th>Wards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>{hospital.services.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </td>
              <td>
                <ul>{hospital.specialties.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </td>
              <td>
                <ul>{hospital.treatmentsOffered.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </td>
              <td>
                <ul>{hospital.departments.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </td>
              <td>
                <ul>{hospital.wards.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HospitalDetail;
