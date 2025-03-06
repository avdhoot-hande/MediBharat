import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import './DoctorDetail.css';

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Appointment State
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    // Retrieve logged-in user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);

    axios.get(`http://localhost:5000/doctors/${id}`)
      .then(response => {
        setDoctor(response.data || null);
        setReviews(response.data.reviews || []);
      })
      .catch(error => console.error("Error fetching doctor details:", error))
      .finally(() => setLoading(false));
  }, [id]);

  // Submit a new review
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setError("Please log in to write a review.");
      return;
    }
    if (!reviewText) return;
    
    axios.post(`http://localhost:5000/doctors/${id}/reviews`, {
      user_id: user.user_id,
      review_description: reviewText,
      review_points: reviewRating
    })
    .then(response => {
      setReviews([{ r_id: response.data.r_id, user_name: user.user_name, review_description: reviewText, review_points: reviewRating, review_date: new Date().toISOString(), user_id: user.user_id }, ...reviews]);
      setReviewText('');
      setReviewRating(5);
      setError(null);
    })
    .catch(error => console.error("Error adding review:", error));
  };

  // Delete a review
  const handleReviewDelete = (r_id) => {
    axios.delete(`http://localhost:5000/reviews/${r_id}`, { data: { user_id: user.user_id } })
      .then(() => {
        setReviews(reviews.filter(review => review.r_id !== r_id));
      })
      .catch(error => console.error("Error deleting review:", error));
  };

  // Submit Appointment Booking
  const handleAppointmentSubmit = async () => {
    if (!user) {
      alert('Please log in to book an appointment');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/appointments', {
        user_id: user.user_id,
        doctor_id: id,
        date,
        time,
        reason
      });

      if (response.status === 201) {
        alert('Appointment booked successfully');
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert('Failed to book appointment');
    }
  };

  if (loading) return <p>Loading doctor details...</p>;
  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className="doctor-detail-container">
      {/* Doctor Details Section */}
      <div className="doctor-header">
        <img 
          src={doctor.img} 
          alt={doctor.name} 
          className="doctor-image"
          onError={(e) => { e.target.src = "https://via.placeholder.com/200x300"; }} 
        />
        <div className="doctor-info">
          <h2 className="doctor-name">{doctor.name}</h2>
          <p className="doctor-specialization">{doctor.specialization}</p>
          <p><strong>Hospital:</strong> {doctor.hospital_name}</p>
          <p><strong>Experience:</strong> {doctor.years} years</p>
          <p><strong>Price:</strong> ₹{doctor.price ? doctor.price.toLocaleString() : "Not available"}</p>
          <p><strong>Description:</strong> {doctor.description}</p>

          {/* Book Appointment Button */}
          <Button variant="primary" className="mt-3" onClick={() => setShowModal(true)}>Book Appointment</Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-4">
        <h3>Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.r_id} className="border p-3 mb-2 rounded bg-light">
              <p><strong>{review.user_name}:</strong></p>
              <p><strong>Rating:</strong> {review.review_points} ⭐</p>
              <p><strong>Review:</strong> {review.review_description}</p>
              <p className="text-muted"><small>{new Date(review.review_date).toLocaleDateString()}</small></p>
              {user && review.user_id === user.user_id && (
                <button onClick={() => handleReviewDelete(review.r_id)} className="btn btn-danger btn-sm">Delete</button>
              )}
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>

      {/* Add a Review Section */}
      <div className="mt-4">
        <h3>Add a Review</h3>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleReviewSubmit}>
          <textarea 
            value={reviewText} 
            onChange={(e) => setReviewText(e.target.value)} 
            required
            placeholder="Write your review here..." 
            className="form-control mb-2"
            disabled={!user}
          />
          <select 
            value={reviewRating} 
            onChange={(e) => setReviewRating(Number(e.target.value))} 
            className="form-control mb-2"
            disabled={!user}
          >
            {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Stars</option>)}
          </select>
          <button type="submit" className="btn btn-primary" disabled={!user}>Submit Review</button>
        </form>
      </div>

      {/* Appointment Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" value={time} onChange={e => setTime(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" value={reason} onChange={e => setReason(e.target.value)} required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAppointmentSubmit}>Book</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DoctorDetail;
