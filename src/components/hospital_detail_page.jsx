// src/components/HospitalDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import hospitalData from '../data/hospitalData';
import './hospital_detail.css';

const HospitalDetail = () => {
    const { hospitalName } = useParams();
    const { isLoggedIn } = useAuth(); // Get login status from context
    const hospital = hospitalData.find(h => h.name === hospitalName);

    const [reviews, setReviews] = useState(hospital.reviews || []);
    const [newReview, setNewReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoggedIn && newReview) {
            const review = { user: "Current User", comment: newReview }; // Replace "Current User" with actual user data
            setReviews([...reviews, review]);
            setNewReview("");
        }
    };

    return (
        <div className="hospital-detail">
            {hospital ? (
                <>
                    <h2>{hospital.name}</h2>
                    <p>{hospital.description}</p>
                    <h3>Reviews</h3>
                    <div>
                        {reviews.map((review, index) => (
                            <div key={index}>
                                <strong>{review.user}</strong>: {review.comment}
                            </div>
                        ))}
                    </div>
                    {isLoggedIn ? (
                        <form onSubmit={handleSubmit}>
                            <textarea
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                placeholder="Write your review..."
                            />
                            <button type="submit">Submit Review</button>
                        </form>
                    ) : (
                        <p>Please log in to write a review.</p>
                    )}
                </>
            ) : (
                <h3>Hospital not found.</h3>
            )}
        </div>
    );
};

export default HospitalDetail;
