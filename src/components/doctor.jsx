import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaHeart } from 'react-icons/fa';
import { IoCloseCircle, IoFilterSharp } from 'react-icons/io5';
import './doctor.css';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [location, setLocation] = useState(null);
  const [hospital, setHospital] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [treatmentSearch, setTreatmentSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 999999]);
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(999999);


  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios.get(`${BACKEND_URL}/doctors`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setDoctors(response.data);
          setFilteredDoctors(response.data);

          const prices = response.data.map(d => Number(d.price || 0));
          const highest = Math.max(...prices);
          setMaxPrice(highest || 100000);  // fallback if all prices are missing
          setPriceRange([0, highest || 100000]);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);


  useEffect(() => {
    setFilteredDoctors(doctors.filter(doctor => {
      const matchesLocation = !location || doctor.city === location.value;
      const matchesHospital = !hospital || doctor.hospital_name === hospital.value;
      const matchesDoctor = !selectedDoctor || doctor.name === selectedDoctor.value;
      const matchesTreatment = !treatmentSearch || doctor.treatment?.toLowerCase().includes(treatmentSearch.toLowerCase());
      const inPriceRange = Number(doctor.price || 0) >= priceRange[0] && Number(doctor.price || 0) <= priceRange[1];

      return matchesLocation && matchesHospital && matchesDoctor && matchesTreatment && inPriceRange;
    }));
  }, [location, hospital, selectedDoctor, treatmentSearch, priceRange, doctors]);

  const locationOptions = [...new Set(doctors.map(d => d.city))].map(city => ({ value: city, label: city }));
  const hospitalOptions = [...new Set(
    doctors.filter(d => !location || d.city === location.value).map(d => d.hospital_name)
  )].map(hospital => ({ value: hospital, label: hospital }));
  const doctorOptions = [...new Set(
    doctors.filter(d => (!location || d.city === location.value) && (!hospital || d.hospital_name === hospital.value))
      .map(d => d.name)
  )].map(name => ({ value: name, label: name }));

  return (
    <div className="doctor-page">
      <button className="filter-toggle" onClick={() => setShowFilters(prev => !prev)}>
        <IoFilterSharp /> Filters
      </button>

      <div className="doctor-layout">
        <aside className={`filters-panel ${showFilters ? 'show' : ''}`}>
          <h3>Filter By</h3>

          <div className="filter-group">
            <label>Location</label>
            <Select
              options={locationOptions}
              value={location}
              onChange={setLocation}
              placeholder="Select City"
              isClearable
            />
          </div>

          <div className="filter-group">
            <label>Hospital</label>
            <Select
              options={hospitalOptions}
              value={hospital}
              onChange={setHospital}
              placeholder="Select Hospital"
              isClearable
            />
          </div>

          <div className="filter-group">
            <label>Doctor</label>
            <Select
              options={doctorOptions}
              value={selectedDoctor}
              onChange={setSelectedDoctor}
              placeholder="Select Doctor"
              isClearable
            />
          </div>


          <div className="filter-group">
            <label>Treatment / Disease</label>
            <input
              type="text"
              value={treatmentSearch}
              onChange={(e) => setTreatmentSearch(e.target.value)}
              placeholder="Search treatment..."
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <label>Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}</label>
            <Slider
              range
              min={0}
              max={maxPrice}
              step={1000}
              value={priceRange}
              onChange={setPriceRange}
            />

          </div>
        </aside>

        <main className="doctor-list">
          <h2>Doctors</h2>
          {filteredDoctors.length > 0 ? (
            <div className="doctor-grid">
              {filteredDoctors.map(doctor => (
                <div
                  key={doctor.d_id}
                  className="doctor-card"
                  onClick={() => navigate(`/doctor/${doctor.d_id}`)}
                >
                  <div className="doctor-image-container">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      onError={(e) => { e.target.src = "/placeholder.png"; }}
                    />
                  </div>
                  <h3>{doctor.name}</h3>
                  <p><strong>Specialization:</strong> {doctor.specialization}</p>
                  <p><strong>Hospital:</strong> {doctor.hospital_name}</p>
                  <p><strong>City:</strong> {doctor.city}</p>
                  <p><strong>Years of Experience:</strong> {doctor.years}</p>
                  <p><strong>Price:</strong> ₹{doctor.price ? doctor.price.toLocaleString() : "Not available"}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results">No doctors available</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Doctor;
