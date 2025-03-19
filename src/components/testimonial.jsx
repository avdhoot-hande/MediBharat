import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testimonial.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="review-section">
      <div className="container py-5">
        <h2 className="text-center mb-5 review-title">
          🌟 What Our Patients Say
        </h2>

        <div className="row">
          {reviews.length === 0 ? (
            <div className="col-12 text-center">
              <p className="text-muted">No 5-star reviews found.</p>
            </div>
          ) : (
            reviews.map((review, idx) => (
              <div className="col-md-6 col-lg-4 mb-4" key={idx}>
                <div className="review-card">
                  <div className="review-quote">
                    <i className="bi bi-chat-quote-fill"></i>
                  </div>
                  <div className="review-body">
                    <p className="review-text">"{review.review_description}"</p>
                    <div className="review-stars">
                      {Array(5).fill().map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning"></i>
                      ))}
                    </div>
                    <h5 className="review-name">{review.user_name}</h5>
                    <p className="review-doctor">Doctor: {review.doctor_name}</p>
                    <p className="review-date">Reviewed on {new Date(review.review_date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
