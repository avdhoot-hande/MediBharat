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
          <p><strong>Description:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quidem nemo voluptatum aliquid perspiciatis eum reiciendis vitae enim, eaque nulla quisquam fugiat quam esse quos? Sequi voluptatum doloribus veritatis ipsum.
          Magnam commodi dolorem distinctio voluptas quos fugit suscipit inventore maiores consequatur fuga! Omnis aliquam consequuntur dicta distinctio ipsum, delectus perspiciatis, reprehenderit repudiandae ut quia minima nesciunt accusamus, qui quod dolorem!
          Dolores aperiam quae, exercitationem culpa, ea dolorem accusamus ut nostrum delectus laudantium assumenda nemo voluptatibus deserunt quo aliquid maiores. Incidunt molestiae voluptatibus optio doloribus quasi quisquam labore eaque numquam laborum.
          Qui dolores officiis reiciendis, provident hic ab, sunt necessitatibus iusto quis sequi possimus dignissimos quidem soluta quam sint voluptatem eaque error numquam temporibus labore dolorum, nostrum ut. Modi, consequuntur tempora.
          Iusto modi aut officiis corporis, deleniti iste natus impedit labore quaerat cumque blanditiis enim porro adipisci voluptates, dolor fuga cum asperiores eaque quasi? Harum earum dolore inventore delectus exercitationem magnam?{hospital.description}</p>
          <p><strong>Services:</strong> {hospital.services.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
