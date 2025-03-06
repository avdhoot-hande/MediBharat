import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [newDoctor, setNewDoctor] = useState({ name: '', hospital_name: '', specialization: '', treatment: '', img: '', city: '' });

    useEffect(() => {
        fetchDoctors();
        fetchAppointments();
    }, []);

    // Fetch all doctors
    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:5000/doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    // Fetch all appointments
    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/appointments');
            setAppointments(response.data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    // Add a doctor
    const addDoctor = async () => {
        try {
            await axios.post('http://localhost:5000/doctors', newDoctor);
            fetchDoctors();
            setNewDoctor({ name: '', hospital_name: '', specialization: '', treatment: '', img: '', city: '' });
        } catch (error) {
            console.error("Error adding doctor:", error);
        }
    };

    // Delete a doctor
    const deleteDoctor = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/doctors/${id}`);
            fetchDoctors();
        } catch (error) {
            console.error("Error deleting doctor:", error);
        }
    };

    // Update appointment status
    const updateAppointmentStatus = async (id, newStatus) => {
        try {
            await axios.put(`http://localhost:5000/appointments/${id}/status`, { status: newStatus });
            fetchAppointments();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="mt-4 text-primary">Admin Dashboard</h2>

            {/* Manage Doctors */}
            <div className="mt-4">
                <h3>Doctors Table</h3>
                <table className="table">
                    <thead>
                        <tr>
                            {doctors.length > 0 && Object.keys(doctors[0]).map((col) => (
                                <th key={col}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor.d_id}>
                                {Object.values(doctor).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteDoctor(doctor.d_id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Manage Appointments */}
            <div className="mt-4">
                <h3>Appointments Table</h3>
                <table className="table">
                    <thead>
                        <tr>
                            {appointments.length > 0 && Object.keys(appointments[0]).map((col) => (
                                <th key={col}>{col}</th>
                            ))}
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                {Object.values(appointment).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                                <td>
                                    <select onChange={(e) => updateAppointmentStatus(appointment.id, e.target.value)} defaultValue={appointment.status}>
                                        <option value="On Hold">On Hold</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
