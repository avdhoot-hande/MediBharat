import React, { useState } from 'react';
import { Clock, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import treatmentData from '../data/treatmentData';
import './TreatmentSection.css';

const TreatmentSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const navigate = useNavigate();

  const limitedTreatments = treatmentData.slice(0, 4);

  const handleCardClick = (id) => {
    navigate(`/treatment/${id}`);
  };

  return (
    <section className="treatment-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="treatment-title">
          <h2>Specialized Medical Treatments</h2>
          <p>Advanced procedures with exceptional success rates</p>
        </div>

        <div className="treatment-grid">
          {limitedTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="treatment-card"
              onClick={() => handleCardClick(treatment.id)}
            >
              <div className="treatment-image">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="treatment-content">
                <h3 className="treatment-name">{treatment.name}</h3>

                <div className="treatment-details">
                  <div className="detail-item">
                    <Clock className="detail-icon" />
                    <span className="detail-text">{treatment.duration}</span>
                  </div>
                  <div className="detail-item">
                    <IndianRupee className="detail-icon" />
                    <span className="detail-text">{treatment.cost}</span>
                  </div>
                </div>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
