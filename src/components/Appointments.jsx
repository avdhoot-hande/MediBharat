import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Badge, Row, Col, Container } from 'react-bootstrap';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/appointments/${user.user_id}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user]);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">My Appointments</h2>

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
                                {/* Doctor Details (Left) */}
                                <Col md={4} className="border-end">
                                    <Card.Title>Doctor Details</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Doctor:</strong> {appt.doctor_name}</ListGroup.Item>
                                        <ListGroup.Item><strong>Hospital:</strong> {appt.hospital_name}</ListGroup.Item>
                                        <ListGroup.Item><strong>Specialization:</strong> {appt.specialization || "Not Available"}</ListGroup.Item>
                                    </ListGroup>
                                </Col>

                                {/* Appointment Details (Right) */}
                                <Col md={8}>
                                    <Card.Title>Appointment Details</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><strong>Date:</strong> {appt.date}</ListGroup.Item>
                                        <ListGroup.Item><strong>Time:</strong> {appt.time}</ListGroup.Item>
                                        <ListGroup.Item><strong>Reason:</strong> {appt.reason}</ListGroup.Item>
                                        <ListGroup.Item>
                                            <strong>Status:</strong> 
                                            {appt.status === 'Accepted' ? <Badge bg="success"> Accepted </Badge> :
                                            appt.status === 'Rejected' ? <Badge bg="danger"> Rejected </Badge> :
                                            <Badge bg="warning"> On Hold </Badge>}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No appointments found.</p>
            )}
        </Container>
    );
};

export default Appointments;
