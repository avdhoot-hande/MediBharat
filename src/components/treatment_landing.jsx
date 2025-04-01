import React, { useState } from 'react';
import { Heart, Clock, IndianRupee, Guitar as Hospital, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import treatmentData from '../data/treatmentData';
import './TreatmentSection.css';

const TreatmentSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  // Limit the number of cards to 4 or 5
  const limitedTreatments = treatmentData.slice(0, 4); // Change to 4 for 4 cards

  const handleCardClick = (id) => {
    // Navigate to the treatment detail page for the clicked treatment
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
              onClick={() => handleCardClick(treatment.id)} // Navigate on card click
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
                <p className="treatment-description">{treatment.description}</p>

                <div className="treatment-details">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">{treatment.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">{treatment.cost}</span>
                  </div>
                </div>

                {selectedTreatment === treatment.id && (
                  <div className="treatment-expanded">
                    <div className="treatment-benefits">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits</h4>
                      <ul>
                        {treatment.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Available at</h4>
                      <div className="flex flex-wrap gap-2">
                        {treatment.hospitals.slice(0, 3).map((hospital, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            <Hospital className="w-3 h-3 mr-1" />
                            {hospital}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Important Considerations</h4>
                      <ul>
                        {treatment.risks.slice(0, 2).map((risk, index) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center">
                      <button className="treatment-button">
                        Learn More
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
