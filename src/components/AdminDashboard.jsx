import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend
} from "recharts";
import "./adminDashboard.css";

const COLORS = ["#033f63", "#007bb5", "#00a3e0", "#66c2ff", "#99d6ff"];

const AdminDashboard = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [activeTab, setActiveTab] = useState("analytics");
  const [analyticsSection, setAnalyticsSection] = useState("appointments");
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [searchAppointment, setSearchAppointment] = useState("");
  const [newDoctor, setNewDoctor] = useState({
    name: "", hospital_name: "", experience: "", certification: "", specialization: "",
    treatment: "", img: "", reviews: "", description: "", city: "", location: "",
    price: "", mail: "",
  });
  const [statusUpdateMsg, setStatusUpdateMsg] = useState("");
  const [actionMessage, setActionMessage] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchDoctors();
    fetchAppointments();
    fetchUsers();
    fetchReviews();
  }, [refresh]);

  useEffect(() => {
    if (actionMessage) {
      const timer = setTimeout(() => setActionMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [actionMessage]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/doctors`);
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/appointments`);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/reviews/5-star`);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const addDoctor = async (e) => {
    e.preventDefault();
    console.log("Sending new doctor:", newDoctor); // already there
  
    // Basic validation
    for (const key in newDoctor) {
      if (!newDoctor[key]) {
        console.warn(`Missing value for: ${key}`);
      }
    }
  
    try {
      const response = await axios.post(`${BACKEND_URL}/doctors`, newDoctor);
      console.log("Response from server:", response);
      fetchDoctors();
      setNewDoctor({
        name: "", hospital_name: "", experience: "", certification: "", specialization: "",
        treatment: "", img: "", reviews: "", description: "", city: "", location: "",
        price: "", mail: "",
      });
      setActionMessage("Doctor added successfully!");
    } catch (error) {
      console.error("Error adding doctor:", error.response?.data || error.message);
      setActionMessage("Failed to add doctor. Check console.");
    }
  };
  

  const deleteDoctor = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/appointments/doctor/${id}`);
      await axios.delete(`${BACKEND_URL}/doctors/${id}`);
      fetchDoctors();
      setActionMessage("Doctor deleted successfully!");
    } catch (error) {
      console.error("Error deleting doctor:", error.response?.data || error.message);
      alert("Failed to delete doctor. See console for details.");
    }
  };

  const updateAppointmentStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(`${BACKEND_URL}/appointments/${id}/status`, { status: newStatus });
      if (response.status === 200) {
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.id === id ? { ...appointment, status: newStatus } : appointment
          )
        );
        setStatusUpdateMsg(`Appointment ${id} updated to ${newStatus}`);
        setActionMessage("Appointment status updated!");
        setTimeout(() => setStatusUpdateMsg(""), 3000);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setStatusUpdateMsg("Error updating status.");
    }
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchDoctor.toLowerCase())
  );

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.user_name?.toLowerCase().includes(searchAppointment.toLowerCase())
  );

  const renderChart = () => {
    if (analyticsSection === "appointments") {
      const statusData = Object.entries(
        appointments.reduce((acc, a) => {
          acc[a.status] = (acc[a.status] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, value]) => ({ name, value }));

      const reasonData = Object.entries(
        appointments.reduce((acc, a) => {
          acc[a.reason] = (acc[a.reason] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, value]) => ({ name, value }));

      const monthData = Object.entries(
        appointments.reduce((acc, a) => {
          const month = new Date(a.date).toLocaleString("default", { month: "short" });
          acc[month] = (acc[month] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, value]) => ({ name, value }));

      return (
        <div className="analytics-graphs">
          <h3>Status Overview</h3>
          <BarChart width={600} height={350} data={statusData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#033f63" />
          </BarChart>

          <h3>Reason Breakdown</h3>
          <PieChart width={600} height={400}>
            <Pie
              data={reasonData}
              dataKey="value"
              nameKey="name"
              cx="50%" cy="50%" outerRadius={150}
              fill="#007bb5" label
            >
              {reasonData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          <h3>Appointments by Month</h3>
          <BarChart width={600} height={350} data={monthData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#66c2ff" />
          </BarChart>
        </div>
      );
    }

    if (analyticsSection === "doctors") {
      const specData = Object.entries(
        doctors.reduce((acc, d) => {
          acc[d.specialization] = (acc[d.specialization] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, value]) => ({ name, value }));

      const treatmentData = Object.entries(
        doctors.reduce((acc, d) => {
          acc[d.treatment] = (acc[d.treatment] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, value]) => ({ name, value }));

      return (
        <div className="analytics-graphs">
          <h3>Specialization Distribution</h3>
          <BarChart width={600} height={350} data={specData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#007bb5" />
          </BarChart>

          <h3>Doctors by Treatment</h3>
          <PieChart width={600} height={400}>
            <Pie
              data={treatmentData}
              dataKey="value"
              nameKey="name"
              cx="50%" cy="50%" outerRadius={150}
              fill="#00a3e0" label
            >
              {treatmentData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      );
    }

    if (analyticsSection === "patients") {
      const countryData = Object.entries(
        users.reduce((acc, u) => {
          if (u.country) acc[u.country] = (acc[u.country] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, value]) => ({ name, value }));

      return (
        <div className="analytics-graphs">
          <h3>Patients by Country</h3>
          <BarChart width={600} height={350} data={countryData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#00a3e0" />
          </BarChart>
        </div>
      );
    }

    if (analyticsSection === "reviews") {
      const reviewData = Object.entries(
        reviews.reduce((acc, r) => {
          acc[r.doctor_name] = (acc[r.doctor_name] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, value]) => ({ name, value }));

      return (
        <div className="analytics-graphs">
          <h3>5-Star Reviews</h3>
          <PieChart width={600} height={400}>
            <Pie
              data={reviewData}
              dataKey="value"
              nameKey="name"
              cx="50%" cy="50%" outerRadius={150}
              fill="#033f63" label
            >
              {reviewData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      );
    }
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h3>MediBharat Admin</h3>
        <ul>
          <li onClick={() => setActiveTab("analytics")} className={activeTab === "analytics" ? "active" : ""}>Analytics</li>
          <li onClick={() => setActiveTab("addDoctor")} className={activeTab === "addDoctor" ? "active" : ""}>Add Doctor</li>
          <li onClick={() => setActiveTab("deleteDoctor")} className={activeTab === "deleteDoctor" ? "active" : ""}>Delete Doctor</li>
          <li onClick={() => setActiveTab("appointments")} className={activeTab === "appointments" ? "active" : ""}>Appointments</li>
        </ul>
      </div>

      <div className="main-content">
      {actionMessage && <div className="toast-popup">{actionMessage}</div>}


        {activeTab === "addDoctor" && (
          <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={addDoctor}>
              <div className="add-doctor-form">
                {Object.keys(newDoctor).map((key) => (
                  <div className="form-group-row" key={key}>
                    <label className="form-label">
                      {key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}:
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      value={newDoctor[key]}
                      onChange={(e) => setNewDoctor({ ...newDoctor, [key]: e.target.value })}
                    />
                  </div>
                ))}
              </div>
              <button type="submit" className="btn btn-success">Add Doctor</button>
            </form>
          </div>
        )}

        {activeTab === "deleteDoctor" && (
          <div>
            <h2>Delete Doctor</h2>
            <input
              type="text"
              placeholder="Search Doctor by name"
              className="form-control mb-3"
              value={searchDoctor}
              onChange={(e) => setSearchDoctor(e.target.value)}
            />
            <table className="table">
              <thead>
                <tr><th>ID</th><th>Name</th><th>Hospital</th><th>Action</th></tr>
              </thead>
              <tbody>
                {filteredDoctors.map((doctor) => (
                  <tr key={doctor.d_id}>
                    <td>{doctor.d_id}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.hospital_name}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteDoctor(doctor.d_id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "appointments" && (
          <div>
            <h2>Appointments</h2>
            <input
              type="text"
              placeholder="Search Appointments by name"
              className="form-control mb-3"
              value={searchAppointment}
              onChange={(e) => setSearchAppointment(e.target.value)}
            />
            {statusUpdateMsg && <div className="alert alert-info">{statusUpdateMsg}</div>}
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th><th>User</th><th>Doctor</th><th>Hospital</th>
                  <th>Specialization</th><th>Date</th><th>Time</th>
                  <th>Reason</th><th>Status</th><th>Update</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.id}</td>
                    <td>{appointment.user_name}</td>
                    <td>{appointment.doctor_name}</td>
                    <td>{appointment.hospital_name}</td>
                    <td>{appointment.specialization}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>
                    <td>
                      <select
                        className="form-control"
                        onChange={(e) => updateAppointmentStatus(appointment.id, e.target.value)}
                        value={appointment.status}
                      >
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
        )}

        {activeTab === "analytics" && (
          <div>
            <h2>Analytics</h2>
            <div className="analytics-tabs">
              <button onClick={() => setAnalyticsSection("appointments")} className={analyticsSection === "appointments" ? "active" : ""}>Appointments</button>
              <button onClick={() => setAnalyticsSection("doctors")} className={analyticsSection === "doctors" ? "active" : ""}>Doctors</button>
              <button onClick={() => setAnalyticsSection("patients")} className={analyticsSection === "patients" ? "active" : ""}>Patients</button>
              <button onClick={() => setAnalyticsSection("reviews")} className={analyticsSection === "reviews" ? "active" : ""}>Reviews</button>
            </div>
            {renderChart()}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
