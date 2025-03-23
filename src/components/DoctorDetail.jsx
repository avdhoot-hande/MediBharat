import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button, Form, Alert, Toast, ToastContainer } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './DoctorDetail.css';


const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [user, setUser] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showToast, setShowToast] = useState(false);
  const reviewScrollRef = useRef(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Appointment states
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  // Field error states
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [reasonError, setReasonError] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);

    axios.get(`${BACKEND_URL}/doctors/${id}`)
      .then(response => {
        setDoctor(response.data || null);
        setReviews(response.data.reviews || []);
      })
      .catch(error => console.error("Error fetching doctor details:", error))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const scrollLeft = () => {
    if (reviewScrollRef.current) {
      reviewScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (reviewScrollRef.current) {
      reviewScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }
    if (!reviewText) return;

    axios.post(`${BACKEND_URL}/doctors/${id}/reviews`, {
      user_id: user.user_id,
      review_description: reviewText,
      review_points: reviewRating
    }).then(response => {
      setReviews([{
        r_id: response.data.r_id,
        user_name: user.user_name,
        review_description: reviewText,
        review_points: reviewRating,
        review_date: new Date().toISOString(),
        user_id: user.user_id
      }, ...reviews]);
      setReviewText('');
      setReviewRating(5);
    }).catch(error => console.error("Error adding review:", error));
  };

  const handleReviewDelete = (r_id) => {
    axios.delete(`${BACKEND_URL}/reviews/${r_id}`, { data: { user_id: user.user_id } })
      .then(() => {
        setReviews(reviews.filter(review => review.r_id !== r_id));
      })
      .catch(error => console.error("Error deleting review:", error));
  };

  const handleAppointmentSubmit = () => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }

    const isDateEmpty = !date.trim();
    const isTimeEmpty = !time.trim();
    const isReasonEmpty = !reason.trim();

    setDateError(isDateEmpty);
    setTimeError(isTimeEmpty);
    setReasonError(isReasonEmpty);

    if (isDateEmpty || isTimeEmpty || isReasonEmpty) {
      setError("Please fill in all appointment fields.");
      return;
    }

    axios.post(`${BACKEND_URL}/appointments`, {
      user_id: user.user_id,
      doctor_id: id,
      date,
      time,
      reason
    }).then(() => {
      setSuccess("Appointment booked successfully!");
      setError('');
      setShowModal(false);
      setDate('');
      setTime('');
      setReason('');
      setShowToast(true);

      // Clear errors
      setDateError(false);
      setTimeError(false);
      setReasonError(false);
    }).catch(err => {
      setError("Failed to book appointment.");
      setSuccess('');
      console.error(err);
    });
  };

  if (loading) return <p>Loading doctor details...</p>;
  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className="doctor-detail-container">
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
          <p><strong>Price:</strong> ₹{doctor.price?.toLocaleString() || "Not available"}</p>
          
          <p><strong>Description:</strong> {doctor.description}</p>
          <Button variant="primary" className="mt-3" onClick={() => setShowModal(true)}>Book Appointment</Button>
        </div>
      </div>

      <div className="mt-4">
        <h3>Reviews</h3>

        {reviews.length > 2 && (
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Button variant="light" onClick={scrollLeft}><FaArrowLeft /></Button>
            <Button variant="light" onClick={scrollRight}><FaArrowRight /></Button>
          </div>
        )}

        <div
          ref={reviewScrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: '1rem',
            paddingBottom: '1rem'
          }}
        >
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review.r_id}
                className="border p-3 mb-2 rounded bg-light"
                style={{ minWidth: '300px', maxWidth: '400px', flex: '0 0 auto' }}
              >
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
      </div>

      <div className="mt-4">
        <h3>Add a Review</h3>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            value={reviewText}
            onClick={() => !user && setShowLoginPrompt(true)}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here..."
            className="form-control mb-2"
            disabled={!user}
            required
          />
          <select
            value={reviewRating}
            onClick={() => !user && setShowLoginPrompt(true)}
            onChange={(e) => setReviewRating(Number(e.target.value))}
            className="form-control mb-2"
            disabled={!user}
          >
            {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Stars</option>)}
          </select>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </div>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {success && <Alert variant="success" className="mt-3 text-center">{success}</Alert>}

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={4000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">MediBharat</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body className="text-white">✅ Appointment booked successfully!</Toast.Body>
        </Toast>
      </ToastContainer>

      <Modal show={showLoginPrompt} onHide={() => setShowLoginPrompt(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You must be logged in to perform this action.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginPrompt(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                isInvalid={dateError}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={e => setTime(e.target.value)}
                isInvalid={timeError}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Reason</Form.Label>
              <Form.Control
                as="textarea"
                value={reason}
                onChange={e => setReason(e.target.value)}
                isInvalid={reasonError}
              />
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
