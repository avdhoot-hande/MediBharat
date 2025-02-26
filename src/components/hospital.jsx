import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaHeart } from 'react-icons/fa';
import './hospital.css';

const Hospital = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 9999999]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/hospitals')
      .then(response => {
        if (Array.isArray(response.data)) {
          setDoctors(response.data);
          setFilteredDoctors(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  useEffect(() => {
    setFilteredDoctors(doctors.filter(doctor =>
      doctor.name?.toLowerCase().includes(search.toLowerCase()) &&
      (!location || doctor.hospital_location === location.value) &&
      (!treatment || (doctor.treatments || []).includes(treatment.value)) &&
      (!priceRange || (
        Number(doctor.price || 0) >= priceRange[0] &&
        Number(doctor.price || 0) <= priceRange[1]
      ))
    ));
  }, [search, location, treatment, priceRange, doctors]);

  const locationOptions = [...new Set(doctors.map(d => d.hospital_location))].map(l => ({ value: l, label: l }));
  const treatmentOptions = [...new Set(doctors.flatMap(d => d.treatments || []))].map(t => ({ value: t, label: t }));

  const toggleFavorite = (doctor) => {
    setFavorites(prev => prev.includes(doctor.d_id) ? prev.filter(id => id !== doctor.d_id) : [...prev, doctor.d_id]);
  };

  return (
    <div className="hospital-container">
      <h2 className="hospital-title">Doctors</h2>
      <div className="filters">
        <input type="text" placeholder="Search by name or disease" value={search} onChange={e => setSearch(e.target.value)} className="search-bar"/>
        <Select options={locationOptions} placeholder="Select Hospital Location" onChange={setLocation} className="filter-dropdown"/>
        <Select options={treatmentOptions} placeholder="Select Treatment" onChange={setTreatment} className="filter-dropdown"/>
        <div className="price-slider-container">
          <label>Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}</label>
          <Slider range min={0} max={9999999} step={1000} value={priceRange} onChange={setPriceRange} className="price-slider"/>
        </div>
      </div>

      <div className="hospital-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <div key={doctor.d_id} className="hospital-card">
              <div className="hospital-image-container">
                <img src={doctor.img} alt={doctor.name} className="hospital-image" onError={(e) => { e.target.src = "/placeholder.png"; }}/>
              </div>
              <h3>{doctor.name}</h3>
              <p><strong>Field:</strong> {doctor.field}</p>
              <p><strong>Hospital Location:</strong> {doctor.hospital_location}</p>
              <p><strong>Price:</strong> ₹{doctor.price ? doctor.price.toLocaleString() : "Not available"}</p>
              <p><strong>Reviews:</strong> {doctor.reviews ? doctor.reviews.length : "No reviews yet"}</p>
              <div className="card-footer">
                <button className="view-details-btn">View Details</button>
                <button className={`favorite-btn ${favorites.includes(doctor.d_id) ? 'favorited' : ''}`} onClick={() => toggleFavorite(doctor)}>
                  <FaHeart />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No doctors available</p>
        )}
      </div>
    </div>
  );
};

export default Hospital;
