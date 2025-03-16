import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AdminDashboard = () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [newDoctor, setNewDoctor] = useState({
        name: '', hospital_name: '', years: '', certification: '', specialization: '', 
        treatment: '', img: '', reviews: '', description: '', city: '', location: '', price: ''
    });

    const [statusUpdateMsg, setStatusUpdateMsg] = useState(''); // ✅ feedback message
    const [refresh, setRefresh] = useState(false); // ✅ to force re-fetch

    useEffect(() => {
        fetchDoctors();
        fetchAppointments();
    }, [refresh]); // ✅ add refresh dependency

    // Fetch all doctors
    const fetchDoctors = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/doctors`);
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    // Fetch all appointments
    const fetchAppointments = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/appointments`);
            setAppointments(response.data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    // Add a doctor
    const addDoctor = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BACKEND_URL}/doctors`, newDoctor);
            fetchDoctors();
            setNewDoctor({
                name: '', hospital_name: '', years: '', certification: '', specialization: '', 
                treatment: '', img: '', reviews: '', description: '', city: '', location: '', price: ''
            });
        } catch (error) {
            console.error("Error adding doctor:", error);
        }
    };

    // Delete a doctor
    const deleteDoctor = async (id) => {
        try {
            await axios.delete(`${BACKEND_URL}/doctors/${id}`);
            fetchDoctors();
        } catch (error) {
            console.error("Error deleting doctor:", error);
        }
    };

    // ✅ Update appointment status
    const updateAppointmentStatus = async (id, newStatus) => {
        try {
            const response = await axios.put(`${BACKEND_URL}/appointments/${id}/status`, {
                status: newStatus
            });

            if (response.status === 200) {
                setStatusUpdateMsg(`Appointment ${id} updated to ${newStatus}`);
                setRefresh(prev => !prev); // ✅ force re-fetch of appointments
                setTimeout(() => setStatusUpdateMsg(''), 3000);
            }
        } catch (error) {
            console.error("Error updating status:", error);
            setStatusUpdateMsg("Error updating status.");
        }
    };

    return (
        <div className="container">
            <h2 className="mt-4 text-primary">Admin Dashboard</h2>
            
            {/* Add Doctor Form */}
            <div className="mt-4">
                <h3>Add a Doctor</h3>
                <form onSubmit={addDoctor}>
                    {Object.keys(newDoctor).map((key) => (
                        <div key={key} className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                value={newDoctor[key]}
                                onChange={(e) => setNewDoctor({ ...newDoctor, [key]: e.target.value })}
                            />
                        </div>
                    ))}
                    <button type="submit" className="btn btn-success">Add Doctor</button>
                </form>
            </div>

            {/* Manage Doctors */}
            <div className="mt-4">
                <h3>Doctors Table</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th><th>Name</th><th>Hospital</th><th>Years</th><th>Certification</th>
                            <th>Specialization</th><th>Treatment</th><th>Image</th><th>Reviews</th>
                            <th>Description</th><th>City</th><th>Location</th><th>Price</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor.d_id}>
                                {Object.entries(doctor).map(([key, value], index) => (
                                    <td key={index}>
                                        {key === 'img' && typeof value === 'string' && value.startsWith('http') ? (
                                            <img src={value} alt={doctor.name} width="50" />
                                        ) : (
                                            value
                                        )}
                                    </td>
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
                
                {/* ✅ Status update message */}
                {statusUpdateMsg && (
                    <div className="alert alert-info">{statusUpdateMsg}</div>
                )}

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
                        {appointments.map((appointment) => {
                            // ✅ Debug log for status
                            console.log("Status of appointment ID", appointment.id, "is:", appointment.status);

                            // ✅ Normalize and fix casing of status
                            const normalizedStatus = (appointment.status || "").toLowerCase();
                            const validStatuses = ["on hold", "confirmed", "completed", "cancelled"];
                            const currentStatus = validStatuses.includes(normalizedStatus)
                                ? normalizedStatus.charAt(0).toUpperCase() + normalizedStatus.slice(1)
                                : "On Hold";

                            return (
                                <tr key={appointment.id}>
                                    {Object.values(appointment).map((value, index) => (
                                        <td key={index}>{value}</td>
                                    ))}
                                    <td>
                                        <select 
                                            className="form-control"
                                            onChange={(e) => updateAppointmentStatus(appointment.id, e.target.value)} 
                                            value={currentStatus}
                                        >
                                            <option value="On Hold">On Hold</option>
                                            <option value="Confirmed">Confirmed</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
