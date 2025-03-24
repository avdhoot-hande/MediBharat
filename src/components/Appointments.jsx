import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Badge, Row, Col, Container, Button, Modal, Form, Toast, ToastContainer } from 'react-bootstrap';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteReason, setDeleteReason] = useState('');
    const [selectedApptId, setSelectedApptId] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    // ✅ Refetch trigger
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (user) {
            fetch(`${BACKEND_URL}/appointments/${user.user_id}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user, refresh]); // ✅ trigger refetch when refresh toggles

    const handleDeleteClick = (apptId) => {
        setSelectedApptId(apptId);
        setDeleteReason('');
        setShowModal(true);
    };

    const handleDeleteConfirm = () => {
        if (!deleteReason.trim()) return;

        fetch(`${BACKEND_URL}/appointments/${selectedApptId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reason: deleteReason })
        })
        .then(res => {
            if (!res.ok) throw new Error("Failed to delete");
            setShowModal(false);
            setShowToast(true);
            setRefresh(prev => !prev); // ✅ trigger re-fetch
        })
        .catch(err => console.error("Error deleting appointment:", err));
    };

    // ✅ Function to get badge color based on status
    const getStatusBadge = (status) => {
        const lowerStatus = (status || '').toLowerCase();

        if (lowerStatus === 'confirmed') return <Badge bg="success">Confirmed</Badge>;
        if (lowerStatus === 'completed') return <Badge bg="info">Completed</Badge>;
        if (lowerStatus === 'cancelled' || lowerStatus === 'rejected') return <Badge bg="danger">{status}</Badge>;
        if (lowerStatus === 'on hold') return <Badge bg="warning">On Hold</Badge>;
        return <Badge bg="secondary">{status || 'Unknown'}</Badge>;
    };

    return (
        <Container className="mt-4">
            <h2 className="mb-4">My Enquiries</h2>

            {/* User Details */}
            {user && (
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>User Details</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Name:</strong> {user.user_name}</ListGroup.Item>
                            <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
                            <ListGroup.Item><strong>Phone:</strong> {user.phone_number || "Not Available"}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            )}

            {/* Appointments List */}
            {appointments.length > 0 ? (
                appointments.map(appt => (
                    <Card key={appt.id} className="mb-3">
                        <Card.Body>
                            <Row>
                                {/* Doctor Details */}
                                <Col md={4} className="border-end">
                                    <Card.Title>Doctor Details</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Doctor:</strong> {appt.doctor_name}</ListGroup.Item>
                                        <ListGroup.Item><strong>Hospital:</strong> {appt.hospital_name}</ListGroup.Item>
                                        <ListGroup.Item><strong>Specialization:</strong> {appt.specialization || "Not Available"}</ListGroup.Item>
                                    </ListGroup>
                                </Col>

                                {/* Appointment Details */}
                                <Col md={8}>
                                    <Card.Title>Enquiry Details</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Date:</strong> {appt.date}</ListGroup.Item>
                                        <ListGroup.Item><strong>Time:</strong> {appt.time}</ListGroup.Item>
                                        <ListGroup.Item><strong>Reason:</strong> {appt.reason}</ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Status:</strong> {getStatusBadge(appt.status)}
                                        </ListGroup.Item>
                                    </ListGroup>

                                    <div className="mt-3 text-end">
                                        <Button variant="danger" onClick={() => handleDeleteClick(appt.id)}>
                                            Delete Enquiry
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No appointments found.</p>
            )}

            {/* Delete Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Please provide a reason for cancellation:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={deleteReason}
                            onChange={e => setDeleteReason(e.target.value)}
                            placeholder="Type your reason here..."
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDeleteConfirm} disabled={!deleteReason.trim()}>
                        Confirm Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Toast Notification */}
            <ToastContainer position="top-center" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={4000} autohide bg="success">
                    <Toast.Header>
                        <strong className="me-auto">MediBharat</strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body className="text-white">Appointment deleted successfully.</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
};

export default Appointments;
